// ============================================================
// 个人网站内容数据 —— 管理站会读写这个文件
// 说明：所有可编辑的个人信息都集中在这里，改完提交即可生效。
// ============================================================
window.SITE_DATA = {
  "profile": {
    "name": "老师",
    "enName": "ZhanMing YE",
    "role": "物联网工程学生 · 嵌入式 & AI 编程",
    "siteTitle": "叶展铭 · 个人网站",
    "avatar": "叶",
    "typing": [
      "用代码连接硬件与世界。",
      "把想法做成能跑的东西。",
      "在嵌入式与 AI 之间折腾。"
    ],
    "about": [
      "我是 叶展铭，大连民族大学物联网工程专业学生。喜欢从单片机裸机到数学建模、再到用 AI 工具写代码，享受把「一个想法 → 一个能跑起来的东西」的完整过程。",
      "当前在嵌入式、视觉识别与 AI 编程三个方向折腾，相信「先跑通，再迭代」。"
    ],
    "timeline": [
      {
        "time": "2024.09",
        "text": "入学大连民族大学 · 物联网工程"
      },
      {
        "time": "2025",
        "text": "电子设计竞赛：杆球平衡系统（辽宁赛区 H 题）"
      },
      {
        "time": "2026.09",
        "text": "数学建模国赛 C 题：微网调度优化"
      },
      {
        "time": "2026.10",
        "text": "学习 AI 编程，用 AI 开发 Chrome 插件 / 个人网站"
      }
    ],
    "email": "yezhanming@example.com",
    "github": "https://github.com/Yedeng-yzm"
  },
  "skills": [
    {
      "icon": "🛠️",
      "title": "嵌入式 / 硬件",
      "items": [
        {
          "name": "STM32 (C)",
          "level": 80
        },
        {
          "name": "K210 / 视觉",
          "level": 70
        },
        {
          "name": "Arduino",
          "level": 75
        },
        {
          "name": "C / C++",
          "level": 75
        },
        {
          "name": "hhh",
          "level": 50
        }
      ]
    },
    {
      "icon": "💻",
      "title": "编程语言",
      "items": [
        {
          "name": "Python",
          "level": 85
        },
        {
          "name": "JavaScript",
          "level": 70
        },
        {
          "name": "Git",
          "level": 80
        },
        {
          "name": "MATLAB",
          "level": 65
        }
      ]
    },
    {
      "icon": "🤖",
      "title": "AI / 数据",
      "items": [
        {
          "name": "数学建模",
          "level": 85
        },
        {
          "name": "AI 编程（Cursor/Claude/Codex）",
          "level": 90
        },
        {
          "name": "大模型应用",
          "level": 75
        },
        {
          "name": "数据分析",
          "level": 70
        }
      ]
    }
  ],
  "projects": [
    {
      "title": "杆球平衡系统",
      "desc": "基于 STM32F407 + K210 的视觉伺服杆球平衡装置，辽宁赛区电子设计竞赛 H 题。",
      "tags": [
        "STM32",
        "K210",
        "视觉",
        "C"
      ],
      "cover": "c1",
      "icon": "⚙️"
    },
    {
      "title": "微网调度优化",
      "desc": "2026 数学建模国赛 C 题，构建逐日滚动 + 日内滚动多目标优化调度模型。",
      "tags": [
        "Python",
        "优化",
        "建模"
      ],
      "cover": "c2",
      "icon": "📊"
    },
    {
      "title": "电商图片下载插件",
      "desc": "Chrome 扩展，一键提取淘宝 / 京东 / 拼多多商品图，批量转 PNG 下载。",
      "tags": [
        "JavaScript",
        "Chrome扩展",
        "MV3"
      ],
      "cover": "c3",
      "icon": "🧩"
    },
    {
      "title": "个人网站",
      "desc": "你正在看的这个赛博朋克霓虹风个人站，纯静态 + Canvas 粒子星空。",
      "tags": [
        "HTML/CSS",
        "Canvas",
        "JS"
      ],
      "cover": "c4",
      "icon": "🌌"
    }
  ],
  "blog": [
    {
      "time": "2026-10",
      "title": "用 AI 编程开发 Chrome 插件的心得",
      "desc": "从需求分析到推送部署，记录一次完整的 AI 编程实战流程。",
      "tags": [
        "AI编程",
        "效率"
      ]
    },
    {
      "time": "2026-09",
      "title": "数学建模入门：从国赛 C 题说起",
      "desc": "如何把一个调度优化问题拆解成可求解的模型。",
      "tags": [
        "建模",
        "优化"
      ]
    },
    {
      "time": "2026-06",
      "title": "从零做一个杆球平衡系统",
      "desc": "STM32 与 K210 视觉闭环控制的踩坑与实现记录。",
      "tags": [
        "嵌入式",
        "控制"
      ]
    }
  ]
};
