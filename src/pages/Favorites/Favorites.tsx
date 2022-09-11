import { MovieList } from "../../components/index";
import { useAppSelector } from "../../store/hooks";
import { transformMovieData } from "../../services/index";

export const Favorites = () => {
  const { favorites } = useAppSelector(
    (state) => state.persistedReducer.favorites
  );

  return <MovieList movies={transformMovieData(favorites)} />;
};
