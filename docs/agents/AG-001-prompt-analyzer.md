# AG-001 — Prompt Analyzer

| Field    | Value           |
| -------- | --------------- |
| Agent ID | AG-001          |
| Name     | Prompt Analyzer |
| Category | Analysis        |
| Status   | Draft           |
| Owner    | Mohamed Shehata |
| Version  | 1.0             |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Execution Logic
6. Validation Rules
7. Dependencies
8. Failure Handling
9. Success Criteria
10. References

---

# 1. Purpose

The Prompt Analyzer is the entry point of the entire AI workflow.

Its responsibility is to understand the user's project idea, extract all available information, identify missing details, and prepare a structured project summary for the remaining AI Agents.

The Prompt Analyzer never makes architectural decisions.

It only understands the project.

---

# 2. Responsibilities

The Prompt Analyzer is responsible for:

- Reading the user's project description.
- Understanding the project objective.
- Identifying the project type.
- Detecting business goals.
- Detecting functional requirements.
- Detecting non-functional requirements.
- Detecting constraints.
- Detecting assumptions.
- Detecting missing information.
- Estimating project complexity.
- Preparing structured project metadata.

---

# 3. Inputs

The Prompt Analyzer receives:

```json
{
  "projectDescription": "string",
  "attachments": [],
  "previousContext": {}
}
```

### Input Description

| Field              | Required | Description               |
| ------------------ | -------- | ------------------------- |
| projectDescription | Yes      | User project idea         |
| attachments        | No       | Optional uploaded files   |
| previousContext    | No       | Existing workflow context |

---

# 4. Outputs

The Prompt Analyzer returns:

```json
{
  "projectSummary": {},
  "missingInformation": [],
  "complexity": {},
  "questionRequired": true
}
```

---

### Output Description

#### Project Summary

Contains everything clearly stated by the user.

Example:

- Project Type
- Business Goal
- Users
- Core Features

---

#### Missing Information

Contains information that cannot be inferred safely.

Example:

- Authentication
- Target Platform
- User Roles
- Expected Scale
- Preferred Technologies

---

#### Complexity

Estimated complexity.

Possible values:

- Small
- Medium
- Large
- Enterprise

---

#### Question Required

Boolean value.

Determines whether the Question Generator should execute.

---

# 5. Execution Logic

The Prompt Analyzer follows the workflow below.

Step 1

Read the project description.

↓

Step 2

Extract explicit facts.

↓

Step 3

Detect missing information.

↓

Step 4

Estimate project complexity.

↓

Step 5

Generate structured project summary.

↓

Step 6

Return structured JSON.

---

# 6. Validation Rules

The Prompt Analyzer must never:

- Invent requirements.
- Assume technologies.
- Guess business logic.
- Generate architecture.
- Recommend databases.
- Recommend APIs.

Only explicit information may be extracted.

Unknown information must appear inside:

Missing Information.

---

# 7. Dependencies

Previous Agents

None

---

Next Agents

- AG-002 Question Generator
- AG-003 Requirements Generator

---

# 8. Failure Handling

If the project description cannot be understood:

Return:

```json
{
  "status": "failed",
  "reason": "Unable to understand project description."
}
```

If the description is partially understandable:

Return:

```json
{
  "status": "warning"
}
```

Include missing information normally.

---

# 9. Success Criteria

The Prompt Analyzer succeeds when:

- Every explicit requirement is extracted.
- Missing information is identified.
- No assumptions are introduced.
- Complexity is estimated.
- Structured JSON is returned.

---

# 10. References

Related Documents

- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
- ADR-004
- ADR-005

---

# Notes

The Prompt Analyzer is intentionally conservative.

When uncertainty exists, it prefers asking questions rather than making assumptions.

Its output becomes the foundation for every subsequent AI Agent in the Bluper workflow.
