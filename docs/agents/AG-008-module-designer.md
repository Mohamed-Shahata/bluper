# AG-008 — Module Designer

| Field    | Value           |
| -------- | --------------- |
| Agent ID | AG-008          |
| Name     | Module Designer |
| Category | Engineering     |
| Status   | Draft           |
| Owner    | Mohamed Shehata |
| Version  | 1.0             |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Module Design Strategy
6. Module Design Principles
7. Execution Logic
8. Validation Rules
9. Dependencies
10. Failure Handling
11. Success Criteria
12. References

---

# 1. Purpose

The Module Designer is responsible for decomposing the software system into well-defined business modules.

Its objective is to create clear module boundaries that improve maintainability, scalability, readability, and long-term evolution.

The generated modules become the structural foundation for database design, API planning, folder organization, and future implementation.

---

# 2. Responsibilities

The Module Designer is responsible for:

- Identifying business domains.
- Splitting the system into logical modules.
- Defining module responsibilities.
- Defining module boundaries.
- Identifying relationships between modules.
- Detecting shared responsibilities.
- Reducing unnecessary coupling.
- Maximizing cohesion.
- Producing a modular system structure.

---

# 3. Inputs

The Module Designer receives:

```json
{
  "requirements": {},
  "technologyStack": {},
  "architecture": {},
  "designPatterns": {},
  "executionContext": {}
}
```

### Input Description

| Field            | Required | Description                   |
| ---------------- | -------- | ----------------------------- |
| requirements     | Yes      | Approved project requirements |
| technologyStack  | Yes      | Selected technology stack     |
| architecture     | Yes      | Selected architecture         |
| designPatterns   | Yes      | Recommended design patterns   |
| executionContext | Yes      | Shared workflow context       |

---

# 4. Outputs

```json
{
  "modules": [
    {
      "name": "",
      "purpose": "",
      "responsibilities": [],
      "dependencies": []
    }
  ]
}
```

Each module should include:

- Module Name
- Business Purpose
- Responsibilities
- Public Responsibilities
- Internal Responsibilities
- Dependencies
- Related Modules

---

# 5. Module Design Strategy

The system should be divided according to business capabilities rather than technical layers.

Examples of business modules include:

- Authentication
- User Management
- Orders
- Products
- Payments
- Notifications
- Reporting

The exact modules depend entirely on the project requirements.

---

# 6. Module Design Principles

The Module Designer should follow these principles.

## High Cohesion

Each module should focus on one business capability.

---

## Low Coupling

Dependencies between modules should be minimized.

---

## Single Responsibility

Each module should own one primary business responsibility.

---

## Encapsulation

Modules should expose only their public responsibilities.

Internal implementation details should remain hidden.

---

## Independent Evolution

Whenever possible, modules should evolve independently without affecting unrelated modules.

---

## Business-Oriented Boundaries

Modules should be organized around business concepts rather than database tables or controllers.

---

# 7. Execution Logic

Step 1

Analyze approved requirements.

↓

Step 2

Read architecture recommendation.

↓

Step 3

Identify business domains.

↓

Step 4

Define module boundaries.

↓

Step 5

Assign responsibilities.

↓

Step 6

Define dependencies.

↓

Step 7

Validate module cohesion.

↓

Step 8

Return module structure.

---

# 8. Validation Rules

The Module Designer must never:

- Split modules unnecessarily.
- Combine unrelated business domains.
- Create circular dependencies.
- Organize modules around database tables.
- Organize modules around controllers.
- Violate the selected architecture.

Modules should represent business capabilities, not implementation details.

---

# 9. Dependencies

Previous Agent

- AG-007 Design Pattern Recommendation

---

Next Agent

- AG-009 Database Designer

---

# 10. Failure Handling

If module boundaries cannot be clearly identified:

```json
{
  "status": "warning",
  "reason": "Business boundaries are unclear."
}
```

The Workflow Orchestrator may request additional clarification before continuing.

---

# 11. Success Criteria

The Module Designer succeeds when:

- Every business capability belongs to exactly one module.
- Module responsibilities are clearly defined.
- Dependencies are minimal.
- Cohesion is high.
- Circular dependencies do not exist.
- Module boundaries align with the selected architecture.

---

# 12. References

Related Documents

- 03-architecture-recommendation-strategy.md
- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-001
- ADR-003
- ADR-005

---

# Notes

The Module Designer defines the logical structure of the software system.

It does not design database tables, API endpoints, folder structures, or source code.

Its output establishes the business boundaries upon which all downstream engineering decisions are based.

A well-designed module structure significantly reduces coupling, simplifies maintenance, and improves long-term scalability.
