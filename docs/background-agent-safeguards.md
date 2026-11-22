# Hypothetical background-agent safeguards

This is a design exercise only; no background agent is enabled.

## Isolated task

A temporary worktree named `agent/task-<id>` may inspect the repository and propose a patch. The agent may edit only `src/`, `tests/`, `docs/`, and explicitly approved configuration files.

## Allowed commands

Read-only inspection, `npm test`, `npm run lint`, and `npm run build`. Network access, secret inspection, package upgrades, deployment, and destructive commands are prohibited.

## Time and artifacts

The task expires after one run. Required artifacts are a change summary, diff, test output, build output, risk notes, and a list of files not inspected. The agent must stop if a check fails rather than hiding it.

## Human gate and rollback

A human reviews the diff and evidence before merge or deployment. If verification fails, discard the temporary worktree or revert the reviewed patch; do not force a deployment. A failed agent run produces no release decision.
