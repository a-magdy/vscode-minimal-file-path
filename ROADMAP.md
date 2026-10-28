# Roadmap

v1 is deliberately small: active path, diff view, click to copy. Done since: relative/absolute path setting and a reveal-in-file-manager click action (0.2.0, 0.2.1). Ideas for later, each using native APIs only:

- **Read-only indicator:** check `vscode.workspace.fs.stat()` and append `$(lock)` for read-only files. Only catches files read-only on disk, not VS Code's own read-only views; declare `capabilities.virtualWorkspaces`.
- **File size:** show the size from `fs.stat()`, refreshed on `vscode.workspace.onDidSaveTextDocument`. Stale until saved.
- **More tab types:** handle `TabInputCustom` (images, PDFs) and `TabInputNotebook`/`TabInputNotebookDiff` so the path shows there too; test on remote and virtual workspaces.
- **Tests:** `@vscode/test-electron` and `@vscode/test-cli` as dev-only dependencies, plus a CI job (`xvfb-run` on Ubuntu). Runtime stays dependency-free.
- **Open VSX publishing (on hold):** reach VSCodium, Cursor and similar editors. Needs an Eclipse Foundation account with the Publisher Agreement signed, an Open VSX namespace and an `OVSX_PAT` secret, plus a `npx ovsx publish` step in `release.yml`.
