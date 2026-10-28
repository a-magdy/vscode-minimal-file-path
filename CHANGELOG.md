# Changelog

## 0.2.1

- New `clickAction` value `revealInOS`: show the file in Finder / File Explorer.
- Removed the `reveal` value of `clickAction` (it only highlighted the file in VS Code's Explorer, which `explorer.autoReveal` already does). A stored `reveal` now behaves like `copy`; switch to `revealInOS` if you want the file manager.
- Copying now shows a brief "Path copied" message in the status bar.

## 0.2.0

- New setting `minimalFilePath.pathStyle`: show the absolute path (default) or the workspace-relative path.
- New setting `minimalFilePath.clickAction`: copy the path (default) or reveal the file in the Explorer.
- Removed the dev-only `engines.node` constraint from the manifest.

## 0.1.2

- README: remove retired shields.io Marketplace badges.

## 0.1.1

- Marketplace listing: new README with status bar preview and badges, gallery banner, extra categories and keywords, Q&A routed to GitHub issues.

## 0.1.0

- Initial release: active file path in the status bar, diff view (`original ↔ modified`), click to copy.
