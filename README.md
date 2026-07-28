# Link 语言手册

> Link 文档站源码仓库 —— 在线文档：https://myiunagn.github.io/linkdoc/

[![Documentation](https://img.shields.io/badge/docs-online-blue)](https://myiunagn.github.io/linkdoc/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 这是什么？

这是 **Link 语言**官方文档站的源码仓库，使用 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) 构建，通过 GitHub Actions 自动部署到 GitHub Pages。

**Link** 是一门为"互联"而生的语言：从 IoT 设备到游戏后端，再到多语言胶水层。v0.2.0 已支持 12 种编程语言 FFI 互联、多后端编译器（C / LLVM / Python / WASM）、借用检查器、LSP 语言服务器和游戏后端域类型。

## 源代码仓库

本文档站描述的语言源代码位于另一个仓库：

**https://github.com/myiunagn/link**

| 仓库 | 用途 |
|------|------|
| [myiunagn/link](https://github.com/myiunagn/link) | Link 语言源代码（编译器、解释器、CLI、LSP、VSCode 扩展） |
| [myiunagn/linkdoc](https://github.com/myiunagn/linkdoc) | Link 文档站源码（本仓库） |

## 文档结构

```
linkdoc/
├── docs/                    # Markdown 文档源文件
│   ├── index.md             # 首页
│   ├── introduction.md      # 介绍
│   ├── installation.md      # 安装
│   ├── quickstart.md        # 快速开始
│   ├── repl.md              # REPL 交互模式
│   ├── basics/              # 语言基础
│   ├── ffi/                 # 多语言互联
│   ├── compiler/            # 编译器
│   ├── examples.md          # 示例
│   ├── spec.md              # 设计规格
│   └── assets/              # 静态资源（CSS/JS）
├── mkdocs.yml               # MkDocs 配置
├── requirements-docs.txt    # Python 依赖
└── .github/workflows/       # GitHub Actions 部署工作流
```

## 本地预览

```bash
# 安装依赖
pip install -r requirements-docs.txt

# 启动本地预览服务器（默认 http://127.0.0.1:8000）
mkdocs serve
```

## 构建静态站

```bash
mkdocs build
# 生成的 HTML 在 site/ 目录
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

部署工作流配置：[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## 右上角星标显示

文档站右上角显示的是 **link 源代码仓库**（`myiunagn/link`）的星标和 Fork 数，通过 GitHub API 实时获取，JavaScript 实现：[`docs/assets/repo-stats.js`](docs/assets/repo-stats.js)

## License

MIT
