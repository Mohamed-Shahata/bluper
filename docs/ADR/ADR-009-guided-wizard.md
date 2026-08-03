# ADR-009 — Guided Wizard Strategy

| Field  | Value                  |
| ------ | ---------------------- |
| ADR ID | ADR-009                |
| Title  | Guided Wizard Strategy |
| Status | Accepted               |
| Date   | YYYY-MM-DD             |
| Owner  | Mohamed Shehata        |

---

# 1. Context

Project descriptions are often incomplete.

Missing information reduces blueprint quality.

---

# 2. Problem Statement

Requesting too much information increases user effort.

Requesting too little reduces engineering quality.

The system requires a balanced approach.

---

# 3. Decision

Bluper will ask only the minimum number of questions necessary to complete engineering decisions.

Questions should:

- Be multiple-choice whenever possible.
- Follow engineering priority.
- Avoid unnecessary interaction.

The workflow stops asking questions as soon as sufficient information has been collected.

---

# 4. Rationale

Benefits include:

- Faster workflows.
- Better user experience.
- Lower token usage.
- Higher completion rates.

---

# 5. Alternatives Considered

## Long Initial Form

Rejected because it increases abandonment.

---

## No Questions

Rejected because architecture quality would suffer.

---

# 6. Consequences

Positive

- Minimal interaction.
- Better requirements.
- Efficient workflow.

Negative

- Requires intelligent question prioritization.

---

# 7. References

Related Documents

- 04-ai-workflow.md

Related ADRs

- ADR-005
