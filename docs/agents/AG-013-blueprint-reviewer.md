# AG-013 — Blueprint Reviewer

| Field    | Value              |
| -------- | ------------------ |
| Agent ID | AG-013             |
| Name     | Blueprint Reviewer |
| Category | Validation         |
| Status   | Draft              |
| Owner    | Mohamed Shehata    |
| Version  | 1.0                |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Review Strategy
6. Validation Rules
7. Execution Logic
8. Retry Strategy
9. Dependencies
10. Failure Handling
11. Success Criteria
12. References

---

# 1. Purpose

The Blueprint Reviewer is responsible for validating the final Software Blueprint before it is delivered to the user.

Its goal is to ensure that every section is internally consistent, technically correct, complete, and aligned with all previous engineering decisions.

The reviewer never generates new engineering content.

Its responsibility is to validate, identify issues, and request targeted regeneration when necessary.

---

# 2. Responsibilities

The Blueprint Reviewer is responsible for:

- Reviewing the complete Software Blueprint.
- Detecting inconsistencies.
- Detecting contradictions.
- Detecting missing sections.
- Validating engineering decisions.
- Verifying document consistency.
- Requesting selective regeneration when necessary.
- Approving the final blueprint.

---

# 3. Inputs

The Blueprint Reviewer receives:

```json
{
  "blueprint": {},
  "executionContext": {}
}
```

### Input Description

| Field            | Required | Description                 |
| ---------------- | -------- | --------------------------- |
| blueprint        | Yes      | Complete Software Blueprint |
| executionContext | Yes      | Shared workflow context     |

---

# 4. Outputs

```json
{
  "status": "approved",
  "issues": [],
  "retryRequests": [],
  "summary": ""
}
```

Possible statuses:

- approved
- warning
- rejected

Each issue should include:

- ID
- Severity
- Section
- Description
- Responsible Agent

---

# 5. Review Strategy

The Blueprint Reviewer evaluates the blueprint using several validation categories.

## Completeness

Verify that all required blueprint sections exist.

Examples:

- Requirements
- Technology Stack
- Architecture
- Modules
- Database
- APIs
- Security
- Roadmap

---

## Consistency

Ensure there are no conflicting engineering decisions.

Examples:

- Architecture matches modules.
- Database matches requirements.
- APIs match business modules.
- Security matches API requirements.
- Technology Stack matches architecture.

---

## Traceability

Verify that every engineering decision can be traced back to approved requirements.

No recommendation should appear without justification.

---

## Engineering Quality

Review:

- Clarity
- Maintainability
- Scalability
- Simplicity
- Professional engineering practices

---

# 6. Validation Rules

The Blueprint Reviewer must never:

- Modify approved outputs.
- Generate new architecture.
- Generate source code.
- Rewrite engineering decisions.

The reviewer only evaluates existing outputs.

---

# 7. Execution Logic

Step 1

Read complete blueprint.

↓

Step 2

Validate completeness.

↓

Step 3

Validate consistency.

↓

Step 4

Validate engineering quality.

↓

Step 5

Identify affected sections.

↓

Step 6

Determine responsible agents.

↓

Step 7

Generate retry requests if needed.

↓

Step 8

Approve or reject the blueprint.

---

# 8. Retry Strategy

The Blueprint Reviewer should minimize regeneration.

Only the agent responsible for an invalid section should be re-executed.

Example:

Database inconsistency

↓

Retry:

AG-009 Database Designer

NOT

Restart the entire workflow.

---

If multiple related sections are affected, the reviewer may request retries for multiple agents in dependency order.

Example:

Database affects API

Retry Order:

1. AG-009 Database Designer
2. AG-010 API Designer
3. AG-011 Security Designer
4. AG-012 Documentation Generator

---

Maximum Retry Policy

Each agent may be retried only once during a workflow execution.

If validation still fails after the retry:

```json
{
  "status": "rejected",
  "reason": "Maximum retry limit exceeded."
}
```

The workflow should terminate and return the validation report to the user.

---

# 9. Dependencies

Previous Agent

- AG-012 Documentation Generator

---

Next Agent

None

This is the final agent in the workflow.

---

# 10. Failure Handling

If the blueprint cannot be validated:

```json
{
  "status": "warning",
  "issues": [
    {
      "agent": "AG-009",
      "severity": "high",
      "reason": "Database relationships are inconsistent."
    }
  ]
}
```

The Workflow Orchestrator should execute only the requested retries.

---

# 11. Success Criteria

The Blueprint Reviewer succeeds when:

- All required sections are present.
- No inconsistencies exist.
- Engineering decisions are traceable.
- The blueprint is internally consistent.
- Retry requests are minimized.
- The blueprint is approved for delivery.

---

# 12. References

Related Documents

- 01-project-specification.md
- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
- ADR-006

---

# Notes

The Blueprint Reviewer is the final quality gate of Bluper.

It does not participate in architecture generation.

It ensures that the Software Blueprint satisfies the project's engineering standards before being delivered to the user.

Its selective retry strategy minimizes AI cost, reduces token usage, and avoids unnecessary regeneration of unaffected sections.
