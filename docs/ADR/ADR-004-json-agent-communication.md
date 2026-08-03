# ADR-004 — JSON-Based Agent Communication

| Field  | Value                          |
| ------ | ------------------------------ |
| ADR ID | ADR-004                        |
| Title  | JSON-Based Agent Communication |
| Status | Accepted                       |
| Date   | YYYY-MM-DD                     |
| Owner  | Mohamed Shehata                |

---

# Table of Contents

1. Context
2. Problem Statement
3. Decision
4. Rationale
5. Alternatives Considered
6. Consequences
7. Trade-offs
8. References

---

# 1. Context

Bluper consists of multiple AI Agents that collaborate to produce a Software Blueprint.

Each agent produces engineering output that becomes input for subsequent agents.

Reliable communication between agents is essential to maintain consistency and deterministic workflow execution.

---

# 2. Problem Statement

Natural language responses are difficult to process programmatically.

Free-form outputs introduce several problems:

- Inconsistent formatting.
- Ambiguous interpretation.
- Parsing failures.
- Difficult validation.
- Higher retry rates.
- Increased orchestration complexity.

The workflow requires a machine-readable communication format.

---

# 3. Decision

All communication between AI Agents and the Workflow Orchestrator shall use structured JSON.

Each agent must produce output that conforms to a predefined schema.

The Workflow Orchestrator validates every response before updating the Shared Execution Context.

Only validated JSON outputs are accepted.

---

# 4. Rationale

Using structured JSON provides:

- Deterministic outputs.
- Easy validation.
- Strong typing.
- Simpler orchestration.
- Lower parsing complexity.
- Better debugging.
- Easier testing.
- Future compatibility with Structured Output APIs.

JSON also enables versioned schemas and backward compatibility.

---

# 5. Alternatives Considered

## Natural Language Responses

Advantages

- Easy to generate.

Disadvantages

- Difficult to validate.
- Ambiguous.
- Error-prone.
- Not machine-friendly.

Decision

Rejected.

---

## XML

Advantages

- Structured.
- Mature standard.

Disadvantages

- Verbose.
- Larger payloads.
- Less common in AI workflows.

Decision

Rejected.

---

## YAML

Advantages

- Human-readable.

Disadvantages

- Sensitive to formatting.
- Harder to validate programmatically.

Decision

Rejected.

---

# 6. Consequences

Positive

- Predictable outputs.
- Easy schema validation.
- Better interoperability.
- Easier testing.
- Reduced parsing errors.

Negative

- Agents must follow strict schemas.
- Schema evolution requires version management.

---

# 7. Trade-offs

| Benefit               | Cost                        |
| --------------------- | --------------------------- |
| Deterministic outputs | Schema maintenance          |
| Easier validation     | Less flexibility            |
| Machine-readable      | Additional validation logic |

These trade-offs are acceptable because workflow reliability depends on structured communication.

---

# 8. References

Related Documents

- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
