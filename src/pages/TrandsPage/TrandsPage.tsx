import { useEffect } from "react";
import { MovieList } from "../../components/index";
import { transformMovieData } from "../../services/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTrands } from "../../store/features/trandsSlice/trandsSlice";
import { TrandsContainer } from "./styles";

export const Trands = () => {
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.persistedReducer.trands);

  useEffect(() => {
    dispatch(fetchTrands({}));
  }, [dispatch]);

  return (
    <TrandsContainer>
      <MovieList movies={transformMovieData(results.Search)} />
    </TrandsContainer>
  );
};