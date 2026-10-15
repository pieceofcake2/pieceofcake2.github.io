# pieceofcake2.github.io

The top page of the [Piece of Cake 2](https://github.com/pieceofcake2)
project, published at https://pieceofcake2.github.io/

The page introduces [pieceofcake2/cakephp](https://github.com/pieceofcake2/cakephp),
a community-maintained fork of CakePHP 2.x for PHP 8, and lists the packages
the project maintains. The documentation of CakePHP 2 itself is the book at
https://pieceofcake2.github.io/docs/ ([pieceofcake2/docs](https://github.com/pieceofcake2/docs);
Markdown: [docs/en/index.md](https://github.com/pieceofcake2/docs/blob/2.x/docs/en/index.md)).

The site uses the same theme as the book:
[pieceofcake2/docs-skeleton](https://github.com/pieceofcake2/docs-skeleton)
(VitePress), cloned at build time.

## Repository Layout

- `docs/index.md` - the English page (`/`)
- `docs/ja/index.md` - the Japanese page (`/ja/`)
- `docs/components/PackageList.vue` - renders the package list shown on both
  pages, with links to the documentation site, the Markdown of the
  documentation on GitHub and the repository of each package. The list itself
  is `.vitepress/packages.js` of
  [pieceofcake2/docs-skeleton](https://github.com/pieceofcake2/docs-skeleton),
  which also builds the "Plugins" menu of the header; the component imports it
  from the skeleton cloned at build time. When a repository is added, add it
  there and to the book's
  [Maintained Plugins](https://pieceofcake2.github.io/docs/plugins/maintained-plugins.html)
  page.
- `config.js` - overrides of the skeleton's VitePress configuration: header
  menu (the same as the book's), footer and languages

Update both pages when you change the text. Japanese text uses the です・ます
style, like the Japanese pages of the book.

## Local Development

Requires `git`, `node` (22), `npm` and `rsync`.

```bash
bin/build.sh                  # build into .skeleton/.vitepress/dist
bin/build.sh --dev            # start the VitePress dev server
bin/build.sh --preview 4173   # build, then serve the result on port 4173
```

`bin/build.sh` clones the skeleton into `.skeleton/` (ignored by git), copies
`docs/` and `config.js` into it and runs the build there, the same way as the
deploy workflow. Use `--skeleton-path ../docs-skeleton` to build with a local
checkout of the skeleton. Dependencies are installed with
`ignore-scripts=true` (the skeleton's `.npmrc`).

## Markdown for AI Tools

The skeleton also writes the Markdown of each page (`/index.md`,
`/ja/index.md`) and `llms.txt` / `llms-full.txt` (`/llms.txt`, `/ja/llms.txt`).
`config.js` replaces the `<PackageList>` component with the same list in
Markdown, and adds the list of documentation sites, with the `llms.txt` of
each, to `llms.txt`.

## Deployment

Pushes to `main` are deployed to GitHub Pages by
`.github/workflows/deploy.yml`. The workflow can also be started manually, and
by a `skeleton-updated` repository dispatch when the theme, the header menu or
the package list changes.

## License

MIT, see [LICENSE](LICENSE). CakePHP is a trademark of the Cake Software
Foundation. Piece of Cake 2 is a community project and is not affiliated with
or endorsed by the Cake Software Foundation.
