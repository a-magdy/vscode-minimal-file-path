import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    context.subscriptions.push(statusBarItem);

    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem),
        vscode.window.tabGroups.onDidChangeTabs(updateStatusBarItem)
    );

    updateStatusBarItem();
}

function updateStatusBarItem() {
    const activeTab = vscode.window.tabGroups.activeTabGroup?.activeTab;
    
    if (activeTab?.input instanceof vscode.TabInputTextDiff) {
        const originalPath = activeTab.input.original.fsPath;
        const modifiedPath = activeTab.input.modified.fsPath;
        
        statusBarItem.text = `$(git-compare) ${originalPath} ↔ ${modifiedPath}`;
        statusBarItem.show();
        return;
    }

    const editor = vscode.window.activeTextEditor;
    if (editor && editor.document.uri.scheme === 'file') {
        statusBarItem.text = `$(file) ${editor.document.fileName}`;
        statusBarItem.show();
    } else {
        statusBarItem.hide();
    }
}

export function deactivate() {}