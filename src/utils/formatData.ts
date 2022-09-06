import { IMovie, IMovieApI } from "../types";

export const transformMovieData = (movies: any): IMovieApI[] => {
  return movies.map((movie: any) => {
    return {
      imdbID: movie.imdbID,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      poster: movie.Poster,
    };
  });
};
