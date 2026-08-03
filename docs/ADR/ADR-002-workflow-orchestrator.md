# ADR-002 — Workflow Orchestrator

| Field  | Value                 |
| ------ | --------------------- |
| ADR ID | ADR-002               |
| Title  | Workflow Orchestrator |
| Status | Accepted              |
| Date   | YYYY-MM-DD            |
| Owner  | Mohamed Shehata       |

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

Bluper generates a Software Blueprint through a sequence of specialized AI Agents.

Each agent performs a single engineering responsibility and depends on outputs produced by previous agents.

The workflow includes:

- Prompt Analysis
- Question Generation
- Requirements Generation
- Requirements Validation
- Technology Recommendation
- Architecture Recommendation
- Design Pattern Recommendation
- Module Design
- Database Design
- API Design
- Security Design
- Documentation Generation
- Blueprint Review

These agents must execute in a predictable and controlled order.

---

# 2. Problem Statement

Allowing agents to execute independently introduces several risks:

- Incorrect execution order.
- Missing dependencies.
- Inconsistent outputs.
- Duplicate work.
- Difficult retry handling.
- No centralized error management.
- Poor observability.

The system requires a central component responsible for coordinating the complete engineering workflow.

---

# 3. Decision

Bluper will use a dedicated **Workflow Orchestrator**.

The Workflow Orchestrator is responsible for coordinating the complete lifecycle of blueprint generation.

Its responsibilities include:

- Managing workflow execution.
- Determining execution order.
- Passing context between agents.
- Providing Runtime Context.
- Validating agent outputs.
- Managing retries.
- Handling failures.
- Aggregating final results.
- Producing the final Software Blueprint.

The Workflow Orchestrator is the only component allowed to invoke AI Agents.

Agents never invoke one another directly.

---

# 4. Rationale

A centralized orchestration layer provides:

- Deterministic execution.
- Clear workflow visibility.
- Easier debugging.
- Better monitoring.
- Simpler retry logic.
- Consistent context sharing.
- Separation of responsibilities.

Each AI Agent focuses only on its engineering task.

The Orchestrator focuses only on workflow management.

This separation reduces coupling and improves maintainability.

---

# 5. Alternatives Considered

## Direct Agent-to-Agent Communication

Advantages

- Simpler implementation.

Disadvantages

- High coupling.
- Difficult debugging.
- Poor scalability.
- Retry logic becomes distributed.
- Hard to maintain.

Decision

Rejected.

---

## Event-Driven Workflow

Advantages

- Highly scalable.
- Flexible execution.

Disadvantages

- Increased complexity.
- Harder debugging.
- More infrastructure.
- Not justified for current project scope.

Decision

Rejected.

---

## Distributed Workflow Engine

Advantages

- Enterprise scalability.
- Parallel execution.
- Advanced scheduling.

Disadvantages

- Significant operational overhead.
- Higher infrastructure cost.
- Unnecessary complexity.

Decision

Rejected.

---

# 6. Consequences

Positive

- Single workflow controller.
- Predictable execution.
- Centralized logging.
- Centralized retry logic.
- Easier testing.
- Easier maintenance.
- Better observability.

Negative

- The Orchestrator becomes a critical component.
- Workflow execution depends on a single coordination layer.
- Additional orchestration logic is required.

---

# 7. Trade-offs

| Benefit             | Cost                                         |
| ------------------- | -------------------------------------------- |
| Centralized control | Additional orchestration logic               |
| Easier debugging    | More responsibility in one component         |
| Consistent workflow | Slight increase in implementation complexity |
| Better monitoring   | Requires careful orchestration design        |

These trade-offs are acceptable because workflow reliability is more important than minimizing orchestration code.

---

# 8. References

Related Documents

- 04-ai-workflow.md
- 07-backend-architecture.md
- 09-ai-agents.md

Related ADRs

- ADR-001
- ADR-003
- ADR-006
