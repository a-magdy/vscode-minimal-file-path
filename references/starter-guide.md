# VS Code Extension: Active Path (Starter Guide)

## 1. The "Edge" (Why we are building this)
While there are existing extensions like `wraith13.file-path-bar`, they are often abandonware (last updated years ago). Our extension provides a modern, secure alternative:
*   **Zero Dependencies:** It uses NO external NPM packages. This eliminates the risk of supply-chain attacks and makes the extension incredibly lightweight.
*   **Modern Tab API Support (Diff View):** Older extensions only use the `activeTextEditor` API. We use the modern `TabGroups` API, which natively supports reading both sides of a Diff View comparison (`TabInputTextDiff`), displaying `original ↔ modified`.
*   **Future-Proof Security:** By owning the code, you can ensure it receives security updates and complies with modern VS Code extension standards.

## 2. The Master Prompt
Copy and paste this prompt into an AI assistant (like Cursor, GitHub Copilot, or ChatGPT) inside your empty workspace to generate the full project:

```text
Create a new Visual Studio Code extension in TypeScript called "Active Path" that displays the current file's path in the bottom Status Bar. 

Requirements:
1. Core Logic: Use native `vscode.StatusBarItem`.
2. Event Listeners: Update the path using BOTH `vscode.window.onDidChangeActiveTextEditor` and `vscode.window.tabGroups.onDidChangeTabs`.
3. Diff View Support (Our Edge): Check if the active tab input is `vscode.TabInputTextDiff`. If it is, display both the original and modified file paths separated by a `↔` symbol.
4. Single File Support: Display standard file paths prefixed with a `$(file)` icon.
5. Zero Dependencies: Strictly use only the native `vscode` API. No external packages.
6. Actions: Make the status bar item interactive. When clicked, copy the path(s) to the clipboard.
7. Output: Provide `extension.ts` and `package.json` with the required activation events (`onStartupFinished`).
```

## 3. GitHub Actions (CI/CD & PR Checks)
To ensure best feature support and catch issues on forks or PRs, add a GitHub Action. 
We have included a starter CI workflow in `.github/workflows/ci.yml`. It runs on every `push` and `pull_request`, running linting, tests, and a dry-run of the `vsce package` build to ensure nothing breaks when contributors submit PRs.

## 4. Landing Page & GitHub Pages Deployment
1. This kit contains a `docs/` folder with an `index.html` and generated media assets (`icon.png`, `hero.png`).
2. Commit this `docs/` folder to your GitHub repository.
3. Navigate to your GitHub Repo -> **Settings** -> **Pages**.
4. Set the Source branch (e.g., `main`) and the folder to `/docs`. 
5. Save. GitHub will automatically deploy your landing page showcasing the extension's Edge!
