# Remaining improvements

Context: single-file static site in `docs/index.html` (GitHub Pages), Marketplace listing driven by `README.md` and `package.json`. Project philosophy (see `DESIGN.md`): zero dependencies, tiny footprint, no build step for the site. Delete this file when everything is ticked.

## Needs you

- [ ] Release 0.1.1: the version and CHANGELOG are already bumped, so run `git tag v0.1.1 && git push --tags`. The Marketplace only picks up README and manifest edits on republish.
- [ ] After the release, check the listing: the status bar image loads, badges render, Q & A tab points to GitHub issues, banner colour looks right, `Visualization` category shows.
- [ ] Replace the rendered status bar mock-ups (`docs/statusbar.png`, `docs/og.png`) with a real VS Code screenshot or GIF, light and dark if possible.
- [ ] After the Pages deploy, verify the Open Graph preview (Slack, LinkedIn inspector, X card validator).
- [ ] GitHub settings: upload a social preview image (`docs/og.png` works) and confirm Pages enforces HTTPS.

## Site

- [ ] Run Lighthouse (performance, accessibility, SEO) on the live site and fix findings.
- [ ] Check mobile widths (<400px) in both colour schemes.
- [ ] Optional manual theme toggle (CSS already supports `data-theme="light"`/`"dark"`).
- [ ] Optional live Marketplace version/installs badge in the hero.
- [ ] CI link check for the site (for example `lychee`).

## Housekeeping

- [ ] `engines.node >= 24` in `package.json` is a dev toolchain constraint, not a runtime one. Consider moving it to CONTRIBUTING.
- [ ] Keep `ROADMAP.md` and `CHANGELOG.md` current as items ship.

## Extension features (from `ROADMAP.md`, native APIs only)

- [ ] Relative vs. absolute path setting (`contributes.configuration`).
- [ ] Reveal in Explorer as an alternative click action.
- [ ] Read-only indicator (`$(lock)`).
- [ ] File size display.
- [ ] Open VSX publishing (VSCodium, Cursor and similar): needs Eclipse account, namespace, `OVSX_PAT` secret and a release step.
- [ ] Handle more tab input types (notebooks, custom editors, remote/virtual URIs); today only text, diff and untitled are shown.
- [ ] Tests with `@vscode/test-electron` (the only new devDependency worth considering) and a CI job.

## Launch

- [ ] Share once the real screenshot is in (Reddit r/vscode, Show HN, dev.to).
- [ ] Ask for a Marketplace rating or review (already mentioned in the README).
