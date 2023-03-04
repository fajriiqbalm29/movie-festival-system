// api/index.ts
import { Server,Model  } from "miragejs";
import { userSeeder } from './users/userSeeder';
import { setupUserRoutes } from "./users/userApi";

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      userSeeder(server);
    },

    routes() {
      setupUserRoutes(this);
    },
  });

  return server;
}
