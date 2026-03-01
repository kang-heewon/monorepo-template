import { createEnv } from "@heewon.dev/utils-env";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
});
