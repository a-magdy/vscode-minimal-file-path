# Contributing

Design rules are in [DESIGN.md](DESIGN.md): zero runtime dependencies, native `vscode` API only, minimal code.

## Development

```sh
npm ci
npm run lint
npm run compile
```

Press `F5` to launch an Extension Development Host.

## Releasing

### One-time setup

1. Create the publisher `magdyoss` at https://marketplace.visualstudio.com/manage. The ID must match `publisher` in `package.json`.
2. On the publisher page, add a trusted publishing policy for repo `a-magdy/vscode-minimal-file-path` and workflow `release.yml`. No PAT is needed.

### Each release

1. Bump `version` in `package.json` and update `CHANGELOG.md`.
2. Commit, then tag and push: `git tag vX.Y.Z && git push --tags`.

The `Release` workflow checks the tag matches `package.json`, publishes to the VS Code Marketplace, and creates a GitHub release with the `.vsix`.

To build a `.vsix` locally: `npm run package`.
