# Release decision

## Decision: CONDITIONAL

Evidence (Node 22.23.5): `npm test` 10/10 pass, `npm run lint` clean, `npm run build` succeeds, `npm audit --omit=dev` reports 0 vulnerabilities. The two top confirmed risks (R-01, R-02) were mitigated and verified by new tests that failed on the baseline.

Conditions before any deployment (owner: maintainer):
1. Manual browser smoke test of add, complete, remove and filters. Not performed.
2. Decide on the 6 dev-only audit advisories (R-03); do not apply `npm audit fix --force` blindly (breaking downgrade).
3. Add tests for validation and add/toggle/remove (R-05).

Readiness level 2 (Documented). No production deployment is approved by this document.
