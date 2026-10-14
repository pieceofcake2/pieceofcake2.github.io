---
layout: home
title: Piece of Cake 2
titleTemplate: CakePHP 2, maintained for modern PHP

hero:
  name: Piece of Cake 2
  text: CakePHP 2, maintained for modern PHP
  tagline: >-
    <a href="https://github.com/pieceofcake2/cakephp">pieceofcake2/cakephp</a>
    is a community-maintained fork of CakePHP 2.x that runs on PHP 8.0–8.5.
    <span class="poc-hero-badge"><a href="https://packagist.org/packages/pieceofcake2/cakephp"><img
    src="https://img.shields.io/packagist/v/pieceofcake2/cakephp?label=pieceofcake2%2Fcakephp&color=d33c43"
    alt="Latest version of pieceofcake2/cakephp on Packagist" height="20"></a></span>
  image:
    src: /logo.png
    alt: CakePHP
  actions:
    - theme: brand
      text: Documentation
      link: https://pieceofcake2.github.io/docs/
      target: _self
    - theme: alt
      text: GitHub
      link: https://github.com/pieceofcake2
---

<script setup>
import PackageList from './components/PackageList.vue'
import './components/home.css'
</script>

## Getting started

### New application

Create a new application from the
[application skeleton](https://github.com/pieceofcake2/app):

```bash
composer create-project pieceofcake2/app my_app
```

See [Installation](https://pieceofcake2.github.io/docs/installation.html) for
the next steps. CakePHP 2 is for maintaining existing applications; if you are
starting a new project, consider [CakePHP 5](https://book.cakephp.org/5/en/).

### Existing application

Replace `cakephp/cakephp` with `pieceofcake2/cakephp`:

```bash
composer remove --no-update cakephp/cakephp
composer require pieceofcake2/cakephp
```

Then follow
[Migrating from CakePHP 2.10](https://pieceofcake2.github.io/docs/appendices/migrating-from-cakephp-2-10.html)
for the `composer.json` settings and the breaking changes.

## Packages

Every package is installed with Composer. Each name links to its
documentation.

<PackageList lang="en" />

## Security

Please do not report vulnerabilities in public issues or pull requests.
Use GitHub's private vulnerability reporting: open the **Security** tab of the
affected repository and click **Report a vulnerability**. See the
[security policy](https://github.com/pieceofcake2/.github/blob/master/SECURITY.md)
for details, and [Security Fixes](https://pieceofcake2.github.io/docs/appendices/security-fixes.html)
for the vulnerabilities fixed so far.

## Contributing

Bug reports (especially PHP 8.x compatibility issues) and pull requests are
welcome. Read the
[contribution guide](https://github.com/pieceofcake2/.github/blob/master/CONTRIBUTING.md)
before you start.
