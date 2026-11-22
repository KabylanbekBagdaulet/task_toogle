# Clearlist Task Tracker

## Purpose

This is a small client-side task tracker created for Assignment 05. It demonstrates a focused feature, testable behavior, safe repository instructions, and evidence-based review.

## Structure

- `src/App.jsx` contains the visible task workflow.
- `src/taskFilters.js` contains the filter strategy and its pure behavior.
- `src/styles.css` contains responsive presentation.
- `tests/` contains automated behavior checks.
- `docs/` contains the assignment evidence and risk register.

## Setup and safe commands

- Install dependencies with `npm install`.
- Run tests with `npm test`.
- Run lint with `npm run lint`.
- Build with `npm run build`.
- Use `npm run dev` only for local visual inspection.

Do not run destructive commands, modify dependency versions without review, expose secrets, or deploy from an automated agent task. Do not claim a check passed unless its output was observed.

## Change rules

- Keep task titles as text; do not introduce HTML rendering for user input.
- Preserve the acceptance criteria in `docs/acceptance-criteria.md`.
- Add or update a focused test when changing filtering or validation behavior.
- Do not read object keys from user-controlled values without an own-property check.
- Keep this app intentionally client-side and ephemeral. Do not add personal data, credentials, or external network calls.
- A human must review changes before merge or deployment.
