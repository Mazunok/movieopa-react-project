import { MovieList } from "../../components/MovieList/MovieList";
import { useAppSelector } from "../../store/hooks";

export const Favorites = () => {
  const { favorites } = useAppSelector(
    (state) => state.persistedReducer.favorites
  );

  return <MovieList movies={favorites} />;
};
