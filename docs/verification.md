# Verification log

Node v22.23.5, npm 10.9.9, installed with `npm ci`. Raw output: `before-tests.txt`, `after-checks.txt` (outside the repo).

| Check | Baseline (Bolt export, 4 tests) | After mitigations |
|---|---|---|
| `npm test` | PASS, 1 file, 4 tests | PASS, 2 files, 10 tests |
| `npm run lint` | PASS (no output) | PASS (no output) |
| `npm run build` | PASS, 17 modules | PASS, 18 modules |
| `npm audit --omit=dev` | 0 vulnerabilities | 0 vulnerabilities |
| `npm audit` (full) | 6 high (dev tooling, picomatch ReDoS) | unchanged, 6 high |

## Before/after for the mitigations

New tests were added to the **unchanged** baseline source first: `npm test` → 3 failed, 6 passed, and `tests/taskId.test.js` failed to load (module did not exist). After the fixes: 10 passed, 0 failed.
The `Date.now()` collision was shown with a Node script (5 rapid calls → 1 unique value).

## Not executed

Browser behaviour, accessibility, screen-reader use, Node 20, and deployment were not tested.
