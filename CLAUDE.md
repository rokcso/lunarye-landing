# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a static HTML website with no build process. To develop locally:

```bash
# Start a local development server
python -m http.server
# or
npx serve
```

Access at `http://localhost:8000` (or the port specified by your server).

## Project Architecture

This is a bilingual (English/Chinese) static landing page for Lunarye™ Studio with the following structure:

### Core Files
- `index.html` - Main landing page
- `assets/css/main.css` - Global styles with CSS custom properties for theming
- `assets/js/main.js` - JavaScript for dynamic content loading and email obfuscation
- `assets/data/products.json` - Product data configuration

### Page Structure
- `/` - Main studio page
- `/pages/privacy-policy.html` - General privacy policy
- `/pages/arclet-copier/` - Product pages for Arclet Copier Chrome extension
  - `index.html` / `index.zh.html` - Product landing pages (EN/ZH)
  - `help.html` / `help.zh.html` - Help documentation (EN/ZH)
  - `privacy-policy.html` / `privacy-policy.zh.html` - Product privacy policy (EN/ZH)

### Key Architecture Patterns

1. **URL Routing**: Vercel rewrites in `vercel.json` handle clean URLs without file extensions
2. **Dynamic Content**: Products are loaded from JSON and rendered via JavaScript
3. **Internationalization**: Parallel file structure for English/Chinese content
4. **Responsive Design**: CSS Grid layouts with `auto-fit` and `minmax()` for responsive cards
5. **Theme Support**: CSS custom properties for dark/light mode adaptation
6. **Anti-Spam**: Email addresses generated dynamically via JavaScript

### Styling System
- CSS custom properties for consistent theming (`--text-color`, `--bg-color`, etc.)
- Grid-based layouts for product cards and content sections
- Responsive design patterns using CSS Grid `auto-fit` and `minmax()`
- Hover states removed from cards (recent commit: "Remove all card hover effects")

### Content Management
- Products are defined in `assets/data/products.json` with support for:
  - Text or image icons
  - External and internal links
  - Automatic long-title detection and styling

When making changes:
- Update both English and Chinese versions for bilingual content
- Use existing CSS custom properties for consistent theming
- Follow the grid-based layout patterns for new content sections
- Test URL routing with the Vercel rewrite rules