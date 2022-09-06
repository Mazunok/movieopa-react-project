import axios from "axios";
import { IMovieSearch } from "../../types";

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

class MovieAPI {
  private readonly BASE_URL = process.env
    .REACT_APP_BASE_URL_MOVIES_API as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  private randomNameWord = "";

  private getRandomWord = (): string => {
    const randomWords = [
      "cat",
      "bat",
      "spider",
      "doll",
      "woman",
      "world",
      "crazy",
      "happiness",
      "pet",
      "icon",
      "year",
      "death",
      "love",
      "vampire",
      "sun",
      "diary",
      "travel",
      "forest",
      "couple",
      "unicorn",
    ];
    const random = Math.floor(Math.random() * randomWords.length);
    const result = randomWords[random];
    return result;
  };

  private readonly DEFALUT_REQUEST_PARAMS: MovieRequestParams = {
    apikey: "2a1e8083",
  };

  public async getAll(newParams: MovieRequestParams) {
    const params = {
      ...this.DEFALUT_REQUEST_PARAMS,
      ...newParams,
      s: this.getRandomWord(),
    };

    const { data } = await this.API.get<IMovieSearch>("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
