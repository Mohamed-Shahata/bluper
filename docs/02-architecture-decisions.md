# Bluper — Architecture Decisions

| Field        | Value                    |
| ------------ | ------------------------ |
| Document     | Architecture Decisions   |
| Project      | Bluper                   |
| Version      | 1.0                      |
| Status       | Draft                    |
| Owner        | Mohamed Shehata          |
| Type         | Software Design Document |
| Last Updated | 2026-08-01               |

---

# Table of Contents

1. Purpose
2. Decision Index
3. Decision Status
4. References

---

# 1. Purpose

This document records all major architectural decisions made throughout the design of Bluper.

Its purpose is to ensure that every important engineering decision has a documented rationale.

Every architecture-related document must reference the appropriate Architecture Decision Record (ADR).

No architectural decision should exist without documentation.

---

# 2. Decision Index

| ID      | Title                           | Status   |
| ------- | ------------------------------- | -------- |
| ADR-001 | Modular Monolith Architecture   | Accepted |
| ADR-002 | Workflow Orchestrator           | Accepted |
| ADR-003 | Shared Execution Context        | Accepted |
| ADR-004 | JSON-based Agent Communication  | Accepted |
| ADR-005 | Specialized AI Agents           | Accepted |
| ADR-006 | Reviewer Retry Strategy         | Accepted |
| ADR-007 | AI Provider Strategy            | Accepted |
| ADR-008 | Technology Stack Recommendation | Accepted |
| ADR-009 | Guided Wizard Strategy          | Accepted |
| ADR-010 | Stateless AI Agents             | Accepted |

---

# 3. Decision Status

The following statuses are used throughout the project.

| Status     | Description                                      |
| ---------- | ------------------------------------------------ |
| Proposed   | The decision is under discussion.                |
| Accepted   | The decision has been approved.                  |
| Deprecated | The decision is no longer recommended.           |
| Replaced   | The decision has been superseded by another ADR. |

---

# 4. References

The following documents depend on these architectural decisions.

| Document                    | Dependency                                  |
| --------------------------- | ------------------------------------------- |
| 01-project-specification.md | All ADRs                                    |
| 03-system-architecture.md   | ADR-001, ADR-002, ADR-003                   |
| 04-ai-workflow.md           | ADR-002, ADR-003, ADR-004, ADR-006          |
| 05-database-design.md       | ADR-001                                     |
| 06-api-specification.md     | ADR-001, ADR-004                            |
| 07-backend-architecture.md  | ADR-001, ADR-002                            |
| 08-frontend-architecture.md | ADR-001                                     |
| 09-ai-agents.md             | ADR-003, ADR-004, ADR-005, ADR-006, ADR-010 |

---

# Notes

Each Architecture Decision Record (ADR) is stored separately under the `/docs/ADR/` directory.

Every ADR must contain:

- Context
- Problem Statement
- Decision
- Alternatives Considered
- Consequences
- Trade-offs
- References

Future architectural changes must be introduced by creating a new ADR instead of modifying historical decisions.
