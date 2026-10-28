import * as vscode from "vscode";

const COPY_COMMAND = "minimalFilePath.copy";
const CLICK_COMMAND = "minimalFilePath.click";

export function activate(context: vscode.ExtensionContext) {
  const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  item.command = CLICK_COMMAND;

  let current = "";
  let currentUri: vscode.Uri | undefined;

  const config = () => vscode.workspace.getConfiguration("minimalFilePath");
  const toPath = (uri: vscode.Uri) => (config().get("pathStyle") === "relative" ? vscode.workspace.asRelativePath(uri) : uri.fsPath);
  const copy = async () => {
    if (!current) return;
    await vscode.env.clipboard.writeText(current);
    vscode.window.setStatusBarMessage("$(check) Path copied", 2000);
  };

  const tooltips: Record<string, string> = {
    copy: "Click to copy path",
    reveal: "Click to reveal in Explorer",
    revealInOS: "Click to reveal in the OS file manager",
  };

  const update = () => {
    const tab = vscode.window.tabGroups.activeTabGroup.activeTab;
    const input = tab?.input;
    item.tooltip = tooltips[config().get<string>("clickAction", "copy")];
    currentUri = undefined;

    if (input instanceof vscode.TabInputTextDiff) {
      current = `${toPath(input.original)} ↔ ${toPath(input.modified)}`;
      currentUri = input.modified;
      item.text = `$(git-compare) ${current}`;
    } else if (input instanceof vscode.TabInputText && input.uri.scheme === "file") {
      current = toPath(input.uri);
      currentUri = input.uri;
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

  const click = () => {
    switch (config().get("clickAction")) {
      case "reveal":
        return vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer");
      case "revealInOS":
        return currentUri && vscode.commands.executeCommand("revealFileInOS", currentUri);
      default:
        return copy();
    }
  };

  context.subscriptions.push(
    item,
    vscode.commands.registerCommand(COPY_COMMAND, copy),
    vscode.commands.registerCommand(CLICK_COMMAND, click),
    vscode.window.onDidChangeActiveTextEditor(update),
    vscode.window.tabGroups.onDidChangeTabs(update),
    vscode.workspace.onDidChangeConfiguration((e) => e.affectsConfiguration("minimalFilePath") && update()),
  );

  update();
}

export function deactivate() {}
