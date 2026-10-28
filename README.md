# Minimal File Path

A minimalist, zero-dependency active file path and diff indicator for your status bar.

- **Active file path** in the status bar, with a native `$(file)` icon.
- **Diff view support**: shows `original ↔ modified` using the modern Tab API.
- **Click to copy** the path (or both paths in a diff) to the clipboard.
- **Zero runtime dependencies**: only the native `vscode` API, a single small source file.

## Commands

| Command | Description |
| --- | --- |
| `Minimal File Path: Copy Active Path` | Copies the path shown in the status bar. |

## Built-in alternatives

VS Code can show the path without an extension:

```json
"window.title": "${activeEditorLong}",
"breadcrumbs.enabled": true,
"breadcrumbs.filePath": "on"
```

This extension adds a status bar path, diff view support and click to copy.

## Development

```sh
npm install
npm run compile   # build
npm run lint
npm run package   # produce a .vsix
```

Press `F5` in VS Code to launch an Extension Development Host.

See [CONTRIBUTING.md](CONTRIBUTING.md) for releasing and [ROADMAP.md](ROADMAP.md) for planned ideas.

## License

[MIT](LICENSE)
