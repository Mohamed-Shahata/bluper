import { z } from 'zod';

/**
 * Runtime schema for environment variables.
 *
 * Every variable consumed by the backend must be declared here so invalid
 * or missing configuration fails fast at application bootstrap instead of
 * causing unpredictable behaviour later in the request lifecycle.
 */
export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  CORS_ORIGIN: z.string().min(1).default('http://localhost:3001'),
});

export type EnvConfig = z.infer<typeof envSchema>;

/**
 * Validates raw process.env values.
 *
 * Used as the `validate` function of `ConfigModule.forRoot`, so Nest
 * refuses to start the application when required configuration is
 * missing or malformed.
 */
export function validateEnv(config: Record<string, unknown>): EnvConfig {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      .join('; ');

    throw new Error(`Invalid environment configuration: ${issues}`);
  }

  return result.data;
}