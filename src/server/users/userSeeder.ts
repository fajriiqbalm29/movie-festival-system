// seeds/user.ts
import { Seeder } from "miragejs";

const users: Model.User.Data[] = [
  { name: "Administrator" ,email: 'admin@admin.com', password: 'admin123', role:"admin"  },
  { name: "User Test" ,email: 'user@user.com', password: 'user123', role:"user"  },
];

export const userSeeder: Seeder = (server) => {
  users.forEach((user) => {
    server.create("user", user);
  });
};
