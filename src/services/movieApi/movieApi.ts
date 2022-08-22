// import axios from "axios";

export type MovieRequestParams =
  | "id"
  | "title"
  | "type"
  | "year"
  | "page"
  | "poster";

export interface IMovie {
  id: string;
  title: string;
  type: string;
  year: number;
  page: number;
  poster: string;
}

// class MovieAPI {
//   private readonly BASE_URL = "http://www.omdbapi.com/";
//   private readonly API = axios.create({
//     baseURL: this.BASE_URL,
//   });

//   public async getAll(): Promise<any> {
//     const result = await this.API.get<any>("all");

//     return result;
//   }
// }

// export const movieAPI = new MovieAPI();
