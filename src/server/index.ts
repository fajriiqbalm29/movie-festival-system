// api/index.ts
import { Server,Model  } from "miragejs";
import { userSeeder } from './users/userSeeder';
import { movieSeeder } from './movies/movieSeeder';
import { setupUserRoutes } from "./users/userApi";
import { setupMovieRoutes } from "./movies/movieApi";

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
      movie: Model,
    },

    seeds(server) {
      userSeeder(server);
      movieSeeder(server);
    },

    routes() {
      setupUserRoutes(this);
      setupMovieRoutes(this);
    },
  });

  return server;
}
