/* eslint-disable */
import type { ComponentType } from 'react';
export const docPages: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  "/components/FileMapView": () => import('../../../docs/components/FileMapView.md'),
  "/components/SchemaEditor": () => import('../../../docs/components/SchemaEditor.md'),
  "/components/SuggestionList": () => import('../../../docs/components/SuggestionList.md'),
  "/components/ThoughtChainList": () => import('../../../docs/components/ThoughtChainList.md'),
  "/components/VisualList": () => import('../../../docs/components/VisualList.md'),
  "/components/action-icon-box": () => import('../../../docs/components/action-icon-box.md'),
  "/components/action-item-box": () => import('../../../docs/components/action-item-box.md'),
  "/components/agentic-layout": () => import('../../../docs/components/agentic-layout.md'),
  "/components/ai-label": () => import('../../../docs/components/ai-label.md'),
  "/components/answer-alert": () => import('../../../docs/components/answer-alert.md'),
  "/components/api": () => import('../../../docs/components/api.md'),
  "/components/area-chart": () => import('../../../docs/components/area-chart.md'),
  "/components/back-to": () => import('../../../docs/components/back-to.md'),
  "/components/bar-chart": () => import('../../../docs/components/bar-chart.md'),
  "/components/boxplot-chart": () => import('../../../docs/components/boxplot-chart.md'),
  "/components/bubble": () => import('../../../docs/components/bubble.md'),
  "/components/button": () => import('../../../docs/components/button.md'),
  "/components/chart-statistic": () => import('../../../docs/components/chart-statistic.md'),
  "/components/chat-boot": () => import('../../../docs/components/chat-boot.md'),
  "/components/chat-flow-container": () => import('../../../docs/components/chat-flow-container.md'),
  "/components/chat-layout": () => import('../../../docs/components/chat-layout.md'),
  "/components/donut-chart": () => import('../../../docs/components/donut-chart.md'),
  "/components/file-attachment": () => import('../../../docs/components/file-attachment.md'),
  "/components/footnote": () => import('../../../docs/components/footnote.md'),
  "/components/funnel-chart": () => import('../../../docs/components/funnel-chart.md'),
  "/components/histogram-chart": () => import('../../../docs/components/histogram-chart.md'),
  "/components/history": () => import('../../../docs/components/history.md'),
  "/components/icon": () => import('../../../docs/components/icon.md'),
  "/components/input": () => import('../../../docs/components/input.md'),
  "/components/layout-header": () => import('../../../docs/components/layout-header.md'),
  "/components/line-chart": () => import('../../../docs/components/line-chart.md'),
  "/components/loading": () => import('../../../docs/components/loading.md'),
  "/components/markdownInputField": () => import('../../../docs/components/markdownInputField.md'),
  "/components/mermaid": () => import('../../../docs/components/mermaid.md'),
  "/components/quote": () => import('../../../docs/components/quote.md'),
  "/components/radar-chart": () => import('../../../docs/components/radar-chart.md'),
  "/components/robot": () => import('../../../docs/components/robot.md'),
  "/components/scatter-chart": () => import('../../../docs/components/scatter-chart.md'),
  "/components/schema": () => import('../../../docs/components/schema.md'),
  "/components/segmented": () => import('../../../docs/components/segmented.md'),
  "/components/task-list": () => import('../../../docs/components/task-list.md'),
  "/components/task-running": () => import('../../../docs/components/task-running.md'),
  "/components/text-loading": () => import('../../../docs/components/text-loading.md'),
  "/components/tool-use-bar": () => import('../../../docs/components/tool-use-bar.md'),
  "/components/welcome": () => import('../../../docs/components/welcome.md'),
  "/components/workspace": () => import('../../../docs/components/workspace.md'),
  "/demos-pages/chart": () => import('../../../docs/demos-pages/chart.md'),
  "/demos-pages/chat": () => import('../../../docs/demos-pages/chat.md'),
  "/demos-pages/components": () => import('../../../docs/demos-pages/components.md'),
  "/demos-pages/content-types": () => import('../../../docs/demos-pages/content-types.md'),
  "/demos-pages/editor": () => import('../../../docs/demos-pages/editor.md'),
  "/demos-pages/history": () => import('../../../docs/demos-pages/history.md'),
  "/demos-pages/i18n": () => import('../../../docs/demos-pages/i18n.md'),
  "/demos-pages": () => import('../../../docs/demos-pages/index.md'),
  "/demos-pages/jinja": () => import('../../../docs/demos-pages/jinja.md'),
  "/demos-pages/layout": () => import('../../../docs/demos-pages/layout.md'),
  "/demos-pages/markdown-input-field": () => import('../../../docs/demos-pages/markdown-input-field.md'),
  "/demos-pages/playwright-fixtures": () => import('../../../docs/demos-pages/playwright-fixtures.md'),
  "/demos-pages/plugins": () => import('../../../docs/demos-pages/plugins.md'),
  "/demos-pages/schema-editor": () => import('../../../docs/demos-pages/schema-editor.md'),
  "/demos-pages/video": () => import('../../../docs/demos-pages/video.md'),
  "/demos-pages/workspace": () => import('../../../docs/demos-pages/workspace.md'),
  "/development/changelog.en-US": () => import('../../../docs/development/changelog.en-US.md'),
  "/development/changelog.zh-CN": () => import('../../../docs/development/changelog.zh-CN.md'),
  "/development/component-development-guide": () => import('../../../docs/development/component-development-guide.md'),
  "/development/css-in-js-guide": () => import('../../../docs/development/css-in-js-guide.md'),
  "/development/development-guide": () => import('../../../docs/development/development-guide.md'),
  "/development/project-overview": () => import('../../../docs/development/project-overview.md'),
  "/development/pull-request-guide": () => import('../../../docs/development/pull-request-guide.md'),
  "/development/release-guide": () => import('../../../docs/development/release-guide.md'),
  "/faq/faq": () => import('../../../docs/faq/faq.md'),
  "/faq/lazy": () => import('../../../docs/faq/lazy.md'),
  "/": () => import('../../../docs/index.md'),
  "/plugin/demo": () => import('../../../docs/plugin/demo.md'),
  "/plugin": () => import('../../../docs/plugin/index.md'),
  "/utils/chart-config": () => import('../../../docs/utils/chart-config.md'),
  "/utils/dom": () => import('../../../docs/utils/dom.md'),
  "/utils/editorUtils": () => import('../../../docs/utils/editorUtils.md'),
  "/utils/html-to-markdown-utils": () => import('../../../docs/utils/html-to-markdown-utils.md'),
  "/utils/i18n": () => import('../../../docs/utils/i18n.md'),
  "/utils": () => import('../../../docs/utils/index.md'),
  "/utils/isMarkdown": () => import('../../../docs/utils/isMarkdown.md'),
  "/utils/markdown-syntax.en-US": () => import('../../../docs/utils/markdown-syntax.en-US.md'),
  "/utils/markdown-syntax": () => import('../../../docs/utils/markdown-syntax.md'),
  "/utils/markdownToHtml": () => import('../../../docs/utils/markdownToHtml.md'),
  "/utils/sandbox": () => import('../../../docs/utils/sandbox.md'),
};

export type NavItem = {
  route: string;
  title: string;
  group: string;
};
export const navItems: NavItem[] = [
  {
    "route": "/components/agentic-layout",
    "title": "AgenticLayout 智能体布局组件",
    "group": "布局"
  },
  {
    "route": "/utils/i18n",
    "title": "i18n",
    "group": "基础能力"
  },
  {
    "route": "/utils",
    "title": "index",
    "group": "基础能力"
  },
  {
    "route": "/utils/markdown-syntax",
    "title": "markdown-syntax",
    "group": "基础能力"
  },
  {
    "route": "/utils/markdown-syntax.en-US",
    "title": "markdown-syntax.en-US",
    "group": "基础能力"
  },
  {
    "route": "/development/component-development-guide",
    "title": "component-development-guide",
    "group": "开发指南"
  },
  {
    "route": "/components/ai-label",
    "title": "AILabel AI 标签",
    "group": "入口"
  },
  {
    "route": "/components/back-to",
    "title": "BackTo 回到顶部/底部",
    "group": "入口"
  },
  {
    "route": "/components/chat-boot",
    "title": "ChatBootPage - 对话启动页",
    "group": "入口"
  },
  {
    "route": "/components/robot",
    "title": "Robot 机器人形象",
    "group": "入口"
  },
  {
    "route": "/components/welcome",
    "title": "WelcomeMessage 欢迎语",
    "group": "入口"
  },
  {
    "route": "/components/button",
    "title": "Button 按钮",
    "group": "通用"
  },
  {
    "route": "/components/input",
    "title": "Input 输入框",
    "group": "通用"
  },
  {
    "route": "/components/segmented",
    "title": "Segmented 分段控制器",
    "group": "通用"
  },
  {
    "route": "/components/VisualList",
    "title": "VisualList 视觉列表",
    "group": "通用"
  },
  {
    "route": "/components/chat-flow-container",
    "title": "ChatLayout - 对话流容器组件",
    "group": "布局"
  },
  {
    "route": "/components/layout-header",
    "title": "LayoutHeader 布局头部",
    "group": "布局"
  },
  {
    "route": "/utils/chart-config",
    "title": "chart-config",
    "group": "基础能力"
  },
  {
    "route": "/development/changelog.en-US",
    "title": "changelog.en-US",
    "group": "开发指南"
  },
  {
    "route": "/development/changelog.zh-CN",
    "title": "changelog.zh-CN",
    "group": "开发指南"
  },
  {
    "route": "/development/development-guide",
    "title": "development-guide",
    "group": "开发指南"
  },
  {
    "route": "/demos-pages/layout",
    "title": "layout",
    "group": "通用"
  },
  {
    "route": "/components/action-icon-box",
    "title": "ActionIconBox 操作图标盒子",
    "group": "通用"
  },
  {
    "route": "/components/action-item-box",
    "title": "ActionItemBox 操作项盒子",
    "group": "通用"
  },
  {
    "route": "/components/chat-layout",
    "title": "ChatLayout 聊天布局",
    "group": "布局"
  },
  {
    "route": "/components/ThoughtChainList",
    "title": "ThoughtChainList",
    "group": "对话流"
  },
  {
    "route": "/components/answer-alert",
    "title": "AnswerAlert 应答中断提示",
    "group": "对话流"
  },
  {
    "route": "/components/bubble",
    "title": "Bubble 气泡组件",
    "group": "对话流"
  },
  {
    "route": "/components/history",
    "title": "History 历史记录",
    "group": "对话流"
  },
  {
    "route": "/components/loading",
    "title": "Loading 加载",
    "group": "对话流"
  },
  {
    "route": "/components/SuggestionList",
    "title": "SuggestionList 追问建议",
    "group": "对话流"
  },
  {
    "route": "/components/task-list",
    "title": "TaskList 任务列表",
    "group": "对话流"
  },
  {
    "route": "/components/task-running",
    "title": "TaskRunning 任务运行状态",
    "group": "对话流"
  },
  {
    "route": "/components/text-loading",
    "title": "TextLoading 文字加载",
    "group": "对话流"
  },
  {
    "route": "/components/tool-use-bar",
    "title": "ToolUseBar 工具使用栏",
    "group": "对话流"
  },
  {
    "route": "/components/workspace",
    "title": "Workspace 工作空间",
    "group": "对话流"
  },
  {
    "route": "/utils/markdownToHtml",
    "title": "markdownToHtml 工具函数",
    "group": "基础能力"
  },
  {
    "route": "/development/pull-request-guide",
    "title": "pull-request-guide",
    "group": "开发指南"
  },
  {
    "route": "/plugin",
    "title": "index",
    "group": "通用"
  },
  {
    "route": "/demos-pages/markdown-input-field",
    "title": "markdown-input-field",
    "group": "通用"
  },
  {
    "route": "/faq/lazy",
    "title": "性能优化",
    "group": "通用"
  },
  {
    "route": "/faq/faq",
    "title": "faq",
    "group": "通用"
  },
  {
    "route": "/components/icon",
    "title": "Icon 图标",
    "group": "通用"
  },
  {
    "route": "/components/api",
    "title": "api",
    "group": "意图输入"
  },
  {
    "route": "/components/markdownInputField",
    "title": "markdownInputField",
    "group": "意图输入"
  },
  {
    "route": "/utils/editorUtils",
    "title": "editorUtils",
    "group": "基础能力"
  },
  {
    "route": "/development/release-guide",
    "title": "release-guide",
    "group": "开发指南"
  },
  {
    "route": "/demos-pages/history",
    "title": "history",
    "group": "通用"
  },
  {
    "route": "/components/area-chart",
    "title": "AreaChart 面积图",
    "group": "图文输出"
  },
  {
    "route": "/components/FileMapView",
    "title": "FileMapView",
    "group": "图文输出"
  },
  {
    "route": "/components/schema",
    "title": "schema",
    "group": "图文输出"
  },
  {
    "route": "/components/SchemaEditor",
    "title": "SchemaEditor",
    "group": "图文输出"
  },
  {
    "route": "/components/bar-chart",
    "title": "BarChart 柱状图",
    "group": "图文输出"
  },
  {
    "route": "/components/donut-chart",
    "title": "DonutChart 环形图",
    "group": "图文输出"
  },
  {
    "route": "/components/funnel-chart",
    "title": "FunnelChart 漏斗图",
    "group": "图文输出"
  },
  {
    "route": "/components/line-chart",
    "title": "LineChart 折线图",
    "group": "图文输出"
  },
  {
    "route": "/components/radar-chart",
    "title": "RadarChart 雷达图",
    "group": "图文输出"
  },
  {
    "route": "/components/scatter-chart",
    "title": "ScatterChart 散点图",
    "group": "图文输出"
  },
  {
    "route": "/components/boxplot-chart",
    "title": "BoxPlotChart 箱线图",
    "group": "图文输出"
  },
  {
    "route": "/components/histogram-chart",
    "title": "HistogramChart 直方图",
    "group": "图文输出"
  },
  {
    "route": "/components/chart-statistic",
    "title": "ChartStatistic 指标卡",
    "group": "图文输出"
  },
  {
    "route": "/components/file-attachment",
    "title": "FileAttachment 文件附件",
    "group": "图文输出"
  },
  {
    "route": "/components/footnote",
    "title": "Footnote 脚注",
    "group": "图文输出"
  },
  {
    "route": "/components/mermaid",
    "title": "Mermaid 图",
    "group": "图文输出"
  },
  {
    "route": "/utils/dom",
    "title": "dom",
    "group": "基础能力"
  },
  {
    "route": "/development/project-overview",
    "title": "project-overview",
    "group": "开发指南"
  },
  {
    "route": "/demos-pages",
    "title": "index",
    "group": "通用"
  },
  {
    "route": "/components/quote",
    "title": "Quote 引用组件",
    "group": "对话流"
  },
  {
    "route": "/utils/isMarkdown",
    "title": "isMarkdown",
    "group": "基础能力"
  },
  {
    "route": "/development/css-in-js-guide",
    "title": "css-in-js-guide",
    "group": "开发指南"
  },
  {
    "route": "/demos-pages/chat",
    "title": "chat",
    "group": "通用"
  },
  {
    "route": "/utils/html-to-markdown-utils",
    "title": "html-to-markdown-utils",
    "group": "基础能力"
  },
  {
    "route": "/demos-pages/chart",
    "title": "chart",
    "group": "通用"
  },
  {
    "route": "/utils/sandbox",
    "title": "sandbox",
    "group": "基础能力"
  },
  {
    "route": "/demos-pages/editor",
    "title": "editor",
    "group": "通用"
  },
  {
    "route": "/demos-pages/workspace",
    "title": "workspace",
    "group": "通用"
  },
  {
    "route": "/demos-pages/content-types",
    "title": "content-types",
    "group": "通用"
  },
  {
    "route": "/demos-pages/video",
    "title": "video",
    "group": "通用"
  },
  {
    "route": "/plugin/demo",
    "title": "demo",
    "group": "通用"
  },
  {
    "route": "/demos-pages/components",
    "title": "components",
    "group": "通用"
  },
  {
    "route": "/demos-pages/schema-editor",
    "title": "schema-editor",
    "group": "通用"
  },
  {
    "route": "/demos-pages/plugins",
    "title": "plugins",
    "group": "通用"
  },
  {
    "route": "/demos-pages/i18n",
    "title": "i18n",
    "group": "通用"
  },
  {
    "route": "/demos-pages/jinja",
    "title": "jinja",
    "group": "通用"
  },
  {
    "route": "/",
    "title": "index",
    "group": "其他"
  }
];