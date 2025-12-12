import { defineConfig, Config } from 'drizzle-kit';

export const config = {
  dialect: 'postgresql',
  schema: './libs/**/datasource/src/libs/entities/**/*.ts',
  out: './migrations/drizzle/',
  migrations: {
    prefix: 'timestamp',
  },
} satisfies Config;
export default defineConfig(config);
