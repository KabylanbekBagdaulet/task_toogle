# Clearlist Task Tracker

A small, client-side task tracker used as the working repository for Software Engineering Assignment 05.

## What it does

Users can add a task, mark it complete, remove it, and filter the list by all, active, or completed tasks. Empty and oversized input is rejected with a visible message. The app intentionally keeps data in page memory and clears it when the page is refreshed.

## Requirements

- Node.js 22.12 or newer (required by Vitest 5; Vite 8 alone accepts 20.19+)
- npm

## Checks

```text
npm test
npm run lint
npm run build
```

See `AGENTS.md` for operating boundaries and `docs/` for the assignment evidence.
