# AG-002 — Question Generator

| Field    | Value              |
| -------- | ------------------ |
| Agent ID | AG-002             |
| Name     | Question Generator |
| Category | Analysis           |
| Status   | Draft              |
| Owner    | Mohamed Shehata    |
| Version  | 1.0                |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Execution Logic
6. Question Generation Strategy
7. Validation Rules
8. Dependencies
9. Failure Handling
10. Success Criteria
11. References

---

# 1. Purpose

The Question Generator is responsible for collecting only the missing information required to produce an accurate Software Blueprint.

It does not ask unnecessary questions.

Whenever enough information already exists, this Agent is skipped entirely.

The objective is to minimize user interaction while maximizing architectural accuracy.

---

# 2. Responsibilities

The Question Generator is responsible for:

- Reading the missing information detected by the Prompt Analyzer.
- Determining whether user interaction is required.
- Generating only essential questions.
- Presenting questions as multiple-choice whenever possible.
- Avoiding duplicate questions.
- Organizing questions in a logical order.
- Returning structured answers for the next Agents.

---

# 3. Inputs

The Question Generator receives:

```json
{
  "projectSummary": {},
  "missingInformation": [],
  "executionContext": {}
}
```

### Input Description

| Field              | Required | Description                    |
| ------------------ | -------- | ------------------------------ |
| projectSummary     | Yes      | Structured summary from AG-001 |
| missingInformation | Yes      | List of unknown information    |
| executionContext   | Yes      | Current workflow context       |

---

# 4. Outputs

```json
{
  "questions": [],
  "questionRequired": true
}
```

After the user answers:

```json
{
  "answers": {}
}
```

---

### Output Description

Questions should contain:

- Question ID
- Question text
- Answer type
- Available options
- Required flag

Example:

```json
{
  "id": "Q-001",
  "question": "Who are the target users?",
  "type": "single_choice",
  "required": true,
  "options": ["Public Users", "Administrators", "Businesses", "Developers"]
}
```

---

# 5. Execution Logic

The Question Generator follows the workflow below.

Step 1

Read missing information.

↓

Step 2

Remove information already available.

↓

Step 3

Prioritize unanswered items.

↓

Step 4

Generate minimal questions.

↓

Step 5

Convert questions into structured multiple-choice format whenever possible.

↓

Step 6

Return structured question list.

---

# 6. Question Generation Strategy

The Question Generator follows these principles.

## Ask Only When Necessary

Questions should only be generated when the required information cannot be inferred safely.

---

## Minimize User Effort

The total number of questions should be as small as possible.

Multiple related questions should be combined when appropriate.

---

## Prefer Multiple Choice

Whenever possible, questions should provide predefined options instead of requiring free-text input.

This ensures:

- Faster completion
- More consistent answers
- Easier downstream processing

---

## Smart Defaults

If the project description clearly specifies a value, the user should not be asked again.

Example:

User says:

"I want to build a SaaS."

Do NOT ask:

"What type of project is this?"

---

## Logical Ordering

Questions should appear in a natural engineering order.

Example:

1. Project Goal
2. Users
3. Platform
4. Scale
5. Technology Preferences
6. Growth Expectations

---

# 7. Validation Rules

The Question Generator must never:

- Ask about information already provided.
- Ask duplicate questions.
- Generate subjective questions.
- Ask implementation details.
- Ask architecture-specific questions.

Questions must focus only on missing project requirements.

---

# 8. Dependencies

Previous Agent

- AG-001 Prompt Analyzer

---

Next Agent

- AG-003 Requirements Generator

---

# 9. Failure Handling

If no questions are required:

Return:

```json
{
  "questionRequired": false,
  "questions": []
}
```

If question generation fails:

```json
{
  "status": "failed",
  "reason": "Unable to generate clarification questions."
}
```

---

# 10. Success Criteria

The Question Generator succeeds when:

- Every essential unknown is addressed.
- No unnecessary questions are generated.
- Questions are easy to answer.
- Most questions use multiple-choice options.
- The returned structure is valid JSON.

---

# 11. References

Related Documents

- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
- ADR-005

---

# Notes

The Question Generator exists to reduce ambiguity, not to interview the user.

Its effectiveness is measured by asking the fewest possible questions while collecting enough information for the remaining AI Agents to generate an accurate and complete Software Blueprint.
