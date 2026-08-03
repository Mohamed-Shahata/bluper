# AI_RULES.md

# Bluper — AI Development Rules

This document defines the mandatory rules that every AI assistant must follow while working on this repository.

These rules override any default behavior.

---

# 1. Source of Truth

The project documentation is the single source of truth.

Always read the documentation before writing code.

Never contradict the documentation.

Never redesign the project.

---

# 2. Documentation Order

Always read the following documents before implementing anything.

1. docs/01-project-specification.md
2. docs/02-architecture-decisions.md
3. docs/03-architecture-recommendation-strategy.md
4. docs/04-ai-workflow.md
5. docs/05-database-design.md
6. docs/06-api-specification.md
7. docs/07-backend-architecture.md
8. docs/08-frontend-architecture.md
9. docs/09-ai-agents.md
10. docs/10-coding-guidelines.md
11. docs/11-development-roadmap.md

---

# 3. Roadmap

Implementation must always follow the roadmap.

Never skip phases.

Never skip tasks.

Never change task order.

Never implement future tasks.

Always complete exactly one task at a time.

---

# 4. Architecture

Never redesign the architecture.

Never introduce new patterns.

Never replace documented technologies.

Never add unnecessary abstractions.

Only implement what is already documented.

---

# 5. Coding Style

Follow the Coding Guidelines.

Keep the implementation:

- Simple
- Readable
- Modular
- Consistent

Avoid unnecessary complexity.

---

# 6. Scope

Implement only the current task.

Do not modify unrelated modules.

Do not implement features from future tasks.

---

# 7. Validation

Before completing any task verify:

- Project builds successfully.
- TypeScript has no errors.
- Lint passes.
- Acceptance Criteria are satisfied.

---

# 8. Roadmap Update

When a task is completed:

- Change its Status to Completed.
- Update the Phase Progress section.
- Move the next task to In Progress if applicable.

Never modify future phases.

---

# 9. Git Commit

Always generate a Conventional Commit message.

Examples

feat(api): implement authentication module

feat(agent): implement requirement analyzer

chore(project): initialize repository

fix(workflow): resolve execution context bug

---

# 10. If Documentation Is Missing

Never guess.

Never invent behavior.

Stop implementation and clearly explain what documentation is missing.

---

# 11. Priority

Documentation

↓

Roadmap

↓

Code

The code must always follow the documentation—not the opposite.
