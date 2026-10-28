import * as vscode from "vscode";

const COPY_COMMAND = "minimalFilePath.copy";

export function activate(context: vscode.ExtensionContext) {
  const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  item.command = COPY_COMMAND;
  item.tooltip = "Click to copy path";

  let current = "";

  const update = () => {
    const tab = vscode.window.tabGroups.activeTabGroup.activeTab;
    const input = tab?.input;

    if (input instanceof vscode.TabInputTextDiff) {
      current = `${input.original.fsPath} ↔ ${input.modified.fsPath}`;
      item.text = `$(git-compare) ${current}`;
    } else if (input instanceof vscode.TabInputText && input.uri.scheme === "file") {
      current = input.uri.fsPath;
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
    vscode.commands.registerCommand(COPY_COMMAND, () => current && vscode.env.clipboard.writeText(current)),
    vscode.window.onDidChangeActiveTextEditor(update),
    vscode.window.tabGroups.onDidChangeTabs(update),
  );

  update();
}

export function deactivate() {}
