# ADR-007 — AI Provider Strategy

| Field  | Value                |
| ------ | -------------------- |
| ADR ID | ADR-007              |
| Title  | AI Provider Strategy |
| Status | Accepted             |
| Date   | YYYY-MM-DD           |
| Owner  | Mohamed Shehata      |

---

# 1. Context

Bluper relies on Large Language Models (LLMs) to perform specialized software engineering tasks.

Different AI providers offer different models, pricing, response quality, and capabilities.

The platform should not become tightly coupled to a single provider.

---

# 2. Problem Statement

Using a single AI provider introduces several risks:

- Vendor lock-in.
- Pricing changes.
- API availability issues.
- Limited model selection.
- Reduced flexibility.

The platform requires a provider-independent architecture.

---

# 3. Decision

Bluper will introduce an AI Provider abstraction layer.

The Workflow Orchestrator communicates only with the Provider Layer.

Each provider implements the same interface.

Examples include:

- OpenAI
- Anthropic
- Google
- Local Models
- Future providers

Switching providers should require configuration changes rather than workflow changes.

---

# 4. Rationale

This approach provides:

- Vendor independence.
- Easier upgrades.
- Better cost optimization.
- Future extensibility.
- Simpler testing.

---

# 5. Alternatives Considered

## Direct OpenAI Integration

Rejected because it tightly couples the platform to one provider.

---

## Provider-specific Workflow

Rejected because it duplicates orchestration logic.

---

# 6. Consequences

Positive

- Flexible provider selection.
- Better maintainability.
- Easier experimentation.

Negative

- Additional abstraction layer.

---

# 7. References

Related Documents

- 07-backend-architecture.md

Related ADRs

- ADR-002
