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

features:
  - icon:
      src: /icons/build_quickly_chiffon.svg
      width: 64
      height: 46
    title: PHP 8.0–8.5
    details: >-
      The full test suite runs in CI on every PHP version from 8.0 to 8.5,
      against MySQL, PostgreSQL, SQLite and SQL Server.
    link: https://github.com/pieceofcake2/cakephp/actions/workflows/CI.yml
    linkText: CI workflow
  - icon:
      src: /icons/batteries_included_chiffon.svg
      width: 64
      height: 46
    title: Drop-in Composer replacement
    details: >-
      pieceofcake2/cakephp replaces cakephp/cakephp, so plugins and packages
      that require cakephp/cakephp 2.x keep installing and working.
    link: https://pieceofcake2.github.io/docs/appendices/migrating-from-cakephp-2-10.html
    linkText: Migrating from CakePHP 2.10
    target: _self
  - icon:
      src: /icons/secure_chiffon.svg
      width: 64
      height: 46
    title: Security fixes
    details: >-
      Vulnerabilities that affect CakePHP 2.x are still fixed, with notes on
      what you need to do in your application.
    link: https://pieceofcake2.github.io/docs/appendices/security-fixes.html
    linkText: Security fixes
    target: _self
  - icon:
      src: /icons/mvc_chiffon.svg
      width: 64
      height: 46
    title: Modern and legacy layouts
    details: >-
      Keep the classic <code>app/</code> directory layout, or move step by step
      to the CakePHP 5 style layout (<code>src/</code>, <code>templates/</code>,
      <code>config/</code>).
    link: https://pieceofcake2.github.io/docs/appendices/migrating-to-the-modern-layout.html
    linkText: Migrating to the modern layout
    target: _self
  - icon:
      src: /icons/no_config_chiffon.svg
      width: 64
      height: 46
    title: PHPStan level 5
    details: >-
      The app skeleton, Bake and all maintained plugins are checked with
      PHPStan at level 5 in CI. phpstan-cakephp2 brings the same analysis to
      your application.
    link: https://pieceofcake2.github.io/docs/development/static-analysis.html
    linkText: Static analysis
    target: _self
  - icon:
      src: /icons/license_chiffon.svg
      width: 64
      height: 46
    title: Backports from CakePHP 5
    details: >-
      <code>IntegrationTestTrait</code> and <code>EmailTrait</code> for
      request-level tests (core v2.12.4), and <code>.env</code> support in the
      app skeleton (v2.4.0).
    link: https://github.com/pieceofcake2/cakephp/blob/2.x/UPGRADE.md#v2124
    linkText: Upgrade notes
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
