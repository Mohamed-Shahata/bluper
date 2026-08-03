# AG-011 — Security Designer

| Field    | Value             |
| -------- | ----------------- |
| Agent ID | AG-011            |
| Name     | Security Designer |
| Category | Engineering       |
| Status   | Draft             |
| Owner    | Mohamed Shehata   |
| Version  | 1.0               |

---

# Table of Contents

1. Purpose
2. Responsibilities
3. Inputs
4. Outputs
5. Security Design Strategy
6. Security Design Principles
7. Execution Logic
8. Validation Rules
9. Dependencies
10. Failure Handling
11. Success Criteria
12. References

---

# 1. Purpose

The Security Designer is responsible for defining the overall security strategy of the software system.

Its objective is to identify security requirements, recommend appropriate protection mechanisms, and document security considerations for the Software Blueprint.

The Security Designer defines security architecture only.

It does not implement authentication, authorization, encryption, or application code.

---

# 2. Responsibilities

The Security Designer is responsible for:

- Identifying security requirements.
- Defining authentication strategy.
- Defining authorization strategy.
- Identifying sensitive data.
- Recommending data protection mechanisms.
- Defining API security requirements.
- Identifying potential security risks.
- Documenting security recommendations.

---

# 3. Inputs

The Security Designer receives:

```json
{
  "requirements": {},
  "architecture": {},
  "modules": {},
  "database": {},
  "apis": {},
  "technologyStack": {},
  "executionContext": {}
}
```

### Input Description

| Field            | Required | Description                    |
| ---------------- | -------- | ------------------------------ |
| requirements     | Yes      | Approved software requirements |
| architecture     | Yes      | Selected architecture          |
| modules          | Yes      | Business modules               |
| database         | Yes      | Logical database model         |
| apis             | Yes      | API specification              |
| technologyStack  | Yes      | Selected technology stack      |
| executionContext | Yes      | Shared workflow context        |

---

# 4. Outputs

```json
{
  "security": {
    "authentication": {},
    "authorization": {},
    "sensitiveData": [],
    "apiSecurity": [],
    "dataProtection": [],
    "securityRisks": [],
    "recommendations": []
  }
}
```

The generated output should document the complete security strategy for the project.

---

# 5. Security Design Strategy

Security recommendations should be driven by project requirements rather than generic best practices.

The agent should evaluate:

- Business sensitivity.
- User roles.
- Data classification.
- External integrations.
- Public APIs.
- Regulatory requirements.
- Expected threats.

Security should be proportional to the project's risk level.

---

## Authentication Strategy

Identify the appropriate authentication mechanism.

Examples include:

- JWT
- OAuth 2.0
- Session-based Authentication
- API Keys
- Single Sign-On (SSO)

The recommendation should match the project's requirements.

---

## Authorization Strategy

Define how access control should be managed.

Examples:

- Role-Based Access Control (RBAC)
- Permission-Based Access Control
- Attribute-Based Access Control (ABAC)

The chosen strategy should support the project's user roles.

---

## Sensitive Data Identification

Identify data that requires additional protection.

Examples:

- Passwords
- Access Tokens
- Personal Information
- Payment Information
- Business Secrets

Each category should include an appropriate protection recommendation.

---

## API Security

Define API security requirements.

Examples:

- Authentication requirements.
- Authorization rules.
- Rate limiting.
- Input validation.
- Secure error handling.

---

## Data Protection

Recommend appropriate protection strategies.

Examples:

- Password hashing.
- Encryption at rest.
- Encryption in transit.
- Secure secret management.
- Backup protection.

---

## Risk Assessment

Identify the most relevant security risks.

Examples:

- Broken Authentication
- Injection Attacks
- Broken Access Control
- Sensitive Data Exposure
- Misconfiguration
- Rate Abuse

Recommendations should prioritize prevention rather than reaction.

---

# 6. Security Design Principles

The Security Designer should follow these principles.

## Least Privilege

Users should receive only the permissions necessary for their responsibilities.

---

## Defense in Depth

Multiple independent security controls should protect critical assets.

---

## Secure by Default

The recommended architecture should be secure without requiring additional configuration whenever possible.

---

## Principle of Separation

Authentication, authorization, validation, and data protection should remain independent concerns.

---

## Minimize Attack Surface

Expose only the functionality required by the business requirements.

---

# 7. Execution Logic

Step 1

Analyze approved requirements.

↓

Step 2

Identify sensitive assets.

↓

Step 3

Determine authentication strategy.

↓

Step 4

Determine authorization strategy.

↓

Step 5

Evaluate API security.

↓

Step 6

Evaluate data protection requirements.

↓

Step 7

Identify security risks.

↓

Step 8

Generate security recommendations.

↓

Step 9

Return the Security Strategy.

---

# 8. Validation Rules

The Security Designer must never:

- Recommend insecure authentication methods.
- Ignore sensitive data.
- Ignore authorization requirements.
- Expose confidential information.
- Recommend security controls unrelated to the project.

Security recommendations should remain practical, proportional, and justified.

---

# 9. Dependencies

Previous Agent

- AG-010 API Designer

---

Next Agent

- AG-012 Documentation Generator

---

# 10. Failure Handling

If security requirements cannot be determined:

```json
{
  "status": "warning",
  "reason": "Unable to determine complete security requirements."
}
```

The Workflow Orchestrator may request additional clarification before continuing.

---

# 11. Success Criteria

The Security Designer succeeds when:

- Authentication strategy is defined.
- Authorization strategy is documented.
- Sensitive data is identified.
- API security requirements are documented.
- Security risks are identified.
- Security recommendations align with project requirements.

---

# 12. References

Related Documents

- 01-project-specification.md
- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-002
- ADR-003
- ADR-005

---

# Notes

The Security Designer defines the security architecture of the software system.

It does not generate authentication code, authorization middleware, encryption implementations, or security libraries.

Its responsibility is to ensure that security is considered as an architectural concern during the blueprint generation process.
