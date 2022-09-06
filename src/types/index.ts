export interface IMovieApI {
  imdbID: string;
  Title: string;
  Type: string;
  Year: number;
  Poster: string;
}

export interface IMovieSearch {
  Response: "True" | "False";
  TotalResults: string;
  Search: IMovieApI[];
}

export interface IMovie{
  imdbID: string;
  title: string;
  type: string;
  year: number;
  poster: string;
}
