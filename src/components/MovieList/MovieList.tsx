import { IMovie } from "../../types";
import { MovieItem } from "../MovieItem/MovieItem";
import { Container } from "../MovieList/styles";

interface IProps {
  movies: IMovie[];
  isLoading?: boolean;
  errorMessage?: string | null;
}

export const MovieList = ({ movies, errorMessage }: IProps) => {
  if (errorMessage) {
    return <h1>Error</h1>;
  }
  return (
    <Container>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.imdbID} />;
      })}
    </Container>
  );
};
