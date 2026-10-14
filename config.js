// Overrides for the .vitepress/config.js of pieceofcake2/docs-skeleton.
// The skeleton is cloned at build time; see README.md.

const BOOK = "https://pieceofcake2.github.io/docs/";

// The header menu is the same as the one of the book (pieceofcake2/docs,
// config.js). The book uses links relative to its base (/docs/), so they are
// absolute here. Links into the book open in the same tab, like they do in
// the book itself.
const book = (text, path) => ({ text, link: BOOK + path, target: "_self", noIcon: true });

const links = {
  text: "Links",
  items: [
    { text: "pieceofcake2/cakephp", link: "https://github.com/pieceofcake2/cakephp" },
    { text: "Packagist", link: "https://packagist.org/packages/pieceofcake2/cakephp" },
    { text: "CakePHP 5.x (official)", link: "https://book.cakephp.org/5/en/" },
  ],
};

export default {
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
    nav: [
      book("Piece of Cake 2", "pieceofcake2"),
      book("Getting Started", "getting-started"),
      { text: "API", link: "https://api.cakephp.org/2.10/" },
      book("Documentation", ""),
      { ...links },
    ],
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
      description: "CakePHP 2 を現在の PHP で: PHP 8 に対応した CakePHP 2.x のコミュニティフォーク",
      themeConfig: {
        nav: [
          book("Piece of Cake 2", "ja/pieceofcake2"),
          book("はじめに", "ja/getting-started"),
          { text: "API", link: "https://api.cakephp.org/2.10/" },
          book("ドキュメント", "ja/"),
          { ...links },
        ],
        footer: {
          message: "CakePHP は Cake Software Foundation の商標です。Piece of Cake 2 はコミュニティによるプロジェクトであり、Cake Software Foundation との提携や承認を受けたものではありません。",
          copyright: "© 2025-present Piece of Cake 2. CakePHP 2 は <a href=\"https://github.com/pieceofcake2/cakephp/blob/2.x/LICENSE\">MIT ライセンス</a>で公開されています。",
        },
      },
    },
  },
};
