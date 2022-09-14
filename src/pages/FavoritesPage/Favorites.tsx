import { MovieList } from "../../components/index";
import { useAppSelector } from "../../store/hooks";
import { transformMovieData } from "../../services/index";
import { FavoritesContainer } from "./styles";

export const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.persistedReducer.favorites);

  return (
    <FavoritesContainer>
      <MovieList movies={transformMovieData(favorites)} />
    </FavoritesContainer>
  );
};
