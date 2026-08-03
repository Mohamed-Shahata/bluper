# Bluper — Coding Guidelines

| Field        | Value                |
| ------------ | -------------------- |
| Document     | Coding Guidelines    |
| Project      | Bluper               |
| Version      | 1.0                  |
| Status       | Draft                |
| Owner        | Mohamed Shehata      |
| Type         | Engineering Standard |
| Last Updated | YYYY-MM-DD           |

---

# Table of Contents

1. Purpose
2. General Principles
3. Project Structure
4. Naming Conventions
5. TypeScript Standards
6. Backend Standards
7. Frontend Standards
8. AI Workflow Standards
9. Error Handling
10. Logging
11. Validation
12. Documentation
13. Git Workflow
14. Code Review Checklist
15. References

---

# 1. Purpose

This document defines the engineering standards used throughout the Bluper project.

Its purpose is to ensure that every contributor writes consistent, maintainable, and high-quality code.

These guidelines apply to all project components, including:

- Backend
- Frontend
- AI Workflow
- Shared Libraries
- Infrastructure

---

# 2. General Principles

Every implementation should prioritize:

- Readability
- Simplicity
- Maintainability
- Scalability
- Consistency

Always prefer simple solutions over unnecessary abstractions.

Code should be self-explanatory whenever possible.

Avoid premature optimization.

---

# 3. Project Structure

Every feature should follow a modular structure.

Business logic must remain separated from infrastructure concerns.

Suggested top-level structure:

- apps/
- packages/
- docs/
- scripts/
- infrastructure/

Every module should have a single responsibility.

---

# 4. Naming Conventions

Use descriptive names.

Examples:

Classes

- UserService
- BlueprintGenerator

Interfaces

- IUserRepository

Types

- BlueprintResult

Enums

- AgentStatus

Constants

- MAX_RETRY_COUNT

Variables

- camelCase

Functions

- camelCase

Files

- kebab-case

Folders

- kebab-case

Environment variables

- UPPER_SNAKE_CASE

Avoid abbreviations unless universally understood.

---

# 5. TypeScript Standards

Always enable:

- strict mode
- noImplicitAny
- strictNullChecks

Prefer:

- interfaces for contracts
- readonly where applicable
- explicit return types for public methods

Avoid:

- any
- unnecessary type assertions
- duplicated types

Use Zod for runtime validation.

---

# 6. Backend Standards

The backend follows NestJS best practices.

Each module should contain:

- Controller
- Service
- DTOs
- Validation
- Repository (when applicable)

Business logic must never exist inside controllers.

Dependency Injection should always be used.

Follow SOLID principles.

---

# 7. Frontend Standards

The frontend follows Next.js App Router architecture.

Prefer:

- Server Components
- Feature-based organization
- Reusable UI components

Avoid unnecessary client-side rendering.

Separate UI from business logic.

Use React Hook Form and Zod for forms.

---

# 8. AI Workflow Standards

Every AI Agent must:

- Have one responsibility.
- Receive Runtime Context.
- Return structured JSON.
- Never modify Shared Execution Context.
- Never call another Agent directly.

Only the Workflow Orchestrator coordinates execution.

Prompts must remain deterministic.

---

# 9. Error Handling

Errors should be categorized.

Examples:

- Validation Error
- Business Error
- AI Provider Error
- Infrastructure Error
- Unexpected Error

Never expose internal implementation details to users.

Use structured error responses.

---

# 10. Logging

Every important operation should be logged.

Log:

- Workflow execution
- Agent execution
- Retry events
- Validation failures
- AI provider errors

Never log:

- Secrets
- API Keys
- Sensitive user data

---

# 11. Validation

Validate:

- API input
- AI outputs
- Environment variables
- Configuration
- Database input

Never trust external data.

All AI outputs should be validated before entering the Shared Execution Context.

---

# 12. Documentation

Public modules should include documentation.

Architecture changes require a new ADR.

Business decisions belong in Project Specification.

Workflow changes belong in AI Workflow documentation.

Never leave undocumented architectural changes.

---

# 13. Git Workflow

Use feature branches.

Example:

feature/workflow-engine

feature/database-designer

fix/api-validation

docs/architecture

Commit messages should follow Conventional Commits.

Examples:

feat:

fix:

refactor:

docs:

test:

chore:

---

# 14. Code Review Checklist

Before merging:

- Code compiles successfully.
- Tests pass.
- Naming is consistent.
- Documentation updated if required.
- No duplicated logic.
- No unnecessary abstractions.
- SOLID principles respected.
- Error handling implemented.
- Logging added where necessary.

---

# 15. References

Related Documents

- 03-architecture-recommendation-strategy.md
- 04-ai-workflow.md
- 07-backend-architecture.md
- 08-frontend-architecture.md

Related ADRs

- ADR-001
- ADR-002
- ADR-003
- ADR-005
