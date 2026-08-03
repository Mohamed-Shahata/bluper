import { spawnSync } from 'node:child_process';

const seedSql = `
INSERT INTO "User" ("id", "email", "passwordHash", "name", "createdAt", "updatedAt")
VALUES (
  '11111111-1111-4111-8111-111111111111',
  'demo@bluper.dev',
  'development-password-hash',
  'Bluper Demo User',
  NOW(),
  NOW()
)
ON CONFLICT ("email") DO UPDATE
SET "name" = EXCLUDED."name",
    "updatedAt" = NOW();

INSERT INTO "Project" ("id", "userId", "name", "description", "domain", "goals", "createdAt", "updatedAt")
VALUES (
  '22222222-2222-4222-8222-222222222222',
  '11111111-1111-4111-8111-111111111111',
  'Sample SaaS Blueprint',
  'A sample project used to verify Bluper development database seeding.',
  'Software Architecture',
  '["Validate the blueprint workflow", "Provide stable development data"]'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT ("id") DO UPDATE
SET "name" = EXCLUDED."name",
    "description" = EXCLUDED."description",
    "domain" = EXCLUDED."domain",
    "goals" = EXCLUDED."goals",
    "updatedAt" = NOW();

INSERT INTO "ProjectDescription" ("id", "projectId", "content", "createdAt", "updatedAt")
VALUES (
  '33333333-3333-4333-8333-333333333333',
  '22222222-2222-4222-8222-222222222222',
  'Build a planning platform that turns project ideas into professional software blueprints.',
  NOW(),
  NOW()
)
ON CONFLICT ("projectId") DO UPDATE
SET "content" = EXCLUDED."content",
    "updatedAt" = NOW();

INSERT INTO "Requirement" ("id", "projectId", "type", "priority", "title", "description", "source", "createdAt", "updatedAt")
VALUES (
  '44444444-4444-4444-8444-444444444444',
  '22222222-2222-4222-8222-222222222222',
  'functional',
  'high',
  'Generate software blueprints',
  'The system should generate structured engineering blueprints from validated project requirements.',
  'development-seed',
  NOW(),
  NOW()
)
ON CONFLICT ("id") DO UPDATE
SET "type" = EXCLUDED."type",
    "priority" = EXCLUDED."priority",
    "title" = EXCLUDED."title",
    "description" = EXCLUDED."description",
    "source" = EXCLUDED."source",
    "updatedAt" = NOW();

INSERT INTO "Question" ("id", "projectId", "requirementId", "prompt", "options", "defaultValue", "required", "priority", "createdAt", "updatedAt")
VALUES (
  '55555555-5555-4555-8555-555555555555',
  '22222222-2222-4222-8222-222222222222',
  '44444444-4444-4444-8444-444444444444',
  'What is the expected project scale?',
  '["Prototype", "Small product", "Growing SaaS", "Enterprise"]'::jsonb,
  'Growing SaaS',
  true,
  'medium',
  NOW(),
  NOW()
)
ON CONFLICT ("id") DO UPDATE
SET "prompt" = EXCLUDED."prompt",
    "options" = EXCLUDED."options",
    "defaultValue" = EXCLUDED."defaultValue",
    "required" = EXCLUDED."required",
    "priority" = EXCLUDED."priority",
    "updatedAt" = NOW();

INSERT INTO "QuestionAnswer" ("id", "questionId", "answer", "createdAt", "updatedAt")
VALUES (
  '66666666-6666-4666-8666-666666666666',
  '55555555-5555-4555-8555-555555555555',
  'Growing SaaS',
  NOW(),
  NOW()
)
ON CONFLICT ("id") DO UPDATE
SET "answer" = EXCLUDED."answer",
    "updatedAt" = NOW();
`;

const result =
  process.platform === 'win32'
    ? spawnSync('cmd.exe', ['/d', '/s', '/c', 'pnpm.cmd prisma db execute --stdin'], {
        input: seedSql,
        stdio: ['pipe', 'inherit', 'inherit'],
      })
    : spawnSync('pnpm', ['prisma', 'db', 'execute', '--stdin'], {
        input: seedSql,
        stdio: ['pipe', 'inherit', 'inherit'],
      });

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log('Development seed data inserted.');
