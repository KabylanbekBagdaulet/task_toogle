# Focused pattern decision

## Problem

The task list needs three views: all, active, and completed. Keeping conditional filtering logic inside the screen would make future filters harder to test and would mix presentation with selection rules.

## Decision

Use one small Strategy-style map in `src/taskFilters.js`. Each filter name maps to a predicate, while `filterTasks` owns the safe default for unknown names.

## Why this is justified

The map isolates one changing concern and makes the rules directly testable. A larger pattern would be unnecessary for this application, so the change stays limited to the filter decision.

## Before and after

Before (baseline export): filter selection already lived in `src/taskFilters.js` as a map of predicates; no pattern was added by this assignment. `filterTasks` read inherited keys (R-01) and `all` returned the task object instead of a boolean.

After: same map, with an own-property check and `all: () => true`; 9 filter tests. No new pattern or structural change was made; the Strategy-style map was kept because it already isolates the one changing concern. Adding a class hierarchy would be unjustified for three one-line predicates.

The five acceptance criteria remain unchanged and are covered by the visible workflow plus focused tests. This is one focused structural improvement, not a broad rewrite.
