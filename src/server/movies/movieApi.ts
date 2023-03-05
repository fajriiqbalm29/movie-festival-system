// api/movie.ts
import { Server, Response } from "miragejs";
import {sendResponse} from '@/server/response'

export function setupMovieRoutes(server: Server) {

  server.get("/api/movies", () => {
    return { movies: server.db.movies };
  });

  server.get("/api/movies/:slug", (schema, request) => {
    const slug = request.params.slug
    const movie = server.db.movies.findBy({slug : slug});
    return sendResponse(movie,200,'')
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
  server.put("/api/movies/viewed/:slug", (schema, request) => {
    const slug = request.params.slug
    let movie = server.schema.movies.findBy({slug : slug});
    if (!movie) {
      return new Response(404);
    }
    movie.update({views : movie.views + 1})
    return sendResponse(movie,200,'')
  });

  server.put("/api/movies/voted/:slug", (schema, request) => {
    const slug = request.params.slug
    let movie = server.schema.movies.findBy({slug : slug});
    if (!movie) {
      return new Response(404);
    }
    movie.update({votes : movie.votes + 1})
    console.log(movie);
    return sendResponse(movie,200,'')
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
