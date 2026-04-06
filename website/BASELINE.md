# Dumi 文档构建基线（迁移前）

在 Windows 上执行 `pnpm run docs:build`（Dumi 2）一次完整构建约 **139s**（约 2.3 分钟），用于与 Vite 文档站构建耗时对比。

痛点：冷启动与大型 Demo 图下的 HMR 偏慢，与 Webpack/Umi 文档管线相关。

Vite 文档站（`pnpm run docs:build`）在同环境一次完整构建约 **26–40s**（含 `generateDocsManifest`），显著低于 Dumi 基线。

记录日期：2026-04-06
