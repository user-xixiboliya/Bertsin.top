---
title: Valaxy Markdown组件调用库
date: 2025-04-01
updated: 2025-04-01
cover: https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-yxoejx.jpg
categories: valaxy 
description: 这篇博文展示了改网站一些在markdown中常用的插件。
tags:
  - valaxy
  - 笔记
top: 1
---

## Valaxy

本站基于 [Valaxy](https://valaxy.site/) 构建。Valaxy 是一个支持在 Markdown 中直接嵌入 Vue 组件的静态博客框架，使得内容不仅限于静态文本，还可以灵活调用动态组件，从而提升文章的表现力与交互性。

对于本文而言，旨在系统记录在该框架下 Markdown 中常用插件的使用方式，并整理一些可能会用到的组件示例，以便于后续参考与复用。

## Usage

Modify `valaxy.config.ts` to custom your blog[^1-zh] :100:.

<TestPostMeta :frontmatter="frontmatter" />


### 项目展示
这一部分展示了项目卡片Grid。
<ContentCard>
  <Card
    title="Valaxy"
    description="下一代静态博客框架"
    link="https://valaxy.site/"
    image="https://valaxy.site/assets/valaxy-logo.DPa8-qbg.png"
  />
  <Card
    title="My Old Blog"
    description="基于 Hugo 构建的旧博客"
    link="https://user-xixiboliya.github.io"
    image="https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-yxoejx.jpg"
  />
  <Card
    title="Valaxy Theme Sakura"
    description="一个为 Valaxy 准备的 Sakura 主题"
    link="https://sakura.valaxy.site/"
    image="https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-858k3j.jpg"
  />
  <Card
    title="My Old Blog"
    description="基于 Hugo 构建的旧博客"
    link="https://user-xixiboliya.github.io"
    image="https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-yxoejx.jpg"
  />

</ContentCard>


