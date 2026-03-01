import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { env } from "./env.js";

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), "utf8");

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

async function bootstrap() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: env.PORT },
  });

  console.log(`🚀 Server ready at ${url}`);
}

void bootstrap();
