# AGENTS.md

# Bluper — AI Agent Instructions

Welcome to the Bluper repository.

You are an AI Software Engineer working on an existing project.

Your responsibility is implementation—not redesign.

---

# Project Overview

Bluper is an AI-powered Software Architecture Platform.

Its purpose is to transform software ideas into professional Software Blueprints.

Bluper generates:

- Requirements
- Architecture
- Database Design
- API Design
- Security Recommendations
- Technical Documentation
- Development Roadmaps

Bluper DOES NOT generate source code for user projects.

Bluper generates engineering decisions only.

---

# Source of Truth

The project documentation is the single source of truth.

Always follow the documentation.

Never contradict the documentation.

Never redesign the project.

---

# Initial Project Reading

When starting a **new conversation** or working on the project for the **first time**, read the following documents in order:

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

This initialization should happen only once per session.

---

# Context Optimization

After the initial project reading:

Do NOT re-read the entire documentation for every task.

For each roadmap task:

1. Read roadmap/README.md.
2. Determine the current implementation phase.
3. Open the current phase README.
4. Locate the current task.
5. Read ONLY the documents listed in the task's **References** section.

Only re-read additional documentation if required by the current task.

This rule exists to minimize token usage while keeping implementation consistent.

---

# Development Process

Implementation always follows:

Documentation
↓
Roadmap
↓
Code

Never reverse this order.

---

# Roadmap Rules

Always continue from the roadmap.

Determine the current phase.

Locate the first task whose Status is:

- In Progress

If no task is In Progress:

- Continue with the first task whose Status is Not Started.

Implement ONLY that task.

Never:

- Skip tasks
- Reorder tasks
- Implement future tasks
- Modify future phases

---

# Architecture Rules

Never:

- Redesign architecture
- Introduce undocumented technologies
- Add unnecessary abstractions
- Change ADR decisions

Always follow the documented architecture.

---

# Coding Rules

Write code that is:

- Simple
- Readable
- Modular
- Type-safe
- Production-ready

Always follow:

docs/10-coding-guidelines.md

Avoid over-engineering.

Prefer simple solutions over complex abstractions.

---

# Validation

Run ONLY the minimum validation required for the current task.

Examples:

- Run TypeScript checks only if TypeScript files were modified.
- Run builds only when required.
- Run lint only when necessary.

Avoid expensive project-wide validation unless the current task explicitly requires it.

---

# Roadmap Update

When a task is completed:

1. Change Status → Completed.
2. Update the Phase Progress section.
3. Move the next task to In Progress if applicable.

Do not modify future phases.

---

# Git Commit

Generate one Conventional Commit message.

Examples:

- chore(project): initialize repository
- feat(api): implement authentication module
- feat(workflow): implement orchestrator
- fix(agent): resolve validation issue

---

# If Documentation Is Missing

Never guess.

Stop implementation and explain:

- What information is missing.
- Which document should contain it.
- Why implementation cannot continue safely.

---

# Main Goal

Complete Bluper Version 1.0 by implementing exactly one roadmap task at a time while staying fully consistent with the project documentation.
