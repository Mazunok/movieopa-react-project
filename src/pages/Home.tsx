import { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieList } from "../components/MovieList/MovieList";
import { movieAPI } from "../services/movieApi/movieApi";
import { IMovie } from "../types";

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    movieAPI.getAll().then((movies) => {
      setMovies(movies["Search"]);
    });
  }, []);

  return (
    <StyledHomePage>
      <MovieList movies={movies} />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
width: 100%;
height: 100%;
`;
