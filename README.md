# qxnLauncher

基于 [SJMCL](https://github.com/UNIkeEN/SJMCL)（SJMC Launcher）的定制分支，正在进行品牌化与功能定制。

> 本项目不是官方 Minecraft 服务，未获 Mojang 或 Microsoft 批准或关联。

## 简介

qxnLauncher 继承上游 SJMCL 的全部能力，并在此基础上做品牌化与定制。主要特性：

- **跨平台**：支持 Windows 10/11、macOS 10.15+ 与 Linux（webkit2gtk 4.1）
- **实例管理**：多游戏目录、多实例，存档 / 模组 / 资源包 / 光影 / 截图 / 世界集中管理
- **资源下载**：从 CurseForge、Modrinth 下载游戏本体、模组加载器、整合包与资源
- **多账户**：微软登录与第三方认证服务器，兼容 Yggdrasil Connect 的 OAuth 流程
- **扩展系统与 MCP**：支持通过 deeplink、MCP 与外部网页、应用及 Agent 协作
- **国际化**：内置多语言界面

## 与上游的差异

- 产品名称、应用标识与窗口标题改为 qxnLauncher
- 默认主题色使用 qxnLauncher 色板（`#00BFFF` / `#87CEFA`）
- 深链接协议改为 `qxnlauncher://`
- 启动器更新源指向本仓库的 GitHub Releases
- 统计上报使用带 `QXN-` 前缀的版本号

## 技术栈

Tauri 2 · Next.js 16（React 18）· Chakra UI v2 · Rust

## 开发

前置依赖：

- Node.js 20+ 与 pnpm 10
- Rust 1.98+（Windows 使用 MSVC 工具链）
- Windows 另需 Visual Studio C++ 生成工具与 WebView2 运行时

```bash
pnpm install
pnpm tauri dev
```

构建安装包：

```bash
pnpm tauri build
```

Windows 安装包输出在 `src-tauri/target/release/bundle/nsis/`。

## 同步上游

```bash
git remote add upstream https://github.com/UNIkeEN/SJMCL.git
git fetch upstream
git merge upstream/main
```

## 问题反馈

请在本仓库的 [Issues](https://github.com/MillenniumWorldMC/SJMCL-Fork/issues) 中反馈。

## 许可证与署名

本项目以 [GNU GPLv3](LICENSE) 发布，并附带 [附加条款](LICENSE.EXTRA)。

根据附加条款，分发修改版时须：

1. 使用与 SJMCL / SJMC Launcher 不同的软件名称；
2. 在 README、发行页面、支持文档及软件「关于」页面中明确说明本项目基于 SJMCL，并给出原仓库链接；
3. 向官方统计服务器上报带两位以上字母前缀的版本号（仅新增预置认证服务器的情况除外）。

Copyright © 2024-2026 SJMCL Team。本分支的修改部分版权归其各自作者所有。
