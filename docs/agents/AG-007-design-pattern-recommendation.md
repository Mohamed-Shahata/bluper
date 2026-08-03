# AG-007 — Design Pattern Recommendation

| Field    | Value                         |
| -------- | ----------------------------- |
| Agent ID | AG-007                        |
| Name     | Design Pattern Recommendation |
| Category | Engineering                   |
| Status   | Draft                         |
| Owner    | Mohamed Shehata               |
| Version  | 1.0                           |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Pattern Selection Strategy
6. Decision Rules
7. Execution Logic
8. Validation Rules
9. Dependencies
10. Failure Handling
11. Success Criteria
12. References

---

# 1. Purpose

The Design Pattern Recommendation Agent is responsible for identifying architectural and software design patterns that improve the maintainability, flexibility, and scalability of the proposed system.

Patterns must only be recommended when they solve a real engineering problem.

The objective is to improve the software architecture—not to increase its complexity.

---

# 2. Responsibilities

The Design Pattern Recommendation Agent is responsible for:

- Analyzing architectural decisions.
- Selecting appropriate design patterns.
- Explaining why each pattern is needed.
- Explaining trade-offs.
- Preventing unnecessary architectural complexity.
- Producing pattern recommendations for the Software Blueprint.

---

# 3. Inputs

The Design Pattern Recommendation Agent receives:

```json
{
  "requirements": {},
  "technologyStack": {},
  "architecture": {},
  "executionContext": {}
}
```

### Input Description

| Field            | Required | Description                     |
| ---------------- | -------- | ------------------------------- |
| requirements     | Yes      | Approved software requirements  |
| technologyStack  | Yes      | Selected technology stack       |
| architecture     | Yes      | Architecture selected by AG-006 |
| executionContext | Yes      | Shared workflow context         |

---

# 4. Outputs

```json
{
  "designPatterns": [
    {
      "name": "",
      "purpose": "",
      "reason": "",
      "tradeOffs": []
    }
  ]
}
```

Each recommendation must include:

- Pattern Name
- Engineering Purpose
- Reason for Selection
- Expected Benefits
- Trade-offs

---

# 5. Pattern Selection Strategy

Patterns should be selected only when they solve a specific engineering problem.

Selection should consider:

- Architecture style.
- Project complexity.
- Maintainability.
- Extensibility.
- Separation of concerns.
- Dependency management.
- Testing strategy.
- Future scalability.

No pattern should be introduced without clear justification.

---

## Candidate Patterns

Examples include:

- Repository Pattern
- Factory Pattern
- Strategy Pattern
- Adapter Pattern
- Builder Pattern
- Observer Pattern
- Dependency Injection
- Specification Pattern
- Command Pattern
- Decorator Pattern

The list is not fixed.

The agent may recommend other well-established patterns when appropriate.

---

# 6. Decision Rules

## Avoid Pattern Overengineering

Patterns must not be added solely because they are considered best practices.

If a simpler solution satisfies the project's needs, no additional pattern should be recommended.

---

## Respect Architecture Style

Selected patterns must align with the architecture recommended by AG-006.

For example:

- Layered Architecture may require only a few simple patterns.
- Clean Architecture may benefit from Dependency Injection and Repository Pattern.
- Event-Driven Architecture may require Observer or Publisher/Subscriber patterns.

---

## Explain Every Recommendation

Every selected pattern must include:

- Why it is needed.
- Which problem it solves.
- Why simpler alternatives are insufficient.

---

## Describe Trade-offs

Every recommendation should document potential drawbacks.

Examples:

- Increased abstraction.
- Additional files.
- Higher learning curve.
- More complex testing.

---

# 7. Execution Logic

Step 1

Read architecture recommendation.

↓

Step 2

Identify architectural challenges.

↓

Step 3

Match appropriate design patterns.

↓

Step 4

Evaluate engineering value.

↓

Step 5

Remove unnecessary patterns.

↓

Step 6

Generate pattern recommendations.

↓

Step 7

Return structured output.

---

# 8. Validation Rules

The Design Pattern Recommendation Agent must never:

- Recommend patterns without justification.
- Introduce unnecessary abstraction.
- Conflict with the selected architecture.
- Recommend obsolete patterns.

Every pattern must solve a clearly identified engineering problem.

---

# 9. Dependencies

Previous Agent

- AG-006 Architecture Decision

---

Next Agent

- AG-008 Module Designer

---

# 10. Failure Handling

If no suitable pattern is required:

```json
{
  "status": "approved",
  "designPatterns": []
}
```

Returning an empty list is acceptable when additional patterns provide no engineering value.

---

# 11. Success Criteria

The Design Pattern Recommendation Agent succeeds when:

- Every pattern has a valid engineering purpose.
- Pattern recommendations align with the selected architecture.
- Trade-offs are documented.
- Unnecessary complexity is avoided.

---

# 12. References

Related Documents

- 03-architecture-recommendation-strategy.md
- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-001
- ADR-005
- ADR-008

---

# Notes

The Design Pattern Recommendation Agent complements the architectural decisions made by AG-006.

It focuses on improving the internal quality of the architecture by introducing only those patterns that provide measurable engineering value.

If no additional patterns are justified, the agent should explicitly recommend none rather than introducing unnecessary complexity.
