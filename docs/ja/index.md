---
layout: home
title: Piece of Cake 2
titleTemplate: CakePHP 2 をモダン PHP で

hero:
  name: Piece of Cake 2
  text: CakePHP 2 をモダン PHP で
  tagline: >-
    <a href="https://github.com/pieceofcake2/cakephp">pieceofcake2/cakephp</a>
    は、PHP 8.0〜8.5 で動作する、コミュニティがメンテナンスしている CakePHP 2.x のフォークです。
    <span class="poc-hero-badge"><a href="https://packagist.org/packages/pieceofcake2/cakephp"><img
    src="https://img.shields.io/packagist/v/pieceofcake2/cakephp?label=pieceofcake2%2Fcakephp&color=d33c43"
    alt="Packagist の pieceofcake2/cakephp の最新バージョン" height="20"></a></span>
  image:
    src: /logo.png
    alt: CakePHP
  actions:
    - theme: brand
      text: ドキュメント
      link: https://pieceofcake2.github.io/docs/ja/
      target: _self
    - theme: alt
      text: GitHub
      link: https://github.com/pieceofcake2
---

<script setup>
import PackageList from '../components/PackageList.vue'
import '../components/home.css'
</script>

<div class="poc-features">
  <div class="poc-feature">
    <p class="poc-feature-title">モダン PHP のルール</p>
    <p>PHP 8.0〜8.5 で動作します。コードは
    <a href="https://pieceofcake2.github.io/docs/ja/contributing/cakephp-coding-conventions.html">CakePHP 5 のコーディング規約</a>に従い、phpcs でチェックしています。</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">脆弱性の修正</p>
    <p>CakePHP 2.x の脆弱性を引き続き修正しています。詳しくは<a href="https://pieceofcake2.github.io/docs/ja/appendices/security-fixes.html">脆弱性への対応</a>を参照してください。</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">Composer とテストによる品質</p>
    <p>Composer でインストールし、すべての PHP バージョンの CI で PHPUnit 9.6 のテストを実行し、PHPStan でチェックしています。</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">プラグインによるモダンなツール</p>
    <p>Twig ビューなどのプラグインをメンテナンスしているほか、Vite や Webpack Encore のアセットヘルパー、CAPTCHA、ブラウザでの E2E テストといった新しいパッケージを提供しています。</p>
  </div>
</div>

## はじめる

### 新しいアプリケーション

[アプリケーションスケルトン](https://github.com/pieceofcake2/app)から新しいアプリケーションを作成します。

```bash
composer create-project pieceofcake2/app my_app
```

続きは[インストール](https://pieceofcake2.github.io/docs/ja/installation.html)を参照してください。
CakePHP 2 は既存のアプリケーションを保守するためのものです。新しくプロジェクトを始める場合は
[CakePHP 5](https://book.cakephp.org/5/ja/) を検討してください。

### 既存のアプリケーション

`cakephp/cakephp` を `pieceofcake2/cakephp` に置き換えます。

```bash
composer remove --no-update cakephp/cakephp
composer require pieceofcake2/cakephp
```

`composer.json` の設定と破壊的変更については、
[CakePHP 2.10 からの移行](https://pieceofcake2.github.io/docs/ja/appendices/migrating-from-cakephp-2-10.html)
を参照してください。

## パッケージ

すべてのパッケージは Composer でインストールします。パッケージ名のリンクから、それぞれのドキュメントを開けます。

<PackageList lang="ja" />

## セキュリティ

セキュリティの問題は、公開の issue やプルリクエストでは報告しないでください。
GitHub の非公開の脆弱性報告を使ってください。対象のリポジトリを開き、**Security** タブの
**Report a vulnerability** から報告できます。詳しくは
[セキュリティポリシー](https://github.com/pieceofcake2/.github/blob/master/SECURITY.md) を、
これまでに修正した脆弱性は[脆弱性への対応](https://pieceofcake2.github.io/docs/ja/appendices/security-fixes.html)
を参照してください。

## コントリビューション

バグ報告（特に PHP 8.x の互換性の問題）やプルリクエストを歓迎しています。始める前に
[コントリビューションガイド](https://github.com/pieceofcake2/.github/blob/master/CONTRIBUTING.md)
を読んでください。
