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
    alt="Latest version of pieceofcake2/cakephp on Packagist" height="20"></a><a href="https://packagist.org/packages/pieceofcake2/cakephp"><img
    src="https://img.shields.io/packagist/dependency-v/pieceofcake2/cakephp/php?logo=php&logoColor=%23FFFFFF&label=PHP&labelColor=%23777BB4&color=%23FFFFFF"
    alt="Supported PHP versions" height="20"></a><a href="https://github.com/pieceofcake2/cakephp/actions/workflows/CI.yml"><img
    src="https://img.shields.io/github/actions/workflow/status/pieceofcake2/cakephp/CI.yml?label=CI"
    alt="CI status" height="20"></a><a href="https://codecov.io/gh/pieceofcake2/cakephp"><img
    src="https://img.shields.io/codecov/c/gh/pieceofcake2/cakephp?label=Coverage"
    alt="Test coverage" height="20"></a><a href="https://github.com/pieceofcake2/cakephp/actions/workflows/CI.yml"><img
    src="https://img.shields.io/badge/PHPStan-level%205-brightgreen?label=PHPStan"
    alt="PHPStan level 5" height="20"></a><a href="https://packagist.org/packages/pieceofcake2/cakephp/stats"><img
    src="https://img.shields.io/packagist/dt/pieceofcake2/cakephp?label=Downloads"
    alt="Total downloads on Packagist" height="20"></a><a href="https://github.com/pieceofcake2/cakephp/blob/2.x/LICENSE"><img
    src="https://img.shields.io/github/license/pieceofcake2/cakephp?label=License"
    alt="License" height="20"></a></span>
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

<div class="poc-features">
  <div class="poc-feature">
    <p class="poc-feature-title">Modern PHP</p>
    <p>Runs on PHP 8.0–8.5. Installed and managed with Composer, with code that follows the CakePHP 5 <a href="https://pieceofcake2.github.io/docs/contributing/cakephp-coding-conventions.html">coding standard</a>.</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">Security fixes</p>
    <p><a href="https://pieceofcake2.github.io/docs/security/fixes.html">Vulnerabilities</a> found in CakePHP 2.x keep being fixed after the upstream end of life.</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">Tested</p>
    <p>PHPUnit 9.6 test suites run in CI on every supported PHP version, together with PHPStan static analysis.</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">Modern tooling through plugins</p>
    <p><a href="https://pieceofcake2.github.io/vite/">Vite</a> asset integration, <a href="https://pieceofcake2.github.io/twig-view/">Twig views</a>, <a href="https://pieceofcake2.github.io/captcha/">CAPTCHA</a>, <a href="https://pieceofcake2.github.io/panther/">End-to-End tests with Symfony Panther</a> and more.</p>
  </div>
</div>

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
for details, and [Security Fixes](https://pieceofcake2.github.io/docs/security/fixes.html)
for the vulnerabilities fixed so far.

For your own applications, the security packages check and harden them.
[pieceofcake2/security-check](https://pieceofcake2.github.io/security-check/) runs the checks of the known
vulnerabilities of the Composer packages (SCA), of the code (SAST) and of the running application (DAST) in one
command, each with a PDF report, and
[pieceofcake2/security-headers](https://pieceofcake2.github.io/security-headers/) adds the security headers to
every response. See [Security Checks](https://pieceofcake2.github.io/docs/security/checks.html).

## Contributing

Bug reports (especially PHP 8.x compatibility issues) and pull requests are
welcome. Read the
[contribution guide](https://github.com/pieceofcake2/.github/blob/master/CONTRIBUTING.md)
before you start.
