# Bluper — AI Agents

| Field        | Value                    |
| ------------ | ------------------------ |
| Document     | AI Agents                |
| Project      | Bluper                   |
| Version      | 1.0                      |
| Status       | Draft                    |
| Owner        | Mohamed Shehata          |
| Type         | Software Design Document |
| Last Updated | YYYY-MM-DD               |

---

# Table of Contents

1. Purpose
2. AI Philosophy
3. Multi-Agent Architecture
4. AI Design Principles
5. Shared Execution Context
6. Agent Communication Contract
7. Workflow Overview
8. Agent Index
9. Retry Strategy
10. Context Management
11. Error Handling
12. Future Extensibility
13. References

---

# 1. Purpose

This document defines the overall AI architecture used by Bluper.

Instead of documenting each AI Agent here, this document establishes the common rules, communication contracts, execution model, and workflow shared by every Agent.

Each individual Agent is documented separately under the `/docs/agents/` directory.

References:

- ADR-002
- ADR-003
- ADR-004
- ADR-005
- ADR-006

---

# 2. AI Philosophy

Bluper is built around a Multi-Agent Architecture.

Rather than relying on a single large AI prompt, the platform decomposes software architecture generation into specialized engineering tasks.

Each task is executed by an independent AI Agent with a clearly defined responsibility.

The objective is to produce engineering decisions that are:

- Modular
- Predictable
- Explainable
- Maintainable
- Consistent

Every Agent focuses on solving one problem only.

---

# 3. Multi-Agent Architecture

The AI system consists of three major layers.

## Workflow Layer

Responsible for controlling execution.

Managed by:

- Workflow Orchestrator

Responsibilities:

- Execute Agents
- Build execution context
- Handle retries
- Aggregate outputs

---

## Intelligence Layer

Contains all specialized AI Agents.

Each Agent performs one engineering task.

Agents never communicate directly.

---

## Validation Layer

Responsible for validating generated outputs before they become part of the final Software Blueprint.

Validation includes:

- Requirements validation
- Consistency validation
- Retry requests
- Blueprint verification

---

# 4. AI Design Principles

Every AI Agent must follow the same engineering principles.

## Single Responsibility

Every Agent performs exactly one engineering task.

---

## Stateless Execution

Agents never store memory.

All required information is provided through the Execution Context.

---

## Structured Communication

All communication uses structured JSON.

Agents never exchange free-form text.

---

## Deterministic Behavior

Identical inputs should produce highly consistent outputs whenever possible.

---

## Explainable Decisions

Architectural recommendations should always include engineering reasoning.

---

## Validation First

Generated outputs are considered temporary until validated by the validation workflow.

---

# 5. Shared Execution Context

The Execution Context acts as the shared memory of the workflow.

Agents never communicate directly.

Instead, every Agent reads from and writes to the shared Execution Context.

The Workflow Orchestrator is the only component allowed to modify the Execution Context.

---

## Stored Information

The Execution Context may contain:

- Project Information
- User Answers
- Functional Requirements
- Non-Functional Requirements
- Business Rules
- Constraints
- Architecture Decisions
- Technology Recommendations
- Generated Blueprint Sections
- Validation Reports

---

# 6. Agent Communication Contract

Every AI Agent receives structured input.

Example:

```json
{
  "project": {},
  "requirements": {},
  "answers": {},
  "executionContext": {}
}
```

Every Agent returns structured output.

```json
{
  "status": "success",
  "data": {},
  "warnings": [],
  "recommendations": []
}
```

Agents must never modify another Agent's output directly.

Only the Workflow Orchestrator may update the shared Execution Context.

---

# 7. Workflow Overview

The high-level workflow is shown below.

User

↓

Prompt Analyzer

↓

Question Generator (if required)

↓

Requirements Generator

↓

Requirements Validator

↓

Technology Recommendation

↓

Architecture Decision

↓

Design Pattern Recommendation

↓

Module Designer

↓

Database Designer

↓

API Designer

↓

Security Advisor

↓

Documentation Generator

↓

Blueprint Generator

↓

Consistency Reviewer

↓

Final Software Blueprint

---

# 8. Agent Index

| ID     | Agent                         | Responsibility                          |
| ------ | ----------------------------- | --------------------------------------- |
| AG-001 | Prompt Analyzer               | Analyze the initial project description |
| AG-002 | Question Generator            | Generate missing requirement questions  |
| AG-003 | Requirements Generator        | Produce complete software requirements  |
| AG-004 | Requirements Validator        | Validate requirements quality           |
| AG-005 | Technology Recommendation     | Recommend suitable technologies         |
| AG-006 | Architecture Decision         | Select software architecture            |
| AG-007 | Design Pattern Recommendation | Recommend design patterns               |
| AG-008 | Module Designer               | Design system modules                   |
| AG-009 | Database Designer             | Generate database design                |
| AG-010 | API Designer                  | Generate API specification              |
| AG-011 | Security Advisor              | Produce security recommendations        |
| AG-012 | Documentation Generator       | Generate engineering documentation      |
| AG-013 | Blueprint Generator           | Assemble the final Software Blueprint   |
| AG-014 | Consistency Reviewer          | Validate the entire blueprint           |

Detailed specifications for every Agent are located under:

```

/docs/agents/

```

---

# 9. Retry Strategy

Only validation Agents are allowed to request regeneration.

If inconsistencies are detected:

1. The affected section is identified.

2. The responsible Agent is selected.

3. Only the affected Agent is executed again.

The entire workflow must never restart because of a single inconsistent output.

---

# 10. Context Management

The Workflow Orchestrator manages the lifecycle of the Execution Context.

Responsibilities include:

- Building context
- Updating context
- Passing context
- Version consistency
- Preventing conflicting updates

Agents cannot directly access previous executions outside the current Execution Context.

---

# 11. Error Handling

Each Agent must return a structured execution status.

Possible values include:

- Success
- Warning
- Retry Required
- Failed

Errors should include:

- Error Type
- Error Description
- Suggested Resolution

The Workflow Orchestrator determines whether execution should continue or retry.

---

# 12. Future Extensibility

The architecture is designed to support future AI capabilities without changing existing Agents.

Examples include:

- Additional Engineering Agents
- Alternative AI Providers
- Improved Validation Agents
- Domain-Specific Agents
- Architecture Quality Scoring
- Requirement Traceability
- UML Generation

New Agents should be added by creating a dedicated document inside:

```

/docs/agents/

```

The Agent Index in this document should then be updated accordingly.

---

# 13. References

Related Documents

- 01-project-specification.md
- 02-architecture-decisions.md
- 03-architecture-recommendation-strategy.md
- 04-ai-workflow.md

Related ADRs

- ADR-002
- ADR-003
- ADR-004
- ADR-005
- ADR-006

---

# Notes

This document defines the common architecture shared by all AI Agents.

Implementation details, prompts, responsibilities, inputs, outputs, validation rules, and dependencies for each Agent are documented separately under the `/docs/agents/` directory.

Any future Agent added to Bluper must follow the communication contract and engineering principles defined in this document.
