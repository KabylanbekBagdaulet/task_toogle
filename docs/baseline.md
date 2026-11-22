# Assignment 05 baseline and context

## Repository map

This repository started empty; the baseline version (the first working export, preserved as `baseline/`) was generated with the Bolt AI builder (Version 1, 2026-11-18). It is therefore AI-generated, not a pre-existing project. This is disclosed in `docs/ai-evidence.md`.

- Entry point: `index.html` -> `src/main.jsx`
- Added in final version: `src/taskId.js`, `tests/taskId.test.js`
- Main workflow: `src/App.jsx`
- Focused behavior: `src/taskFilters.js`
- Presentation: `src/styles.css`
- Automated checks: `tests/taskFilters.test.js`
- Build configuration: `vite.config.js`, `package.json`
- Operating instructions: `AGENTS.md`

## Baseline commands

The initial empty repository had no runnable scripts. After the working baseline was created, the reproducible commands became:

- `npm test`
- `npm run lint`
- `npm run build`

Baseline and final results are recorded in `docs/verification.md`.

## Acceptance criteria

The criteria are listed in `docs/acceptance-criteria.md`. They are intentionally behavior-focused and remain unchanged after the focused improvement.

## Evidence versus assumptions

Confirmed evidence comes from the files and command output in this repository. Claims about browser layout, screen-reader behavior, or production deployment are not treated as confirmed without a browser or deployment check.
