export interface AppConfig {
  nodeEnv: string;
  port: number;
  databaseUrl: string;
  corsOrigin: string;
}

/**
 * Central configuration factory.
 *
 * ConfigModule loads this once at bootstrap. Downstream code should read
 * configuration through `ConfigService` instead of accessing
 * `process.env` directly.
 */
export default (): { app: AppConfig } => ({
  app: {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: parseInt(process.env.PORT ?? '3000', 10),
    databaseUrl: process.env.DATABASE_URL ?? '',
    corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:3001',
  },
});