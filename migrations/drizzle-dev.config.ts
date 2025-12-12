import { defineConfig } from 'drizzle-kit';
import { config } from './drizzle.config';
import { DATABASE_URL } from './env.dev';

export default defineConfig({
  ...config,
  dbCredentials: {
    url: DATABASE_URL,
  },
});
