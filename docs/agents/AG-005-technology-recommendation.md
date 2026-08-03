# AG-005 — Technology Recommendation

| Field    | Value                     |
| -------- | ------------------------- |
| Agent ID | AG-005                    |
| Name     | Technology Recommendation |
| Category | Engineering               |
| Status   | Draft                     |
| Owner    | Mohamed Shehata           |
| Version  | 1.0                       |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Technology Selection Strategy
6. Decision Rules
7. Execution Logic
8. Validation Rules
9. Dependencies
10. Failure Handling
11. Success Criteria
12. References

---

# 1. Purpose

The Technology Recommendation Agent is responsible for selecting the most appropriate technology stack for the project.

Its recommendations are based entirely on the validated project requirements, business constraints, and user preferences.

The goal is not to recommend the newest technologies.

The goal is to recommend the technologies that best fit the project.

---

# 2. Responsibilities

The Technology Recommendation Agent is responsible for:

- Recommending Backend technologies.
- Recommending Frontend technologies.
- Recommending Database technologies.
- Recommending Authentication solutions.
- Recommending Storage solutions.
- Recommending Deployment platforms.
- Recommending AI providers when required.
- Explaining every recommendation.
- Explaining trade-offs.

---

# 3. Inputs

The Technology Recommendation Agent receives:

```json
{
  "requirements": {},
  "projectSummary": {},
  "answers": {},
  "executionContext": {}
}
```

---

### Input Description

| Field            | Required | Description                    |
| ---------------- | -------- | ------------------------------ |
| requirements     | Yes      | Approved Software Requirements |
| projectSummary   | Yes      | Project summary                |
| answers          | Yes      | User answers                   |
| executionContext | Yes      | Workflow context               |

---

# 4. Outputs

```json
{
  "technologyStack": {
    "frontend": {},
    "backend": {},
    "database": {},
    "authentication": {},
    "storage": {},
    "deployment": {},
    "ai": {}
  }
}
```

Each recommendation includes:

- Selected Technology
- Reason
- Advantages
- Trade-offs

---

# 5. Technology Selection Strategy

Technology recommendations should consider:

- Project requirements
- Project size
- Expected growth
- Scalability needs
- Team experience
- Development speed
- Budget constraints
- AI requirements
- Deployment requirements
- Ecosystem maturity

The recommendation must always prioritize fitness over popularity.

---

# 6. Decision Rules

## Respect User Choices

If the user explicitly selects a technology, it must not be replaced.

The Agent may provide observations or warnings, but the final recommendation must respect the user's decision.

---

## Recommend When Needed

If the user does not specify a technology, recommend the most suitable option based on the project requirements.

---

## Explain Every Decision

Every recommendation must include a technical explanation.

Example:

Backend:

NestJS

Reason:

Strong modular architecture, dependency injection, excellent scalability, and long-term maintainability.

---

## Consider Compatibility

The recommended technologies should work well together.

The overall stack should be internally consistent.

---

## Avoid Trend-Based Decisions

Technologies must never be recommended simply because they are popular.

Recommendations should be based on engineering value.

---

# 7. Execution Logic

Step 1

Read approved requirements.

↓

Step 2

Read user preferences.

↓

Step 3

Identify project constraints.

↓

Step 4

Evaluate suitable technologies.

↓

Step 5

Build a compatible technology stack.

↓

Step 6

Generate engineering explanations.

↓

Step 7

Return the recommended stack.

---

# 8. Validation Rules

The Technology Recommendation Agent must never:

- Ignore explicit user choices.
- Recommend incompatible technologies.
- Recommend obsolete technologies without justification.
- Recommend technologies outside the project scope.

Every recommendation must have a clear engineering rationale.

---

# 9. Dependencies

Previous Agent

- AG-004 Requirements Validator

---

Next Agent

- AG-006 Architecture Decision

---

# 10. Failure Handling

If suitable technologies cannot be determined:

```json
{
  "status": "warning"
}
```

Include the uncertain sections and request additional clarification if necessary.

---

# 11. Success Criteria

The Technology Recommendation Agent succeeds when:

- Every major technology category is covered.
- Recommendations align with project requirements.
- User preferences are respected.
- Technology compatibility is maintained.
- Every recommendation includes engineering reasoning.

---

# 12. References

Related Documents

- 01-project-specification.md
- 03-architecture-recommendation-strategy.md
- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-007
- ADR-008

---

# Notes

The Technology Recommendation Agent recommends technologies only.

It does not define software architecture, generate implementation details, or influence business requirements.

Its output provides the technological foundation that the Architecture Decision Agent will use to design the overall system.
