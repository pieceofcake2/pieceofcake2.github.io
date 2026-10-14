// Overrides for the .vitepress/config.js of pieceofcake2/docs-skeleton.
// The skeleton is cloned at build time; see README.md.
//
// The header menu comes from the skeleton's shared book navigation (bookNav),
// so it stays the same as the book's and the plugin documentation sites'.
// `current: 'home'` links its "Home" item within this site.

export default ({ bookNav }) => ({
  base: "/",
  title: "Piece of Cake 2",
  description: "CakePHP 2, maintained for modern PHP: a community-maintained fork of CakePHP 2.x for PHP 8.",
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
      description: "CakePHP 2 をモダン PHP で: PHP 8 に対応した CakePHP 2.x のコミュニティフォーク",
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
