# Roadmap

v1 is deliberately small: active path, diff view, click to copy. Ideas for later, each using native APIs only:

- **Relative vs. absolute path:** a setting (`contributes.configuration`, read via `vscode.workspace.getConfiguration()`) to show the workspace-relative path.
- **Reveal in Explorer:** an option to make the click run `workbench.files.action.showActiveFileInExplorer` instead of copying.
- **Read-only indicator:** check `vscode.workspace.fs.stat()` and append `$(lock)` for read-only files.
- **File size:** show the size from `fs.stat()`, refreshed on `vscode.workspace.onDidSaveTextDocument`.
- **Open VSX publishing (on hold):** reach VSCodium, Cursor and similar editors. Needs an Eclipse Foundation account with the Publisher Agreement signed, an Open VSX namespace and an `OVSX_PAT` secret, plus a `npx ovsx publish` step in `release.yml`.
