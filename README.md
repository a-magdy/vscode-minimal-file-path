# Minimal File Path

A minimalist, zero-dependency active file path and diff indicator for your status bar.


![Status bar showing the active file path and a diff of two files](https://a-magdy.github.io/vscode-minimal-file-path/statusbar.png)

- **Active file path** in the status bar, with a native `$(file)` icon.
- **Diff view support**: shows `original ↔ modified` using the modern Tab API.
- **Click to copy** the path (or both paths in a diff) to the clipboard, or reveal the file in the Explorer.
- **Absolute or workspace-relative** paths.
- **Zero runtime dependencies**: only the native `vscode` API, a single small source file.

## Commands

| Command | Description |
| --- | --- |
| `Minimal File Path: Copy Active Path` | Copies the path shown in the status bar. |

## Settings

| Setting | Default | Description |
| --- | --- | --- |
| `minimalFilePath.pathStyle` | `absolute` | `absolute` or `relative` (to the workspace folder). |
| `minimalFilePath.clickAction` | `copy` | `copy` the path (shows a brief "Path copied" message), `reveal` the file in VS Code's Explorer sidebar, or `revealInOS` to show it in Finder / File Explorer. Reveal options do nothing for untitled files. |

## Why not just breadcrumbs?

Breadcrumbs and `window.title` already show the path. This extension adds an always-visible status bar path, diff view support and click to copy, with no setup required.

## Links

[Website](https://a-magdy.github.io/vscode-minimal-file-path/) · [GitHub](https://github.com/a-magdy/vscode-minimal-file-path) · [Changelog](https://github.com/a-magdy/vscode-minimal-file-path/blob/main/CHANGELOG.md) · [Roadmap](https://github.com/a-magdy/vscode-minimal-file-path/blob/main/ROADMAP.md) · [Contributing](https://github.com/a-magdy/vscode-minimal-file-path/blob/main/CONTRIBUTING.md)

If it's useful, a rating or review on the Marketplace is appreciated.

## License

[MIT](LICENSE)
