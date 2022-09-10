import { IMovie, IMovieApI } from "../types";

export const transformMovieData = (movies: IMovieApI[]): IMovie[] => {
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
