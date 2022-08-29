import axios from "axios";

export type MovieRequestParams = {
  apikey?: string;
  s?: string;
  id?: string;
  title?: string;
  type?: string;
  year?: number;
  page?: number;
  poster?: string;
};

export interface IMovie {
  id?: string;
  title?: string;
  type?: string;
  year?: number;
  page?: number;
  poster?: string;
}

class MovieAPI {
  private readonly BASE_URL = "http://www.omdbapi.com/";
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private readonly DEFALUT_REQUEST_PARAMS: MovieRequestParams = {
    apikey: "2a1e8083",
  };

  public async getAll(newParams?: MovieRequestParams): Promise<IMovie[]> {
    const params = {
      ...this.DEFALUT_REQUEST_PARAMS,
      ...newParams,
      s: "bat",
    };

    const { data } = await this.API.get("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
