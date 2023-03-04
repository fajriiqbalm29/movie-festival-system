// api/movie.ts
import { Server, Response } from "miragejs";
import {sendResponse} from '@/server/response'

export function setupMovieRoutes(server: Server) {

  server.get("/api/movies", () => {
    return { movies: server.db.movies };
  });

  server.post("/api/movies", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const movie = server.create("movie", attrs);
   
    return sendResponse(movie,200,'')
  });

  server.put("/api/movies/:id", (schema, request) => {
    const id = parseInt(request.params.id);
    const attrs = JSON.parse(request.requestBody);
    const movie = server.db.movies.find((u) => u.id === id);
    if (!movie) {
      return new Response(404);
    }
    movie.update(attrs);
    return movie;
  });

  server.delete("/api/movies/:id", (schema, request) => {
    const id = parseInt(request.params.id);
    const movie = server.db.movies.find((u) => u.id === id);
    if (!movie) {
      return new Response(404);
    }
    movie.destroy();
    return new Response(204);
  });
}
