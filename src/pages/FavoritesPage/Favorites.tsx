import { MovieList } from "../../components/index";
import { useAppSelector } from "../../store/hooks";
import { transformMovieData } from "../../services/index";
import { FavoritesContainer } from "./styles";
import { getFavorites } from "store";

export const Favorites = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <FavoritesContainer>
      <MovieList movies={transformMovieData(favorites)} />
    </FavoritesContainer>
  );
};
