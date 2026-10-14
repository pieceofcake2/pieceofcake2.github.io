<script setup>
import { groups, docsUrl, githubUrl, packagistUrl, badgeUrl } from './packages.js'

const props = defineProps({
  lang: { type: String, default: 'en' },
})

const t = (entry) => entry[props.lang] ?? entry.en

const labels = {
  en: { docs: 'Documentation', github: 'GitHub', badge: 'Latest version on Packagist' },
  ja: { docs: 'ドキュメント', github: 'GitHub', badge: 'Packagist の最新バージョン' },
}
const label = (key) => (labels[props.lang] ?? labels.en)[key]

const sections = groups.map((group) => ({
  id: group.id,
  title: group,
  categories: group.categories ?? [{ items: group.items }],
}))
</script>

<template>
  <div class="poc-packages">
    <section
      v-for="section in sections"
      :key="section.id"
      class="poc-group"
    >
      <h3 :id="`packages-${section.id}`">
        {{ t(section.title) }}
      </h3>
      <template
        v-for="(category, index) in section.categories"
        :key="index"
      >
        <h4
          v-if="category.en"
          class="poc-category"
        >
          {{ t(category) }}
        </h4>
        <ul class="poc-grid">
          <li
            v-for="item in category.items"
            :key="item.repo"
            class="poc-card"
          >
            <a
              class="poc-name"
              :href="docsUrl(item)"
              :title="label('docs')"
            >
              <span class="poc-vendor">pieceofcake2/</span><span class="poc-repo">{{ item.package.split('/')[1] }}</span>
            </a>
            <p class="poc-desc">
              {{ t(item) }}
            </p>
            <div class="poc-meta">
              <a
                class="poc-badge"
                :href="packagistUrl(item)"
              >
                <img
                  :src="badgeUrl(item)"
                  :alt="`${label('badge')}: ${item.package}`"
                  height="20"
                  loading="lazy"
                >
              </a>
              <span class="poc-links">
                <a :href="docsUrl(item)">{{ label('docs') }}</a>
                <a :href="githubUrl(item)">{{ label('github') }}</a>
              </span>
            </div>
          </li>
        </ul>
      </template>
    </section>
  </div>
</template>

<style scoped>
.poc-group + .poc-group {
  margin-top: 40px;
}

.poc-category {
  margin-top: 24px;
  font-size: 15px;
  color: var(--vp-c-text-2);
}

.vp-doc ul.poc-grid,
ul.poc-grid {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 12px;
}

.vp-doc li.poc-card,
li.poc-card {
  margin: 0;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s;
}

li.poc-card:hover {
  border-color: var(--vp-c-brand-1);
}

.vp-doc a.poc-name,
a.poc-name {
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.4;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.poc-vendor {
  color: var(--vp-c-text-3);
}

.poc-repo {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

a.poc-name:hover .poc-repo {
  color: var(--vp-c-brand-1);
}

.vp-doc p.poc-desc,
p.poc-desc {
  margin: 0;
  flex: 1;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.poc-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
}

.poc-badge {
  display: inline-flex;
  max-width: 100%;
}

.poc-badge img {
  display: block;
  height: 20px;
  max-width: 100%;
}

.poc-links {
  display: inline-flex;
  gap: 12px;
  font-size: 13px;
}

.vp-doc .poc-links a,
.poc-links a {
  color: var(--cake-color-link);
  font-weight: 500;
  text-decoration: none;
}

.poc-links a:hover {
  text-decoration: underline;
}

@media (max-width: 639px) {
  .vp-doc li.poc-card,
  li.poc-card {
    padding: 12px 14px;
    gap: 6px;
  }

  .vp-doc ul.poc-grid,
  ul.poc-grid {
    gap: 8px;
  }
}
</style>
