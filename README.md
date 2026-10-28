# Minimal File Path

A minimalist, zero-dependency active file path and diff indicator for your status bar.

[![Version](https://img.shields.io/visual-studio-marketplace/v/magdyoss.minimal-file-path)](https://marketplace.visualstudio.com/items?itemName=magdyoss.minimal-file-path)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/magdyoss.minimal-file-path)](https://marketplace.visualstudio.com/items?itemName=magdyoss.minimal-file-path)

![Status bar showing the active file path and a diff of two files](https://a-magdy.github.io/vscode-minimal-file-path/statusbar.png)

- **Active file path** in the status bar, with a native `$(file)` icon.
- **Diff view support**: shows `original ↔ modified` using the modern Tab API.
- **Click to copy** the path (or both paths in a diff) to the clipboard.
- **Zero runtime dependencies**: only the native `vscode` API, a single small source file.

## Commands

| Command | Description |
| --- | --- |
| `Minimal File Path: Copy Active Path` | Copies the path shown in the status bar. |

## Why not just breadcrumbs?

Breadcrumbs and `window.title` already show the path. This extension adds an always-visible status bar path, diff view support and click to copy, without any settings.

## Links

[Website](https://a-magdy.github.io/vscode-minimal-file-path/) · [GitHub](https://github.com/a-magdy/vscode-minimal-file-path) · [Changelog](https://github.com/a-magdy/vscode-minimal-file-path/blob/main/CHANGELOG.md) · [Roadmap](https://github.com/a-magdy/vscode-minimal-file-path/blob/main/ROADMAP.md) · [Contributing](https://github.com/a-magdy/vscode-minimal-file-path/blob/main/CONTRIBUTING.md)

If it's useful, a rating or review on the Marketplace is appreciated.

## License

[MIT](LICENSE)
