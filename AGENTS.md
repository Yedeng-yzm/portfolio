# AGENTS.md

## 项目概述

个人展示网站（Portfolio），纯静态单页，深色「赛博朋克·霓虹」风格，用于展示个人介绍、技能、项目、博客与联系方式。

## 技术栈

- 语义化 HTML5
- 原生 CSS（`:root` 变量定义主题色，Flex / Grid 布局）
- 原生 JavaScript（Canvas、IntersectionObserver）
- 无框架、无构建工具、无外部依赖

## 目录结构

```
portfolio/
├── index.html        # 单页站点（结构/占位容器）
├── data.js           # 全部可编辑内容（个人信息/技能/项目/博客）
├── css/style.css     # 全站样式
├── js/main.js        # 读取 data.js 渲染 + 交互与动画
├── PRD.md            # 需求文档
├── TECH_DESIGN.md    # 技术文档
└── AGENTS.md         # 本文件
```

## 开发规范

- 主题色集中在 `css/style.css` 的 `:root` 变量里，改色只改变量
- 命名采用 BEM 风格，使用语义化标签（header / nav / main / section / footer）
- 关键逻辑加中文注释
- 不引入任何 CDN / 外部资源，保证离线可打开

## 注意事项

- 内容为个人真实信息，改动个人信息只需编辑 `data.js`（也可用 `portfolio-admin` 管理后台在线改）
- `data.js` 通过 `<script src="data.js">` 以 `window.SITE_DATA` 注入，`js/main.js` 读取并渲染，须保证离线可打开（不能用 fetch）
- 保持响应式：375px 宽度下无横向滚动
- 粒子动画需尊重 `prefers-reduced-motion`
