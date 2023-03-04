// api/user.ts
import { Server, Response } from "miragejs";
import {sendResponse} from '@/server/response'

export function setupUserRoutes(server: Server) {
  server.post('/api/auth/login', (schema, request) => {
    const {
      email,
      password
    } = JSON.parse(request.requestBody)
    const user = schema.users.findBy({
      email,
      password
    })

    if (!user) {
      return new Response(401)
    }
    
    return sendResponse({...user.attrs,access_token:'abcd1234'}, 200,'success')
  })

  server.get("/api/users", () => {
    return { users: server.db.users };
  });

  server.post("/api/users", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const user = server.create("user", attrs);
   
    return sendResponse(user,200,'')
  });

  server.put("/api/users/:id", (schema, request) => {
    const id = parseInt(request.params.id);
    const attrs = JSON.parse(request.requestBody);
    const user = server.db.users.find((u) => u.id === id);
    if (!user) {
      return new Response(404);
    }
    user.update(attrs);
    return user;
  });

  server.delete("/api/users/:id", (schema, request) => {
    const id = parseInt(request.params.id);
    const user = server.db.users.find((u) => u.id === id);
    if (!user) {
      return new Response(404);
    }
    user.destroy();
    return new Response(204);
  });
}
