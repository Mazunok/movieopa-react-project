import { useParams } from "react-router-dom";
import { fetchMovies } from "../../store/features/moviesSlice/moviesSlice";
import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";

export const MoviesList = () => {
  const { page = "" } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  return <div>MoviesList</div>;
};
