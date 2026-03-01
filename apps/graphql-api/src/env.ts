import { createEnv } from "@heewon.dev/utils-env";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "",
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    PORT: z.coerce.number().default(4000),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  },
});
