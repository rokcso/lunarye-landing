# Lunarye™ Studio

为清醒的梦，织一枚月。

这是一个简洁的静态网站，用于展示 Lunarye™ Studio 的品牌信息、设计理念、关于我们和联系方式。网站设计风格灵感来源于 Bear Blog 和苹果麦金塔电脑。

## 项目结构

```
. 
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── images/
│   └── js/
│       └── main.js
├── favicon.svg
├── index.html
└── pages/
    └── privacy-policy.html
```

- `index.html`: 网站主页。
- `pages/privacy-policy.html`: 隐私政策页面。
- `assets/css/main.css`: 网站的通用样式表，包含明暗模式适配。
- `assets/js/main.js`: 网站的通用 JavaScript 文件，用于动态生成邮箱地址。
- `favicon.svg`: SVG 格式的网站图标，支持明暗模式适配。

## 如何运行

由于这是一个静态网站，您无需任何特殊的后端环境即可运行。您可以通过以下方式查看网站：

1.  **直接打开文件**：在您的浏览器中直接打开 `index.html` 文件即可。
2.  **使用本地服务器**：为了更好地模拟生产环境，您可以使用任何简单的本地 HTTP 服务器（例如 Python 的 `http.server` 或 Node.js 的 `serve`）来托管文件。

    例如，使用 Python：
    ```bash
    python -m http.server
    ```
    然后访问 `http://localhost:8000`（或您服务器指定的端口）。

## 特性

-   **简洁设计**：灵感来源于 Bear Blog 和苹果麦金塔电脑的极简主义设计。
-   **响应式布局**：适应不同屏幕尺寸的设备。
-   **明暗模式适配**：根据用户系统偏好自动切换主题。
-   **邮箱反爬虫**：通过 JavaScript 动态生成邮箱地址，防止恶意爬虫抓取。
-   **SVG Favicon**：矢量图标，支持明暗模式，在不同分辨率下保持清晰。

## 未来改进

-   **构建工具**：引入 Parcel 或 Vite 等构建工具，以优化资源加载、自动化任务和提高开发效率。
-   **更复杂的组件**：如果需要，可以引入简单的 JavaScript 框架（如 Alpine.js）来管理更复杂的交互。
-   **内容管理**：考虑使用静态站点生成器（如 Jekyll, Hugo, Eleventy）来更方便地管理内容。
-   **图片优化**：对 `assets/images` 中的图片进行压缩和优化，提高加载速度。
-   **SEO 优化**：添加更多的 Meta 标签和结构化数据，提高搜索引擎可见性。

## 贡献

如果您有任何建议或发现问题，欢迎提出 Issue 或 Pull Request。

## 许可证

© 2024-2025 Lunarye™ Studio. All rights reserved.