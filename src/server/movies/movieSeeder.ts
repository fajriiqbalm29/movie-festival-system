// seeds/user.ts
import { Seeder } from "miragejs";

const movie: Model.Movie.Data[] = [
  { title: "Movie 1" , slug: 'movie-1',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com'  },
  { title: "Movie 2" , slug: 'movie-2',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com'  },
  { title: "Movie 3" , slug: 'movie-3',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com'  },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com'  },
];

export const movieSeeder: Seeder = (server) => {
  movie.forEach((movie) => {
    server.create("movie", movie);
  });
};
