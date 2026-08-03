# AG-003 — Requirements Generator

| Field    | Value                  |
| -------- | ---------------------- |
| Agent ID | AG-003                 |
| Name     | Requirements Generator |
| Category | Engineering            |
| Status   | Draft                  |
| Owner    | Mohamed Shehata        |
| Version  | 1.0                    |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Execution Logic
6. Requirement Generation Strategy
7. Validation Rules
8. Dependencies
9. Failure Handling
10. Success Criteria
11. References

---

# 1. Purpose

The Requirements Generator transforms the collected project information into a complete and structured Software Requirements Specification (SRS).

It is responsible for defining what the software should do before any architectural or technical decisions are made.

The generated requirements become the primary source of truth for every downstream AI Agent.

---

# 2. Responsibilities

The Requirements Generator is responsible for:

- Consolidating all project information.
- Generating Functional Requirements.
- Generating Non-Functional Requirements.
- Defining Business Rules.
- Identifying User Roles.
- Defining System Scope.
- Identifying External Integrations.
- Producing a structured Software Requirements Specification.

---

# 3. Inputs

The Requirements Generator receives:

```json
{
  "projectSummary": {},
  "answers": {},
  "executionContext": {}
}
```

### Input Description

| Field            | Required | Description                      |
| ---------------- | -------- | -------------------------------- |
| projectSummary   | Yes      | Project summary from AG-001      |
| answers          | Yes      | User answers collected by AG-002 |
| executionContext | Yes      | Current workflow context         |

---

# 4. Outputs

The Requirements Generator returns:

```json
{
  "requirements": {
    "functional": [],
    "nonFunctional": [],
    "businessRules": [],
    "userRoles": [],
    "integrations": [],
    "constraints": []
  }
}
```

The generated requirements become the foundation for all subsequent engineering decisions.

---

# 5. Execution Logic

The Requirements Generator follows the workflow below.

Step 1

Read the complete execution context.

↓

Step 2

Merge project summary with user answers.

↓

Step 3

Identify system actors.

↓

Step 4

Generate Functional Requirements.

↓

Step 5

Generate Non-Functional Requirements.

↓

Step 6

Generate Business Rules.

↓

Step 7

Identify external systems.

↓

Step 8

Generate the final Software Requirements Specification.

---

# 6. Requirement Generation Strategy

The Requirements Generator follows the principles below.

## Functional Requirements

Describe what the software must do.

Examples include:

- User authentication
- Order management
- Payment processing
- Notifications
- Reporting

Each requirement should be clear, atomic, and testable.

---

## Non-Functional Requirements

Describe system quality attributes.

Examples include:

- Performance
- Security
- Scalability
- Reliability
- Availability
- Maintainability
- Accessibility

These requirements should be measurable whenever possible.

---

## Business Rules

Business Rules define policies and constraints that govern system behavior.

Examples:

- A customer cannot cancel an order after shipment.
- Only administrators may approve refunds.
- Passwords must meet defined security requirements.

---

## User Roles

Identify all system actors and their responsibilities.

Examples:

- Administrator
- Customer
- Employee
- Manager
- Guest

---

## External Integrations

Identify third-party systems required by the project.

Examples:

- Stripe
- Google OAuth
- Firebase
- AWS S3
- Email Provider
- SMS Provider

Only integrations explicitly required by the project should be included.

---

## Constraints

Identify technical or business constraints.

Examples:

- Free AI models only.
- English output only.
- REST APIs only.
- Budget limitations.
- Regulatory requirements.

---

# 7. Validation Rules

The Requirements Generator must:

- Produce complete requirements.
- Avoid duplicate requirements.
- Avoid contradictions.
- Keep requirements implementation-independent.
- Avoid architecture decisions.
- Avoid technology recommendations.

Requirements should describe what the system must accomplish, not how it will be implemented.

---

# 8. Dependencies

Previous Agents

- AG-001 Prompt Analyzer
- AG-002 Question Generator

---

Next Agent

- AG-004 Requirements Validator

---

# 9. Failure Handling

If required project information is missing:

Return:

```json
{
  "status": "warning",
  "missingSections": []
}
```

If requirement generation fails:

```json
{
  "status": "failed",
  "reason": "Unable to generate software requirements."
}
```

---

# 10. Success Criteria

The Requirements Generator succeeds when:

- Functional Requirements are complete.
- Non-Functional Requirements are complete.
- Business Rules are identified.
- User Roles are defined.
- External Integrations are listed.
- Constraints are documented.
- No architectural assumptions are introduced.

---

# 11. References

Related Documents

- 01-project-specification.md
- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
- ADR-005

---

# Notes

The Requirements Generator defines what the software must achieve.

It intentionally avoids making implementation or architecture decisions.

Its output serves as the engineering foundation for every subsequent AI Agent and must remain stable throughout the remainder of the blueprint generation workflow.
