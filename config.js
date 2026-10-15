// Overrides for the .vitepress/config.js of pieceofcake2/docs-skeleton.
// The skeleton is cloned at build time; see README.md.
//
// The header menu comes from the skeleton's shared book navigation (bookNav),
// so it stays the same as the book's and the plugin documentation sites'.
// `current: 'home'` links its "Home" item within this site.

import { writeFileSync } from "fs";
import { join } from "path";
import { groups, docsUrl } from "./.vitepress/packages.js";

const SITE = "https://pieceofcake2.github.io/";

// Share (Open Graph / X) metadata of the top page, per locale.
const share = {
  en: {
    url: SITE,
    locale: "en_US",
    title: "CakePHP 2, maintained for modern PHP",
    description: "pieceofcake2/cakephp is a community-maintained fork of CakePHP 2.x that runs on PHP 8.0–8.5.",
    imageAlt: "Piece of Cake 2: CakePHP 2, maintained for modern PHP",
  },
  ja: {
    url: SITE + "ja/",
    locale: "ja_JP",
    title: "CakePHP 2 をモダン PHP で",
    description: "pieceofcake2/cakephp は、PHP 8.0〜8.5 で動作する、コミュニティがメンテナンスしている CakePHP 2.x のフォークです。",
    imageAlt: "Piece of Cake 2: CakePHP 2, maintained for modern PHP",
  },
};

function shareHead({ pageData }) {
  const pages = { "index.md": "en", "ja/index.md": "ja" };
  const lang = pages[pageData.relativePath];
  if (!lang) {
    return [];
  }
  const s = share[lang];
  const other = share[lang === "en" ? "ja" : "en"];
  const image = SITE + "og-image.png";
  const meta = (attr, key, content) => ["meta", { [attr]: key, content }];

  return [
    ["link", { rel: "canonical", href: s.url }],
    ["link", { rel: "alternate", hreflang: "en", href: share.en.url }],
    ["link", { rel: "alternate", hreflang: "ja", href: share.ja.url }],
    ["link", { rel: "alternate", hreflang: "x-default", href: share.en.url }],
    meta("property", "og:type", "website"),
    meta("property", "og:site_name", "Piece of Cake 2"),
    meta("property", "og:title", s.title),
    meta("property", "og:description", s.description),
    meta("property", "og:url", s.url),
    meta("property", "og:locale", s.locale),
    meta("property", "og:locale:alternate", other.locale),
    meta("property", "og:image", image),
    meta("property", "og:image:type", "image/png"),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("property", "og:image:alt", s.imageAlt),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", s.title),
    meta("name", "twitter:description", s.description),
    meta("name", "twitter:image", image),
    meta("name", "twitter:image:alt", s.imageAlt),
  ];
}

// The Markdown version of the pages (index.md, ja/index.md) and llms.txt are
// written by the skeleton. The package list is a Vue component on the page; in
// the Markdown it is replaced by the same list as Markdown, and llms.txt also
// links the llms.txt of every documentation site.
function markdownOutput(packageListMarkdown) {
  if (!packageListMarkdown) {
    return undefined;
  }

  const langOf = (locale) => (locale === "root" ? "en" : locale);

  return {
    transform: (content, { locale }) =>
      content.replace(/<PackageList\b[^>]*\/>/g, () => packageListMarkdown(langOf(locale))),
    llmsTxt: (locale) =>
      `## ${locale === "ja" ? "ドキュメントサイト" : "Documentation sites"}\n\n` +
      packageListMarkdown(langOf(locale)),
  };
}

// All documentation sites are served under this host, and crawlers read
// robots.txt only at the root. sitemap.xml of this site is a sitemap index: it
// lists sitemap-home.xml (the pages of this site) and the sitemap.xml of every
// documentation site in packages.js. The built-in sitemap of VitePress is not
// used here because it always writes sitemap.xml.
function writeSitemaps({ outDir, pages }) {
  const xml = (root, body) =>
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    `<${root} xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}</${root}>\n`;

  const pageUrls = pages.map((page) => SITE + page.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, ".html"));
  writeFileSync(
    join(outDir, "sitemap-home.xml"),
    xml("urlset", pageUrls.map((loc) => `  <url><loc>${loc}</loc></url>\n`).join("")),
  );

  const sites = groups.flatMap((g) => g.items ?? g.categories.flatMap((c) => c.items));
  const sitemaps = [SITE + "sitemap-home.xml", ...new Set(sites.map((item) => docsUrl(item) + "sitemap.xml"))];
  writeFileSync(
    join(outDir, "sitemap.xml"),
    xml("sitemapindex", sitemaps.map((loc) => `  <sitemap><loc>${loc}</loc></sitemap>\n`).join("")),
  );

  writeFileSync(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
}

export default ({ bookNav, packageListMarkdown }) => ({
  base: "/",
  title: "Piece of Cake 2",
  description: share.en.description,
  transformHead: shareHead,
  markdownOutput: markdownOutput(packageListMarkdown),
  buildEnd: writeSitemaps,
  themeConfig: {
    // A search over this single page is of little use; the book has its own.
    search: { provider: "none" },
    socialLinks: [
      { icon: "github", link: "https://github.com/pieceofcake2" },
    ],
    nav: bookNav({ absolute: true, current: 'home' }),
    footer: {
      message: "CakePHP is a trademark of the Cake Software Foundation. Piece of Cake 2 is a community project and is not affiliated with or endorsed by the Cake Software Foundation.",
      copyright: "© Piece of Cake 2. CakePHP 2 is released under the <a href=\"https://github.com/pieceofcake2/cakephp/blob/2.x/LICENSE\">MIT License</a>.",
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    ja: {
      label: "Japanese",
      lang: "ja",
      description: share.ja.description,
      themeConfig: {
        nav: bookNav({ locale: 'ja', absolute: true, current: 'home' }),
        footer: {
          message: "CakePHP は Cake Software Foundation の商標です。Piece of Cake 2 はコミュニティによるプロジェクトであり、Cake Software Foundation との提携や承認を受けたものではありません。",
          copyright: "© Piece of Cake 2. CakePHP 2 は <a href=\"https://github.com/pieceofcake2/cakephp/blob/2.x/LICENSE\">MIT ライセンス</a>で公開されています。",
        },
      },
    },
  },
});
