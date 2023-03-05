// seeds/user.ts
import { Seeder } from "miragejs";

const movie: Model.Movie.Data[] = [
  { title: "Movie 1" , slug: 'movie-1',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 10, votes: 70 },
  { title: "Movie 2" , slug: 'movie-2',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 100, votes: 50 },
  { title: "Movie 3" , slug: 'movie-3',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 2, votes: 24 },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 120, votes: 30 },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 120, votes: 30 },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 120, votes: 30 },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 120, votes: 30 },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 120, votes: 30 },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 120, votes: 30 },
  { title: "Movie 4" , slug: 'movie-4',artist: 'James Bond', description: 'Action Movie', duration:"2 hours", genre: 'Action', url:'http://youtube.com', views: 120, votes: 30 },
];

export const movieSeeder: Seeder = (server) => {
  movie.forEach((movie) => {
    server.create("movie", movie);
  });
};
