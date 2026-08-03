# ADR-006 — Selective Retry Strategy

| Field  | Value                    |
| ------ | ------------------------ |
| ADR ID | ADR-006                  |
| Title  | Selective Retry Strategy |
| Status | Accepted                 |
| Date   | YYYY-MM-DD               |
| Owner  | Mohamed Shehata          |

---

# 1. Context

The Blueprint Reviewer validates the completed Software Blueprint.

Occasionally, individual sections may fail validation while the rest of the blueprint remains correct.

---

# 2. Problem Statement

Restarting the entire workflow after every validation failure would:

- Increase AI cost.
- Waste tokens.
- Increase execution time.
- Regenerate correct outputs unnecessarily.

---

# 3. Decision

Bluper will use selective retries.

Only the agent responsible for the invalid section is re-executed.

Unaffected outputs remain unchanged.

Each agent may be retried only once.

---

# 4. Rationale

Selective retries reduce:

- Token usage.
- AI cost.
- Latency.

They also preserve validated engineering decisions.

---

# 5. Alternatives Considered

## Restart Entire Workflow

Rejected because of unnecessary cost and duplicated work.

---

## Unlimited Retries

Rejected because repeated retries increase cost without guaranteeing better results.

---

# 6. Consequences

Positive

- Faster execution.
- Lower cost.
- Stable workflow.
- Better consistency.

Negative

- Retry dependency logic becomes more complex.

---

# 7. References

Related Documents

- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
- ADR-005
