import { useEffect } from "react";
import { AppRouter } from "./router/AppRouter";
import { movieAPI} from "./services/movieApi/movieApi";

export const App = () => {
  useEffect(() => {
    movieAPI.getAll().then((response) => {
      console.log(response);
    });
  });
  return <AppRouter />;
};
