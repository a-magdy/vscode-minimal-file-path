* **Install the Packaging Tool**: Open your terminal and install it globally via npm: `npm install -g @vscode/vsce`
* **Prepare `package.json`**: Ensure these fields are filled:
  * `"publisher"`: Your unique publisher ID.
  * `"repository"`: Link to your GitHub repo.
  * `"icon"`: Path to a 128x128 pixel PNG.
  * `"version"`: Semantic versioning (e.g., `"1.0.0"`).
  * Update your `README.md` (vsce will reject the default generator text).
* **Generate a Personal Access Token (PAT)**:
  * Go to Azure DevOps and log in.
  * Click User settings (top right) > "Personal access tokens" > "New Token".
  * Set Organization to `All accessible organizations`.
  * Set Scopes to `Custom defined`.
  * Scroll to Marketplace and check `Acquire` and `Manage`.
  * Create and copy the token immediately.
* **Create a Publisher Profile**: Go to the Visual Studio Code Marketplace Management page and click "Create publisher". The ID must match your `package.json`.
* **Login and Publish**:
  * Run `vsce login <your-publisher-name>` and paste your PAT.
  * Run `vsce publish` to deploy.
  * (Optional) Run `vsce package` to just generate a `.vsix` file for manual uploading.