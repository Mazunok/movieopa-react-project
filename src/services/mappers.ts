import { UserCredential } from "firebase/auth";
import { IMovie, IMovieApI, IUser } from "../types";

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

export const transformUserCredential = (userCredential: UserCredential): IUser => {
  return {
    displayName: userCredential.user.displayName,
    email: userCredential.user.email,
  };
};
