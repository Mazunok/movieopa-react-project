export interface IMovieApI {
  imdbID: string;
  Title: string;
  Type: string;
  Year: number;
  Poster: string;
}

export interface IMovieSearch {
  Response: "True" | "False";
  TotalResults: string|null;
  Search: IMovieApI[];
}

export interface IMovie {
  imdbID: string;
  title: string;
  type: string;
  year: number;
  poster: string;
}

export type MovieRequestParams = {
  apikey?: string;
  s?: string;
  i?: string;
  title?: string;
  type?: string;
  year?: number;
  page?: string;
  poster?: string;
  plot?: string;
};

export interface IDetailsMovie {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface IUser {
  displayName: string | null;
  email: string | null;
}

export type ITheme = {
  readonly value: string;
  readonly label: string;
};

export interface ISearchedMoviesResponse extends IMovieSearch {
  page: string | null
}
