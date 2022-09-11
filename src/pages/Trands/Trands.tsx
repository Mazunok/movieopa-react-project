import { useEffect } from "react";
import { MovieList } from "../../components/index";
import { transformMovieData, movieAPI } from "../../services/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTrands } from "../../store/features/trandsSlice/trandsSlice";

export const Trands = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(
    (state) => state.persistedReducer.trands
  );

  useEffect(() => {
    dispatch(fetchTrands({}));
  }, [dispatch]);

  return <MovieList movies={transformMovieData(results.Search)} />;
};
