# Bluper — AI Workflow

| Field        | Value                    |
| ------------ | ------------------------ |
| Document     | AI Workflow              |
| Project      | Bluper                   |
| Version      | 1.0                      |
| Status       | Draft                    |
| Owner        | Mohamed Shehata          |
| Type         | Software Design Document |
| Last Updated | YYYY-MM-DD               |

---

# Table of Contents

1. Purpose
2. Workflow Overview
3. Workflow Principles
4. Complete AI Pipeline
5. Execution Context
6. AI Agents Overview
7. Prompt Analyzer Agent
8. Requirements Agent
9. Consistency Agent
10. Question Generator Agent
11. Execution Context Builder
12. Architecture Agent
13. Module Design Agent
14. Technology Recommendation Agent
15. Database Design Agent
16. API Design Agent
17. Security Agent
18. Documentation Agent
19. Blueprint Aggregator
20. Reviewer Agent
21. Agent Communication
22. Review Cycle
23. Token Optimization Strategy
24. Error Handling
25. References

---

# 1. Purpose

This document defines the complete AI execution workflow used by Bluper.

Rather than relying on a single prompt, Bluper decomposes software architecture generation into multiple specialized AI Agents.

Each AI Agent owns a single engineering responsibility and collaborates through a centralized Workflow Orchestrator.

The workflow is designed to:

- Produce professional software blueprints.
- Maintain engineering consistency.
- Reduce AI hallucinations.
- Minimize token consumption.
- Improve maintainability.
- Support future extensibility.

Every architectural decision, recommendation, and document produced by Bluper follows the workflow defined in this specification.

Related Architecture Decisions:

- ADR-002
- ADR-003
- ADR-004
- ADR-006

---

# 2. Workflow Overview

Bluper executes a structured Multi-Agent Workflow.

Instead of asking one AI model to perform every task, the workflow divides the software engineering process into independent responsibilities.

Each AI Agent specializes in one specific task.

The Workflow Orchestrator coordinates execution by:

- Executing agents.
- Passing execution context.
- Tracking dependencies.
- Collecting outputs.
- Triggering retries.
- Producing the final Software Blueprint.

No AI Agent communicates directly with another AI Agent.

All communication passes through the Execution Context managed by the Workflow Orchestrator.

This architecture provides:

- Predictable execution.
- High maintainability.
- Easier debugging.
- Lower AI cost.
- Better engineering quality.

---

# 3. Workflow Principles

WF-001

Every AI Agent must own exactly one engineering responsibility.

---

WF-002

Requirements must always be generated before any architectural decision.

---

WF-003

Requirements must be validated before they are consumed by downstream agents.

---

WF-004

Agents are stateless.

No execution memory is preserved between requests.

---

WF-005

Agents communicate only through the Execution Context.

Direct communication is prohibited.

---

WF-006

Every AI Agent must return structured JSON.

Natural language is reserved only for the final blueprint presented to the user.

---

WF-007

Previously validated outputs must never be regenerated unless explicitly requested by the Reviewer Agent.

---

WF-008

Only failed or inconsistent sections may be regenerated.

---

WF-009

The Workflow Orchestrator is responsible for execution only.

Business logic must remain inside specialized AI Agents.

---

WF-010

Every engineering decision must be traceable to user requirements.

---

# 4. Complete AI Pipeline

The complete workflow executes in the following order.

```text
User Prompt
      │
      ▼
Prompt Analyzer Agent
      │
      ▼
Requirements Agent (Draft)
      │
      ▼
Consistency Agent
      │
      ▼
Question Generator Agent
      │
      ▼
Guided Wizard (Optional)
      │
      ▼
Requirements Agent (Finalize)
      │
      ▼
Execution Context Builder
      │
      ▼
Architecture Agent
      │
      ▼
Local Review
      │
      ▼
Module Design Agent
      │
      ▼
Local Review
      │
      ▼
Technology Recommendation Agent
      │
      ▼
Local Review
      │
      ▼
Database Design Agent
      │
      ▼
Local Review
      │
      ▼
API Design Agent
      │
      ▼
Local Review
      │
      ▼
Security Agent
      │
      ▼
Local Review
      │
      ▼
Documentation Agent
      │
      ▼
Blueprint Aggregator
      │
      ▼
Global Reviewer Agent
      │
      ▼
Final Software Blueprint
```

---

## Pipeline Description

### Step 1 — Prompt Analyzer

Analyzes the user's initial prompt.

Detects:

- Missing information.
- Ambiguous statements.
- Conflicting objectives.
- Overall prompt quality.

---

### Step 2 — Requirements Agent (Draft)

Transforms the project idea into an initial software requirements document.

The generated requirements are still considered incomplete until additional information is collected.

---

### Step 3 — Consistency Agent

Validates the draft requirements.

Detects:

- Contradictions.
- Unrealistic expectations.
- Conflicting business rules.
- Impossible technical combinations.

---

### Step 4 — Question Generator Agent

Generates only the minimum number of questions required to resolve missing information.

Questions should preferably be multiple-choice.

---

### Step 5 — Guided Wizard

Executed only if required.

Collects answers from the user.

---

### Step 6 — Requirements Agent (Finalize)

Updates the requirements using the user's answers.

The finalized requirements become the single source of truth for the remainder of the workflow.

---

### Step 7 — Execution Context Builder

Builds the shared Execution Context.

Every downstream AI Agent receives this context.

No agent is allowed to modify finalized requirements.

# 5. Execution Context

The Execution Context is the central data object shared across the entire AI workflow.

It acts as the single source of truth for every AI Agent after the requirements have been finalized.

Instead of passing raw prompts between agents, Bluper passes a structured Execution Context that contains validated project information.

The Execution Context is immutable.

AI Agents may read from it but cannot modify existing sections.

Only the Workflow Orchestrator may append new outputs after each successful execution.

Execution Context ID

CTX-001

---

## Execution Context Structure

The Execution Context contains the following sections.

### Project Information

- Project Name
- Project Description
- Business Domain
- Project Goals

---

### User Preferences

- Preferred Technology Stack (Optional)
- Scalability Expectations
- Development Priority
- Budget Constraints
- Deployment Preferences

---

### Final Requirements

Generated by the Requirements Agent.

Includes:

- Functional Requirements
- Non-Functional Requirements
- User Roles
- Business Rules
- Constraints
- Assumptions

---

### AI Outputs

Generated progressively during execution.

Examples:

- Architecture
- Modules
- Technology Recommendations
- Database Design
- API Design
- Security Strategy
- Documentation

---

### Workflow Metadata

Contains execution information.

Examples:

- Execution ID
- Timestamp
- Workflow Version
- Agent Status
- Retry Count

---

## Benefits

Using a centralized Execution Context provides:

- Predictable execution.
- Consistent information.
- Lower token consumption.
- Easier debugging.
- Independent AI Agents.
- Better maintainability.

---

# 6. AI Agents Overview

Bluper uses multiple specialized AI Agents.

Each agent owns one engineering responsibility.

No agent performs work outside its defined scope.

| ID     | Agent                           | Responsibility                                                                   |
| ------ | ------------------------------- | -------------------------------------------------------------------------------- |
| AG-001 | Prompt Analyzer Agent           | Analyze the initial user prompt and detect missing or ambiguous information.     |
| AG-002 | Requirements Agent              | Generate and finalize software requirements.                                     |
| AG-003 | Consistency Agent               | Detect contradictions and validate engineering consistency.                      |
| AG-004 | Question Generator Agent        | Generate only the minimum required clarification questions.                      |
| AG-005 | Architecture Agent              | Design the overall software architecture.                                        |
| AG-006 | Module Design Agent             | Define modules, responsibilities, and boundaries.                                |
| AG-007 | Technology Recommendation Agent | Recommend or validate the technology stack.                                      |
| AG-008 | Database Design Agent           | Design entities and relationships.                                               |
| AG-009 | API Design Agent                | Generate API specifications.                                                     |
| AG-010 | Security Agent                  | Produce security recommendations.                                                |
| AG-011 | Documentation Agent             | Generate engineering documentation.                                              |
| AG-012 | Blueprint Aggregator            | Merge every output into one Software Blueprint.                                  |
| AG-013 | Global Reviewer Agent           | Validate the complete blueprint and request partial regeneration when necessary. |

---

# 7. Prompt Analyzer Agent

ID

AG-001

---

## Purpose

The Prompt Analyzer is the entry point of the AI workflow.

Its responsibility is to understand the user's project description before any engineering analysis begins.

It does not make architectural decisions.

It only analyzes the quality and completeness of the provided prompt.

---

## Responsibilities

The Prompt Analyzer is responsible for:

- Reading the user's prompt.
- Detecting missing information.
- Detecting vague requirements.
- Identifying business domain.
- Identifying project type.
- Estimating prompt completeness.

---

## Output

The Prompt Analyzer produces:

- Prompt Summary
- Missing Information Report
- Project Category
- Estimated Complexity
- Confidence Score

---

## Restrictions

The Prompt Analyzer must never:

- Recommend technologies.
- Generate architecture.
- Infer unsupported requirements.
- Make engineering assumptions.

---

# 8. Requirements Agent

ID

AG-002

---

## Purpose

The Requirements Agent transforms the user's project idea into structured engineering requirements.

It is the only AI Agent allowed to create or modify project requirements.

The Requirements Agent executes twice during the workflow.

---

## Phase 1 — Draft Requirements

After receiving the Prompt Analysis, the agent produces an initial requirements document.

The draft includes every requirement that can be confidently extracted from the user's prompt.

Missing information is intentionally left unresolved.

---

## Phase 2 — Final Requirements

After the Guided Wizard collects additional information, the Requirements Agent executes again.

During this phase it merges the user's answers into the draft requirements.

The resulting document becomes the final requirements specification used by every downstream AI Agent.

---

## Responsibilities

The Requirements Agent generates:

- Functional Requirements
- Non-Functional Requirements
- Business Goals
- User Roles
- Business Rules
- Constraints
- Assumptions

---

## Output

Outputs include:

- Requirements Document
- Missing Information Report
- Requirement IDs
- Requirement Priorities

The finalized requirements become immutable for the remainder of the workflow.

# 9. Consistency Agent

ID

AG-003

---

## Purpose

The Consistency Agent validates the draft requirements before they are used by the rest of the workflow.

Its goal is to ensure that every downstream AI Agent works with a logically consistent set of requirements.

The Consistency Agent never creates new requirements.

It only validates, reports conflicts, and identifies assumptions that require clarification.

---

## Responsibilities

The Consistency Agent is responsible for:

- Detecting contradictory requirements.
- Detecting conflicting business goals.
- Detecting unrealistic scalability expectations.
- Detecting incompatible technology requests.
- Detecting impossible architectural constraints.
- Detecting duplicated requirements.
- Detecting missing dependencies.

---

## Validation Categories

The agent validates:

### Business Consistency

Examples:

- Small internal tool vs enterprise-scale architecture.
- MVP vs large distributed system.

---

### Functional Consistency

Examples:

- Anonymous users and mandatory authentication.
- Offline-first system without local storage.

---

### Technical Consistency

Examples:

- Serverless architecture with long-running background workers.
- SQL-only requirements with NoSQL constraints.

---

### Scalability Consistency

Examples:

- 50 users with Kubernetes microservices.
- Millions of users with SQLite.

---

## Output

The Consistency Agent generates:

- Validation Report
- Conflict Report
- Warning List
- Missing Dependencies
- Clarification Requests

---

## Restrictions

The Consistency Agent must never:

- Modify requirements.
- Recommend technologies.
- Change architecture.
- Create assumptions.

---

# 10. Question Generator Agent

ID

AG-004

---

## Purpose

The Question Generator Agent minimizes user effort by asking only the questions required to complete the project specification.

Questions are generated only when critical information is missing.

---

## Responsibilities

The Question Generator Agent:

- Reads the Missing Information Report.
- Reads the Validation Report.
- Generates clarification questions.
- Prioritizes questions.
- Converts questions into multiple-choice options whenever possible.

---

## Question Design Principles

Questions should:

- Be short.
- Be clear.
- Ask only one thing.
- Prefer predefined options.
- Require minimum typing.
- Avoid technical terminology unless necessary.

---

## Question Priority

Questions are generated using the following priority.

Priority 1

Business Goals

Priority 2

Project Scope

Priority 3

Expected Scalability

Priority 4

Architecture Flexibility

Priority 5

Technology Preferences

Priority 6

Deployment Preferences

Priority 7

Security Requirements

Priority 8

Performance Requirements

Lower-priority questions are omitted whenever possible.

---

## Output

The generated JSON contains:

- Question ID
- Question
- Options
- Default Value
- Required Flag
- Related Requirement

---

## Example

Question

How important is future scalability?

Options

- Prototype only
- Small Business
- Medium Scale
- Enterprise Scale

Mapped Requirement

Scalability

---

## Restrictions

The Question Generator Agent must never:

- Ask questions already answered by the user.
- Ask duplicate questions.
- Generate unnecessary questions.
- Modify project requirements.

---

# 11. Execution Context Builder

The Execution Context Builder is managed by the Workflow Orchestrator.

It executes after the Requirements Agent produces the final validated requirements.

---

## Responsibilities

The Execution Context Builder:

- Collects validated requirements.
- Collects user preferences.
- Collects workflow metadata.
- Creates the immutable Execution Context.
- Distributes it to downstream AI Agents.

---

## Output

Produces:

- Execution Context
- Workflow Metadata
- Shared Project State

---

# 12. Architecture Agent

ID

AG-005

---

## Purpose

The Architecture Agent designs the overall software architecture of the system.

It selects the most appropriate architecture based on the validated requirements rather than using a predefined template.

---

## Responsibilities

The Architecture Agent determines:

- Overall architecture style.
- System layers.
- Module boundaries.
- Scalability strategy.
- Maintainability strategy.
- Future extensibility.

---

## Decision Factors

Architecture decisions are based on:

- Functional Requirements
- Non-Functional Requirements
- Scalability
- Budget
- Timeline
- Future Expansion Plans

---

## Architecture Strategy

If the user prioritizes rapid delivery, the agent may recommend a simpler architecture.

If the user prioritizes scalability and long-term maintenance, the agent may recommend more advanced architectural patterns.

The architecture must always fit the project rather than forcing the project to fit the architecture.

---

## Engineering Principles

The Architecture Agent should apply:

- SOLID Principles
- Separation of Concerns
- High Cohesion
- Low Coupling
- Dependency Inversion
- Appropriate Design Patterns when beneficial

Design Patterns should be introduced only when they solve a real engineering problem.

Pattern overuse must be avoided.

---

## Output

Produces:

- Architecture Style
- Layer Diagram
- Design Rationale
- Architectural Decisions
- Scalability Notes

---

# 13. Module Design Agent

ID

AG-006

---

## Purpose

The Module Design Agent decomposes the system into well-defined modules.

Each module has a single responsibility and clear boundaries.

---

## Responsibilities

The agent defines:

- Modules
- Responsibilities
- Dependencies
- Public Interfaces
- Internal Boundaries

---

## Design Rules

Modules should:

- Follow SOLID.
- Minimize coupling.
- Maximize cohesion.
- Support future scalability.
- Remain independently maintainable.

---

## Output

Produces:

- Module List
- Module Responsibilities
- Dependency Graph
- Interaction Overview

---

# 14. Technology Recommendation Agent

ID

AG-007

---

## Purpose

Recommend or validate the project's technology stack based on the generated architecture and modules.

If the user already selected technologies, the agent validates whether they fit the project.

If no technologies are provided, the agent recommends the most suitable stack with engineering justification.

---

## Responsibilities

The Technology Recommendation Agent evaluates:

- Backend Framework
- Frontend Framework
- Database
- ORM
- Authentication Strategy
- Cache
- Storage
- Messaging (if required)
- Deployment Target

---

## Decision Strategy

Recommendations are based on:

- Architecture
- Module Design
- Project Scale
- Performance Requirements
- Team Experience (if provided)
- Future Maintainability

The goal is to recommend the simplest stack capable of satisfying the project's requirements.

---

## Output

Produces:

- Recommended Technology Stack
- Justification for Each Choice
- Alternative Options
- Compatibility Notes

# 15. Database Design Agent

ID

AG-008

---

## Purpose

The Database Design Agent designs the project's data model based on the validated requirements, selected architecture, and module boundaries.

Its responsibility is to create a maintainable, scalable, and normalized database structure.

---

## Responsibilities

The Database Design Agent is responsible for:

- Identifying entities.
- Defining relationships.
- Selecting relationship cardinalities.
- Defining constraints.
- Designing indexes.
- Applying normalization where appropriate.

---

## Design Principles

The database design should:

- Follow business requirements.
- Minimize redundancy.
- Preserve data integrity.
- Scale with expected growth.
- Remain easy to maintain.

---

## Output

Produces:

- Entity List
- Relationships
- ER Diagram Specification
- Index Recommendations
- Data Constraints

---

# 16. API Design Agent

ID

AG-009

---

## Purpose

The API Design Agent defines how different parts of the system communicate.

It produces implementation-independent API specifications.

---

## Responsibilities

The API Design Agent defines:

- Resources
- Endpoints
- HTTP Methods
- Request Structures
- Response Structures
- Error Responses
- Authentication Requirements

---

## API Design Principles

The generated APIs should:

- Follow REST best practices.
- Use consistent naming.
- Be versionable.
- Support future extensibility.
- Remain framework independent.

---

## Output

Produces:

- API Specification
- Endpoint List
- Request Schemas
- Response Schemas
- Error Definitions

---

# 17. Security Agent

ID

AG-010

---

## Purpose

The Security Agent ensures that the generated architecture follows appropriate security practices.

Security recommendations must be proportional to the project's requirements.

---

## Responsibilities

The Security Agent evaluates:

- Authentication
- Authorization
- Input Validation
- Rate Limiting
- Data Protection
- Secret Management
- Session Management
- Logging Strategy

---

## Output

Produces:

- Security Recommendations
- Authentication Strategy
- Authorization Model
- Risk Assessment
- Security Checklist

---

# 18. Documentation Agent

ID

AG-011

---

## Purpose

The Documentation Agent transforms engineering decisions into structured documentation.

It does not introduce new architectural decisions.

Its responsibility is documentation only.

---

## Responsibilities

Generate documentation for:

- Project Overview
- Architecture Summary
- Module Descriptions
- Database Summary
- API Summary
- Security Summary
- Engineering Decisions

---

## Output

Produces:

- Software Blueprint Documentation
- Architecture Summary
- Engineering Notes
- Decision References

---

# 19. Blueprint Aggregator

ID

AG-012

---

## Purpose

The Blueprint Aggregator combines every validated output into one unified Software Blueprint.

It performs no engineering decisions.

---

## Responsibilities

The Blueprint Aggregator:

- Collects validated outputs.
- Merges documents.
- Orders sections.
- Removes duplication.
- Generates the final blueprint.

---

## Output

Produces:

- Final Software Blueprint

---

# 20. Global Reviewer Agent

ID

AG-013

---

## Purpose

The Global Reviewer Agent performs the final quality assurance process before the blueprint is delivered to the user.

Unlike Local Reviews, which validate individual agent outputs, the Global Reviewer validates the entire blueprint as one engineering document.

---

## Validation Areas

The reviewer checks:

- Architectural consistency.
- Requirement coverage.
- Missing sections.
- Cross-section conflicts.
- Technology compatibility.
- Database consistency.
- API consistency.
- Security completeness.
- Documentation completeness.

---

## Regeneration Strategy

If an issue is detected:

1. Identify the affected section.
2. Identify the responsible AI Agent.
3. Regenerate only that section.
4. Preserve all validated outputs.
5. Repeat validation.

The entire blueprint must never be regenerated unless explicitly requested by the user.

---

# 21. Agent Communication

AI Agents never communicate directly.

Every interaction passes through the Workflow Orchestrator using the shared Execution Context.

Communication Flow

```text
AI Agent
    │
    ▼
Workflow Orchestrator
    │
    ▼
Execution Context
    │
    ▼
Next AI Agent
```

---

## Communication Rules

COM-001

Agents cannot invoke other agents directly.

---

COM-002

Agents may only read from the Execution Context.

---

COM-003

Agents may only write to their designated output section.

---

COM-004

Requirements may only be created or modified by the Requirements Agent.

---

COM-005

The Consistency Agent cannot modify requirements.

---

COM-006

The Question Generator Agent may only generate clarification questions.

---

COM-007

Only the Global Reviewer Agent may request regeneration.

---

COM-008

The Workflow Orchestrator executes all retries.

---

# 22. Review Cycle

Bluper performs review at two levels.

---

## Local Review

After each engineering agent finishes execution.

Purpose:

- Validate output quality.
- Detect missing sections.
- Catch formatting issues.
- Prevent propagating invalid outputs.

---

## Global Review

Executed after the Software Blueprint has been assembled.

Purpose:

- Validate overall consistency.
- Detect cross-document conflicts.
- Ensure every requirement has been addressed.
- Verify architectural integrity.

---

# 23. Token Optimization Strategy

Bluper minimizes AI cost using the following strategies.

OPT-001

Specialized AI Agents.

---

OPT-002

Shared Execution Context.

---

OPT-003

Structured JSON communication.

---

OPT-004

Partial regeneration only.

---

OPT-005

Reuse validated outputs.

---

OPT-006

Minimal clarification questions.

---

OPT-007

Prompt templates.

---

OPT-008

Immutable finalized requirements.

---

OPT-009

Independent engineering responsibilities.

---

# 24. Error Handling

ERR-001

Reject invalid JSON.

---

ERR-002

Log malformed outputs.

---

ERR-003

Retry recoverable failures once.

---

ERR-004

Terminate gracefully on unrecoverable failures.

---

ERR-005

Preserve validated outputs.

---

ERR-006

Assign a unique Execution ID to every workflow.

---

ERR-007

Report all failures with sufficient diagnostic information for debugging.

---

# 25. References

## Related Documents

- 01-project-specification.md
- 02-architecture-decisions.md
- 03-system-architecture.md

---

## Related ADRs

- ADR-002 — Workflow Orchestrator
- ADR-003 — Shared Execution Context
- ADR-004 — JSON-based Agent Communication
- ADR-006 — Partial Regeneration Strategy

---

# Document Status

This document defines the official AI workflow of Bluper.

All AI Agents, orchestration logic, communication mechanisms, and validation processes must conform to this specification.

Any modification to the workflow requires a new Architecture Decision Record (ADR) before implementation.
