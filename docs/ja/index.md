---
layout: home
title: Piece of Cake 2
titleTemplate: CakePHP 2 を現在の PHP で

hero:
  name: Piece of Cake 2
  text: CakePHP 2 を現在の PHP で
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

features:
  - icon:
      src: /icons/build_quickly_chiffon.svg
      width: 64
      height: 46
    title: PHP 8.0〜8.5
    details: >-
      PHP 8.0 から 8.5 までのすべてのバージョンで、MySQL、PostgreSQL、SQLite、
      SQL Server を使ったテストスイート全体を CI で実行しています。
    link: https://github.com/pieceofcake2/cakephp/actions/workflows/CI.yml
    linkText: CI ワークフロー
  - icon:
      src: /icons/batteries_included_chiffon.svg
      width: 64
      height: 46
    title: Composer でそのまま置き換え
    details: >-
      pieceofcake2/cakephp は cakephp/cakephp を置き換える (replace) パッケージです。
      cakephp/cakephp 2.x を必要とするプラグインやパッケージも、そのままインストールして使えます。
    link: https://pieceofcake2.github.io/docs/ja/appendices/migrating-from-cakephp-2-10.html
    linkText: CakePHP 2.10 からの移行
    target: _self
  - icon:
      src: /icons/secure_chiffon.svg
      width: 64
      height: 46
    title: 脆弱性の修正
    details: >-
      CakePHP 2.x に影響する脆弱性を引き続き修正しています。アプリケーション側で必要な対応も説明しています。
    link: https://pieceofcake2.github.io/docs/ja/appendices/security-fixes.html
    linkText: 脆弱性への対応
    target: _self
  - icon:
      src: /icons/mvc_chiffon.svg
      width: 64
      height: 46
    title: モダン構成と従来の構成
    details: >-
      従来の <code>app/</code> ディレクトリ構成のままでも使えます。CakePHP 5 と同じ形の構成
      (<code>src/</code>、<code>templates/</code>、<code>config/</code>) へ段階的に移ることもできます。
    link: https://pieceofcake2.github.io/docs/ja/appendices/migrating-to-the-modern-layout.html
    linkText: モダン構成への移行
    target: _self
  - icon:
      src: /icons/no_config_chiffon.svg
      width: 64
      height: 46
    title: PHPStan レベル 5
    details: >-
      アプリケーションスケルトン、Bake、メンテナンスしているすべてのプラグインを、CI で
      PHPStan のレベル 5 でチェックしています。phpstan-cakephp2 を使うと、アプリケーションでも同じ解析ができます。
    link: https://pieceofcake2.github.io/docs/ja/development/static-analysis.html
    linkText: 静的解析
    target: _self
  - icon:
      src: /icons/license_chiffon.svg
      width: 64
      height: 46
    title: CakePHP 5 からのバックポート
    details: >-
      リクエスト単位でテストするための <code>IntegrationTestTrait</code> と
      <code>EmailTrait</code> (コア v2.12.4)、アプリケーションスケルトンでの
      <code>.env</code> 対応 (v2.4.0) をバックポートしています。
    link: https://github.com/pieceofcake2/cakephp/blob/2.x/UPGRADE.md#v2124
    linkText: アップグレードガイド (英語)
---

<script setup>
import PackageList from '../components/PackageList.vue'
import '../components/home.css'
</script>

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
