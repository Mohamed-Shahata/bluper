# AG-009 — Database Designer

| Field    | Value             |
| -------- | ----------------- |
| Agent ID | AG-009            |
| Name     | Database Designer |
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
5. Database Design Strategy
6. Database Design Principles
7. Execution Logic
8. Validation Rules
9. Dependencies
10. Failure Handling
11. Success Criteria
12. References

---

# 1. Purpose

The Database Designer is responsible for transforming the business modules into a well-structured logical database design.

Its goal is to model the business data accurately while maintaining consistency, scalability, integrity, and future maintainability.

The generated database design is implementation-independent and does not target a specific ORM or database engine.

---

# 2. Responsibilities

The Database Designer is responsible for:

- Identifying entities.
- Defining entity attributes.
- Selecting primary keys.
- Defining relationships.
- Defining relationship cardinality.
- Identifying lookup tables.
- Defining constraints.
- Identifying indexes.
- Preventing data duplication.
- Producing the logical database model.

---

# 3. Inputs

The Database Designer receives:

```json
{
  "requirements": {},
  "architecture": {},
  "modules": {},
  "technologyStack": {},
  "executionContext": {}
}
```

### Input Description

| Field            | Required | Description                  |
| ---------------- | -------- | ---------------------------- |
| requirements     | Yes      | Approved requirements        |
| architecture     | Yes      | Selected architecture        |
| modules          | Yes      | Business modules             |
| technologyStack  | Yes      | Selected database technology |
| executionContext | Yes      | Shared workflow context      |

---

# 4. Outputs

```json
{
  "database": {
    "entities": [],
    "relationships": [],
    "constraints": [],
    "indexes": [],
    "notes": []
  }
}
```

Each entity should include:

- Name
- Description
- Attributes
- Primary Key
- Foreign Keys
- Relationships
- Constraints

---

# 5. Database Design Strategy

The database should model the business domain rather than the application implementation.

The design should prioritize:

- Data integrity.
- Normalization.
- Readability.
- Maintainability.
- Scalability.

Entities should represent real business concepts.

---

## Relationship Modeling

Relationships should be explicitly defined.

Supported relationship types include:

- One-to-One
- One-to-Many
- Many-to-Many

Each relationship should specify:

- Parent Entity
- Child Entity
- Cardinality
- Business Reason

---

## Constraints

Appropriate constraints should be identified.

Examples include:

- Primary Keys
- Foreign Keys
- Unique Constraints
- Required Fields
- Check Constraints

Constraints should enforce business rules whenever applicable.

---

## Index Recommendations

Indexes should only be recommended when they improve expected query performance.

Avoid unnecessary indexing.

---

# 6. Database Design Principles

The Database Designer should follow these principles.

## Business-Oriented Modeling

Entities should represent business concepts.

Never design tables around UI screens or API endpoints.

---

## Data Integrity

Relationships should preserve referential integrity.

---

## Avoid Duplication

Duplicate data should be minimized whenever practical.

---

## Scalability

The model should support future growth without major redesign.

---

## Simplicity

The design should remain as simple as possible while satisfying business requirements.

---

# 7. Execution Logic

Step 1

Read business modules.

↓

Step 2

Identify entities.

↓

Step 3

Define entity attributes.

↓

Step 4

Create relationships.

↓

Step 5

Define constraints.

↓

Step 6

Recommend indexes.

↓

Step 7

Validate logical consistency.

↓

Step 8

Return logical database design.

---

# 8. Validation Rules

The Database Designer must never:

- Duplicate entities.
- Introduce circular relationships without justification.
- Violate business rules.
- Design around implementation details.
- Assume ORM-specific features.

The design should remain technology-neutral whenever possible.

---

# 9. Dependencies

Previous Agent

- AG-008 Module Designer

---

Next Agent

- AG-010 API Designer

---

# 10. Failure Handling

If business entities cannot be identified:

```json
{
  "status": "warning",
  "reason": "Unable to derive a complete logical data model."
}
```

The Workflow Orchestrator may request additional clarification before continuing.

---

# 11. Success Criteria

The Database Designer succeeds when:

- All business entities are identified.
- Relationships are complete.
- Constraints are documented.
- Data duplication is minimized.
- Referential integrity is preserved.
- The database model aligns with the business modules.

---

# 12. References

Related Documents

- 05-database-design.md
- 04-ai-workflow.md
- 09-ai-agents.md

Related ADRs

- ADR-001
- ADR-003
- ADR-005

---

# Notes

The Database Designer produces a logical database model rather than a physical implementation.

It intentionally avoids generating SQL scripts, ORM schemas, migration files, or database-specific syntax.

Its output serves as the authoritative data model for downstream API design and implementation planning.
