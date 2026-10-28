# Project Specification: Minimal File Path

## 1. Naming & Identification
*   **Extension Display Name:** Minimal File Path
*   **Marketplace ID (Publisher ID):** `minimal-file-path`
*   **GitHub Repository Name:** `vscode-minimal-file-path`
*   **Local Project Folder Name:** `minimal-file-path`

## 2. Core Description
"A minimalist, zero-dependency active file path and diff indicator for your status bar."

## 3. Design Philosophy & Aspects
This extension is built on the principle of absolute minimalism. Every design and architectural decision should adhere to the following guidelines:

*   **Zero Dependencies:** The project must rely strictly on the native `vscode` API. No third-party NPM packages (like `lodash`, `moment`, or external UI libraries) should be introduced.
*   **Ultra-Lightweight Footprint:** The core logic should remain as small as possible (ideally under 50 lines of code) to ensure instantaneous activation and zero impact on VS Code's startup time or memory footprint.
*   **Native UI Integration:** 
    *   Use native VS Code icons (e.g., `$(file)` for standard files, `$(git-compare)` for diff views).
    *   The status bar item should blend seamlessly with the default VS Code aesthetic.
    *   Interactive elements (like clicking to copy) should use native APIs (`vscode.env.clipboard.writeText`) rather than custom popups or webviews.
*   **Modern API Usage:** Always prefer the most modern, official VS Code APIs (e.g., using the `TabGroups` API for Diff View detection rather than relying on legacy or hacky text editor workarounds).

## 4. `package.json` Setup Reference
When configuring the extension, ensure the keywords are optimized for our minimalist angle:

```json
{
  "name": "minimal-file-path",
  "displayName": "Minimal File Path",
  "description": "A minimalist, zero-dependency active file path and diff indicator for your status bar.",
  "keywords": [
    "minimal",
    "lightweight",
    "file path",
    "diff",
    "status bar"
  ]
}
```
