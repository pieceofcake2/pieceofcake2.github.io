// Overrides for the .vitepress/config.js of pieceofcake2/docs-skeleton.
// The skeleton is cloned at build time; see README.md.
//
// The header menu comes from the skeleton's shared book navigation (bookNav),
// so it stays the same as the book's and the plugin documentation sites'.
// `current: 'home'` links its "Home" item within this site.

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

export default ({ bookNav }) => ({
  base: "/",
  title: "Piece of Cake 2",
  description: share.en.description,
  transformHead: shareHead,
  sitemap: {
    hostname: "https://pieceofcake2.github.io/",
  },
  themeConfig: {
    // A search over this single page is of little use; the book has its own.
    search: { provider: "none" },
    socialLinks: [
      { icon: "github", link: "https://github.com/pieceofcake2" },
    ],
    nav: bookNav({ absolute: true, current: 'home' }),
    footer: {
      message: "CakePHP is a trademark of the Cake Software Foundation. Piece of Cake 2 is a community project and is not affiliated with or endorsed by the Cake Software Foundation.",
      copyright: "© 2025-present Piece of Cake 2. CakePHP 2 is released under the <a href=\"https://github.com/pieceofcake2/cakephp/blob/2.x/LICENSE\">MIT License</a>.",
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
          copyright: "© 2025-present Piece of Cake 2. CakePHP 2 は <a href=\"https://github.com/pieceofcake2/cakephp/blob/2.x/LICENSE\">MIT ライセンス</a>で公開されています。",
        },
      },
    },
  },
});
