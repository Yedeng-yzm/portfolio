# 个人展示网站 · 技术设计文档（TECH_DESIGN）

## 一、技术栈选型

| 层 | 选型 | 理由 |
|---|---|---|
| 页面 | 语义化 HTML5 | 结构清晰、SEO 友好 |
| 样式 | 原生 CSS（CSS 变量 + Flex / Grid） | 无需构建、易维护、响应式 |
| 交互 | 原生 JavaScript | 粒子动画、故障字效、滚动动效 |
| 背景 | Canvas 2D | 霓虹粒子星空 + 视差 |
| 部署 | GitHub Pages | 免费静态托管，自动分配域名 |

**选型结论**：纯静态、无框架、无构建工具、无后端、零外部依赖，双击 `index.html` 即可打开。

## 二、项目结构

```
portfolio/
├── index.html        # 单页站点（全部区块）
├── css/style.css     # 全站样式（:root 变量定义主题色）
├── js/main.js        # 粒子背景 + 交互 + 滚动动画
├── PRD.md            # 需求文档
├── TECH_DESIGN.md    # 技术文档（本文件）
└── AGENTS.md         # AI 代理指令
```

## 三、数据模型

内容为纯静态，直接写在 `index.html` 中，无需数据库：

- **个人信息**：姓名、职位、一句话简介、教育经历
- **技能**：分类（名称、熟练度百分比）
- **项目**：名称、描述、技术标签、链接
- **博客**：标题、摘要、日期、标签

## 四、关键技术点

1. **Canvas 粒子星空**：`requestAnimationFrame` 循环，霓虹色粒子 + 鼠标视差；`prefers-reduced-motion` 时降级为静态
2. **故障(glitch)字效**：CSS `text-shadow` + 伪元素位移 + `clip-path` 抖动
3. **扫描线**：全屏固定 `repeating-linear-gradient` 遮罩层
4. **响应式**：CSS Grid `auto-fit / minmax` + 媒体查询断点
5. **滚动动效**：IntersectionObserver 触发淡入上移动画

## 五、部署方案

推送到 GitHub 仓库 → 仓库 Settings → Pages → 选择 `main` 分支根目录 → 获得 `https://用户名.github.io/仓库名/` 域名。
