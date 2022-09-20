import { useEffect } from "react";
import { MovieList } from "../../components/index";
import { transformMovieData } from "../../services/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cleanStore, fetchTrands, TrandsState } from "../../store/features/trandsSlice/trandsSlice";
import { TrandsContainer } from "./styles";
import { getTrands } from "store";

export const Trands = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error }: TrandsState = useAppSelector(getTrands);

  useEffect(() => {
    dispatch(fetchTrands({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(cleanStore());
  }, [dispatch]);

  return (
    <TrandsContainer>
      <MovieList
        movies={transformMovieData(results.Search)}
        isLoading={isLoading}
        errorMessage={error}
      />
    </TrandsContainer>
  );
};
