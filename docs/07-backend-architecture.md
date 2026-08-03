# Bluper — Backend Architecture

| Field        | Value                    |
| ------------ | ------------------------ |
| Document     | Backend Architecture     |
| Project      | Bluper                   |
| Version      | 1.0                      |
| Status       | Draft                    |
| Owner        | Mohamed Shehata          |
| Type         | Software Design Document |
| Last Updated | YYYY-MM-DD               |

---

# Table of Contents

1. Purpose
2. Backend Philosophy
3. Technology Stack
4. Architectural Style
5. Layered Architecture
6. Module Organization
7. Dependency Rules
8. Request Lifecycle
9. Configuration Management
10. Error Handling
11. Logging Strategy
12. Security
13. Scalability
14. References

---

# 1. Purpose

This document defines the internal backend architecture of Bluper.

It describes how the backend is organized, how modules communicate, and which architectural principles govern the implementation.

This document focuses on the NestJS application itself rather than the AI workflow.

References:

- ADR-001
- ADR-002

---

# 2. Backend Philosophy

The backend should prioritize:

- Maintainability
- Simplicity
- Clear boundaries
- Testability
- Scalability

Every module should own a single business capability.

Business logic should remain independent from infrastructure whenever practical.

---

# 3. Technology Stack

Version 1 uses:

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Zod Validation
- Gemini API
- Docker

Supporting tools may include:

- Swagger
- ESLint
- Prettier

---

# 4. Architectural Style

The backend follows a Modular Monolith architecture.

Business capabilities are organized into independent modules while remaining inside a single deployable application.

Advantages include:

- Simple deployment
- Clear module boundaries
- Easier development
- Lower operational complexity
- Future migration path to Microservices if required

Reference:

ADR-001

---

# 5. Layered Architecture

Each module follows the same internal structure.

Controller

↓

Application Layer

↓

Domain Logic

↓

Repository

↓

Database

Responsibilities:

Controller

- HTTP communication
- Validation
- Authentication

Application Layer

- Execute use cases
- Coordinate services

Domain Logic

- Business rules
- Decision making

Repository

- Database access

Database

- Persistent storage

Business rules must never be implemented inside Controllers.

---

# 6. Module Organization

Each business capability is implemented as an independent NestJS module.

Examples include:

- Authentication
- Users
- Projects
- Requirements
- AI Workflow
- Blueprints
- Recommendations

Each module should contain:

- Controller
- Service
- DTOs
- Repository
- Domain Models
- Validation
- Interfaces

Modules should expose only their public contracts.

---

# 7. Dependency Rules

Dependencies should always point inward.

Allowed dependency flow:

Controller

↓

Service

↓

Repository

↓

Database

Modules should communicate only through exported services.

Direct database access across modules is prohibited.

Circular dependencies are not allowed.

---

# 8. Request Lifecycle

A standard request follows this sequence.

Client Request

↓

Guards

↓

Pipes

↓

Controller

↓

Application Service

↓

Repository

↓

Database

↓

Application Service

↓

Controller

↓

HTTP Response

All validation must occur before business logic execution.

---

# 9. Configuration Management

Application configuration should be centralized.

Configuration sources include:

- Environment Variables
- Configuration Module

Secrets must never be hardcoded.

Different environments should use independent configurations.

---

# 10. Error Handling

The backend should provide consistent error responses.

Exceptions should be handled globally.

Validation errors should return meaningful messages.

Unexpected errors should never expose internal implementation details.

---

# 11. Logging Strategy

The system should log:

- Incoming requests
- AI workflow execution
- Database failures
- External API failures
- Authentication events

Logs should support debugging without exposing sensitive information.

---

# 12. Security

The backend should implement:

- JWT Authentication
- Authorization
- Request Validation
- Secure Password Storage
- Rate Limiting
- CORS Configuration
- Helmet Security Headers
- Environment Variable Protection

Sensitive data must never be logged.

---

# 13. Scalability

The architecture should support future expansion.

Possible future improvements include:

- Redis Caching
- Background Jobs
- Queue Processing
- Distributed Workers
- Multiple AI Providers
- Horizontal Scaling

These enhancements should require minimal architectural changes.

---

# 14. References

Related Documents

- 03-architecture-recommendation-strategy.md
- 05-database-design.md
- 06-api-specification.md

Related ADRs

- ADR-001
- ADR-002

---

# Document Status

This document defines the backend architecture of Bluper.

Implementation details such as controllers, services, DTOs, repositories, middleware, and infrastructure code should conform to the principles defined in this document.
