import * as vscode from "vscode";

const COPY_COMMAND = "minimalFilePath.copy";
const CLICK_COMMAND = "minimalFilePath.click";

export function activate(context: vscode.ExtensionContext) {
  const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  item.command = CLICK_COMMAND;

  let current = "";

  const config = () => vscode.workspace.getConfiguration("minimalFilePath");
  const toPath = (uri: vscode.Uri) => (config().get("pathStyle") === "relative" ? vscode.workspace.asRelativePath(uri) : uri.fsPath);
  const copy = () => current && vscode.env.clipboard.writeText(current);

  const update = () => {
    const tab = vscode.window.tabGroups.activeTabGroup.activeTab;
    const input = tab?.input;
    item.tooltip = config().get("clickAction") === "reveal" ? "Click to reveal in Explorer" : "Click to copy path";

    if (input instanceof vscode.TabInputTextDiff) {
      current = `${toPath(input.original)} ↔ ${toPath(input.modified)}`;
      item.text = `$(git-compare) ${current}`;
    } else if (input instanceof vscode.TabInputText && input.uri.scheme === "file") {
      current = toPath(input.uri);
      item.text = `$(file) ${current}`;
    } else if (input instanceof vscode.TabInputText && input.uri.scheme === "untitled") {
      current = tab?.label ?? "";
      item.text = `$(file) ${current}`;
    } else {
      current = "";
      item.hide();
      return;
    }
    item.show();
  };

  context.subscriptions.push(
    item,
    vscode.commands.registerCommand(COPY_COMMAND, copy),
    vscode.commands.registerCommand(CLICK_COMMAND, () =>
      config().get("clickAction") === "reveal" ? vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer") : copy(),
    ),
    vscode.window.onDidChangeActiveTextEditor(update),
    vscode.window.tabGroups.onDidChangeTabs(update),
    vscode.workspace.onDidChangeConfiguration((e) => e.affectsConfiguration("minimalFilePath") && update()),
  );

  update();
}

export function deactivate() {}
