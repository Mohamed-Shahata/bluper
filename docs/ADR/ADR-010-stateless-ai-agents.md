# ADR-010 — Stateless AI Agents

| Field  | Value               |
| ------ | ------------------- |
| ADR ID | ADR-010             |
| Title  | Stateless AI Agents |
| Status | Accepted            |
| Date   | YYYY-MM-DD          |
| Owner  | Mohamed Shehata     |

---

# 1. Context

Bluper executes multiple AI Agents throughout the workflow.

Agents receive all required information through the Runtime Context.

---

# 2. Problem Statement

If agents maintain internal state, the workflow becomes:

- Difficult to debug.
- Hard to retry.
- Difficult to reproduce.
- More tightly coupled.

---

# 3. Decision

All AI Agents shall be stateless.

Agents receive all required information as input.

Agents return structured output.

No internal memory is preserved between executions.

The Workflow Orchestrator remains solely responsible for execution state.

---

# 4. Rationale

Stateless agents provide:

- Predictable behavior.
- Easier retries.
- Better testing.
- Simpler scaling.
- Lower coupling.

---

# 5. Alternatives Considered

## Stateful Agents

Rejected because hidden state reduces determinism and complicates debugging.

---

# 6. Consequences

Positive

- Reproducible execution.
- Independent agents.
- Easier maintenance.

Negative

- Runtime Context becomes more important.

---

# 7. References

Related Documents

- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
