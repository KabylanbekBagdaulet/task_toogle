# AI evidence appendix

- Tools: Bolt (AI app builder) generated the baseline project and first drafts of docs on 2026-11-18; Claude (Anthropic) was used afterwards to re-run checks, challenge the findings and implement/verify two mitigations. TODO(student): write the exact Bolt model name shown in Bolt.
- Date: 2026-11-18
- Purpose: repository setup, focused design review, risk candidate generation, and documentation drafting.
- Prompt summary: implement the supplied Assignment 05 workflow on a small non-sensitive project; inspect evidence; avoid fabricated test results.
- Output used: scope proposal, filter-pattern rationale, risk categories, and draft operating boundaries.
- Human verification: reviewed all generated files, kept only claims supported by source or command output, and excluded unsupported security allegations.
- Not used: any claim about production deployment, browser accessibility, or persistent storage.

- Problems found in the AI output: Bolt's baseline was generated from scratch (no real baseline), its risk register listed controls as risks, and its two 'mitigations' were pre-existing text/pinning with no tests. The pattern 'before' state was not real.
- Changes made: new risk register, two code mitigations with tests, README/engines fix, rewritten verification and release decision.
- Verification sources: command output in `docs/verification.md`, `package-lock.json` engines, Node probe scripts.
