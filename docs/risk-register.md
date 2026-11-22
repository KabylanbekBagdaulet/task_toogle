# Risk register

Scores: likelihood 1–3 × impact 1–3 = score 1–9. Status is one of **Confirmed**, **Plausible / unverified**, **Unsupported**.
Candidate findings were first proposed by an AI assistant in a read-only review, then each was checked by hand (see `docs/ai-evidence.md`).

| ID | Category | Cause → event → consequence | Component and evidence | Status | L | I | Score | Mitigation / owner / verification | Residual (after) |
|---|---|---|---|---|--:|--:|--:|---|---|
| R-01 | Correctness | `FILTERS[filter]` reads inherited keys → `filterTasks(tasks,'hasOwnProperty'/'valueOf'/'__proto__')` throws; `'constructor'`/`'toString'` silently return all tasks → UI crash if a filter value ever comes from outside the three buttons (URL, storage). | `src/taskFilters.js` (baseline line 8: `FILTERS[filter] ?? FILTERS.all`). Reproduced: 3 new tests failed on baseline with `TypeError: Cannot convert undefined or null to object` / `object is not a function` (`before-tests.txt`). | Confirmed | 2 | 2 | 4 | **M-1** `Object.hasOwn` check + `all: () => true`. Owner: maintainer. Verified by 5 new tests, all pass. | 1 (L1×I1): UI currently only passes 3 fixed values. |
| R-02 | Correctness | `id: Date.now()` → two tasks created in the same millisecond share an id → toggle/remove acts on both, React duplicate-key warning. | `src/App.jsx` baseline line 31. Reproduced in Node: 5 consecutive `Date.now()` calls gave 1 unique value. | Confirmed | 2 | 2 | 4 | **M-2** `createTaskId()` in `src/taskId.js` (`crypto.randomUUID`, counter fallback). Verified by test: 1000 ids unique. | 1 (L1×I2): fallback path relies on counter; only used where `crypto.randomUUID` is missing. |
| R-03 | Dependency | Dev-tool chain (`vite`/`vitest` → `tinyglobby` → `fdir` → `picomatch`) has a high ReDoS advisory GHSA-fc5q-39xc-vjpf. | `npm audit` → 6 high (one root cause); `npm audit --omit=dev` → 0. | Confirmed (dev only) | 1 | 2 | 2 | Not changed: `npm audit fix --force` proposes a breaking Vite 6.2.7 downgrade. Review manually. Owner: maintainer. | Remains; not shipped in the bundle. |
| R-04 | Reproducibility | README says Node 20+, but Vitest 5.1.1 requires `^22.12 \|\| ^24 \|\| >=26` (`package-lock.json` engines). On Node 20 `npm test` can fail. | `README.md`, `package-lock.json`. | Confirmed | 2 | 1 | 2 | README corrected, `engines` added to `package.json`. | Not tested on Node 20 here (only Node 22.23.5 available). |
| R-05 | Maintainability / test gap | Validation (empty, >80 chars) and add/toggle/remove logic live inside `App.jsx`; no UI or unit tests cover acceptance criteria 1, 2, 4. | `src/App.jsx`; `tests/` has only filter tests. | Confirmed | 2 | 2 | 4 | Not mitigated (assignment allows two). Next step: extract `validateTitle` and add tests. | Open. |
| R-06 | Security | Task title rendered as HTML → XSS. | `src/App.jsx`: title is a React text child; no `dangerouslySetInnerHTML`. | Unsupported as a vulnerability | 1 | 3 | 3 | Keep text rendering (AGENTS.md rule). | Future change could add an HTML sink. |
| R-07 | Agent operations | Agent ignores `AGENTS.md` boundaries and makes unreviewed changes. | `AGENTS.md` is a process control only; no CI, no branch protection in this repo. | Plausible / unverified | 1 | 3 | 3 | Human review before merge; add CI later. | Not technically enforced. |
| R-08 | Product | Refresh clears tasks. | Footer states it; no storage. | Confirmed limitation (accepted by design) | 3 | 1 | 3 | Disclosed in UI and README. | Accepted. |

Categories covered: correctness, dependency, reproducibility, maintainability, security, agent operations.

## Top two confirmed risks chosen for action

1. **R-01** (score 4) → mitigation M-1.
2. **R-02** (score 4) → mitigation M-2.
(R-05 has the same score; R-01/R-02 were picked because each is a small, fully testable code defect. R-05 is recorded as next work.)
