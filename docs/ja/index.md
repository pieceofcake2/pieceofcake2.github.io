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
    alt="Packagist の pieceofcake2/cakephp の最新バージョン" height="20"></a><a href="https://packagist.org/packages/pieceofcake2/cakephp"><img
    src="https://img.shields.io/packagist/dependency-v/pieceofcake2/cakephp/php?logo=php&logoColor=%23FFFFFF&label=PHP&labelColor=%23777BB4&color=%23FFFFFF"
    alt="対応している PHP のバージョン" height="20"></a><a href="https://github.com/pieceofcake2/cakephp/actions/workflows/CI.yml"><img
    src="https://img.shields.io/github/actions/workflow/status/pieceofcake2/cakephp/CI.yml?label=CI"
    alt="CI の状態" height="20"></a><a href="https://codecov.io/gh/pieceofcake2/cakephp"><img
    src="https://img.shields.io/codecov/c/gh/pieceofcake2/cakephp?label=Coverage"
    alt="テストカバレッジ" height="20"></a><a href="https://github.com/pieceofcake2/cakephp/actions/workflows/CI.yml"><img
    src="https://img.shields.io/badge/PHPStan-level%205-brightgreen?label=PHPStan"
    alt="PHPStan レベル 5" height="20"></a><a href="https://packagist.org/packages/pieceofcake2/cakephp/stats"><img
    src="https://img.shields.io/packagist/dt/pieceofcake2/cakephp?label=Downloads"
    alt="Packagist での総ダウンロード数" height="20"></a><a href="https://github.com/pieceofcake2/cakephp/blob/2.x/LICENSE"><img
    src="https://img.shields.io/github/license/pieceofcake2/cakephp?label=License"
    alt="ライセンス" height="20"></a></span>
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
    <p class="poc-feature-title">モダン PHP に対応</p>
    <p>PHP 8.0〜8.5 で動作します。Composer でインストールと依存関係を管理し、コードは CakePHP 5 と同じ<a href="https://pieceofcake2.github.io/docs/ja/contributing/cakephp-coding-conventions.html">コーディング規約</a>にそろえています。</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">脆弱性への対応</p>
    <p>本家のサポートが終わったあとも、CakePHP 2.x で見つかった<a href="https://pieceofcake2.github.io/docs/ja/security/fixes.html">脆弱性</a>を修正し続けています。</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">テストで品質を確保</p>
    <p>対応するすべての PHP バージョンで、PHPUnit 9.6 のテストを CI で実行しています。PHPStan による静的解析も行っています。</p>
  </div>
  <div class="poc-feature">
    <p class="poc-feature-title">プラグインでモダンな開発に</p>
    <p><a href="https://pieceofcake2.github.io/vite/">Vite</a> によるアセットの連携、<a href="https://pieceofcake2.github.io/twig-view/">Twig のビュー</a>、<a href="https://pieceofcake2.github.io/captcha/">CAPTCHA</a>、<a href="https://pieceofcake2.github.io/panther/">Symfony Panther による End-to-End テスト</a>など、今の開発に合わせたプラグインを用意しています。</p>
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
これまでに修正した脆弱性は[脆弱性への対応](https://pieceofcake2.github.io/docs/ja/security/fixes.html)
を参照してください。

## コントリビューション

バグ報告（特に PHP 8.x の互換性の問題）やプルリクエストを歓迎しています。始める前に
[コントリビューションガイド](https://github.com/pieceofcake2/.github/blob/master/CONTRIBUTING.md)
を読んでください。
