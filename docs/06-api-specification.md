# Bluper — API Specification

| Field        | Value                    |
| ------------ | ------------------------ |
| Document     | API Specification        |
| Project      | Bluper                   |
| Version      | 1.0                      |
| Status       | Draft                    |
| Owner        | Mohamed Shehata          |
| Type         | Software Design Document |
| Last Updated | YYYY-MM-DD               |

---

# Table of Contents

1. Purpose
2. API Philosophy
3. API Standards
4. API Design Principles
5. Authentication
6. Resource Overview
7. Request & Response Standards
8. Error Handling
9. Versioning Strategy
10. Security
11. Future Scalability
12. References

---

# 1. Purpose

This document defines the REST API design principles for Bluper.

It specifies how clients communicate with the backend while ensuring consistency, maintainability, and scalability.

This document describes Bluper's own API—not the API specifications generated inside Software Blueprints.

References:

- ADR-001
- ADR-004

---

# 2. API Philosophy

The API follows a resource-oriented REST architecture.

Each endpoint represents a business resource.

The API should be:

- Predictable
- Consistent
- Stateless
- Easy to consume
- Versionable
- Secure

The API must expose business capabilities rather than internal implementation details.

---

# 3. API Standards

Version 1 follows:

- REST
- JSON Request/Response
- HTTPS Only
- UTF-8 Encoding

Naming conventions:

- lowercase URLs
- plural resources
- kebab-case paths

Examples:

/projects

/workflows

/blueprints

---

# 4. API Design Principles

The API should follow these principles.

## Stateless Communication

Each request contains all required information.

---

## Resource-Based Design

Endpoints represent resources instead of actions.

Example:

GET /projects

instead of

GET /getProjects

---

## Consistent Responses

Every endpoint returns a unified response structure.

---

## Idempotency

PUT and DELETE operations should remain idempotent whenever possible.

---

## Pagination Support

Collection endpoints should support pagination.

---

## Filtering

Collection endpoints may support filtering.

---

## Sorting

Collection endpoints may support sorting.

---

# 5. Authentication

Version 1 uses JWT authentication.

Protected endpoints require a valid access token.

Public endpoints may include:

- Login
- Register
- Health Check

Authorization is based on authenticated users owning their own resources.

---

# 6. Resource Overview

The API exposes the following resources.

## Authentication

- Register
- Login
- Refresh Token
- Logout

---

## Users

Manage user profiles.

---

## Projects

Create and manage software projects.

---

## Requirements

Store finalized project requirements.

---

## Workflows

Execute AI workflows.

Monitor execution status.

---

## Blueprints

Retrieve generated Software Blueprints.

Export blueprint documents.

---

## Recommendations

Retrieve AI-generated recommendations including:

- Technology Stack
- Architecture Style
- Design Patterns

---

# 7. Request & Response Standards

## Request Format

Requests use JSON.

Example

{
"projectIdea": "Build an AI SaaS platform..."
}

---

## Success Response

{
"success": true,
"data": {},
"message": "Operation completed successfully."
}

---

## Error Response

{
"success": false,
"error": {
"code": "VALIDATION_ERROR",
"message": "Project description is required."
}
}

---

# 8. Error Handling

Standard HTTP status codes should be used.

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

429 Too Many Requests

500 Internal Server Error

Error responses should always provide a machine-readable error code.

---

# 9. Versioning Strategy

API versioning follows URI-based versioning.

Example:

/api/v1/projects

Future versions should not break existing clients.

Major breaking changes require a new API version.

---

# 10. Security

The API should enforce:

- JWT Authentication
- Authorization
- Input Validation
- Rate Limiting
- Secure Headers
- HTTPS
- Environment Variable Protection

Sensitive internal information must never be exposed through API responses.

---

# 11. Future Scalability

Future versions may support:

- GraphQL
- WebSocket Notifications
- AI Streaming Responses
- Organization APIs
- Team Workspaces
- API Keys
- Public SDKs
- Webhooks

These additions should not require redesigning the existing REST API.

---

# 12. References

Related Documents

- 01-project-specification.md
- 05-database-design.md

Related ADRs

- ADR-001
- ADR-004

---

# Document Status

This document defines the public REST API standards used by Bluper.

Implementation details, controllers, DTOs, validation rules, and endpoint-specific business logic are intentionally documented outside this specification.
