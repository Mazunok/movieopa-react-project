import axios from "axios";
import { IMovieSearch, IDetailsMovie, MovieRequestParams } from "../types/index";

class MovieAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_MOVIES_API as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private getRandomWord = (): string => {
    const randomWords = [
      "star",
      "wedding",
      "wars",
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
      "aladin",
      "princess",
      "lion",
      "aquaman",
    ];
    const random = Math.floor(Math.random() * randomWords.length);
    const result = randomWords[random];
    return result;
  };

  private readonly DEFALUT_REQUEST_PARAMS: MovieRequestParams = {
    apikey: "2a1e8083",
    i: "string",
    s: "string",
  };

  public async getAll() {
    const params = {
      ...this.DEFALUT_REQUEST_PARAMS,
      s: this.getRandomWord(),
    };

    const { data } = await this.API.get<IMovieSearch>("", {
      params,
    });

    return data;
  }

  public async getTrands(newParams: MovieRequestParams) {
    const params = {
      ...this.DEFALUT_REQUEST_PARAMS,
      ...newParams,
      s: this.getRandomWord(),
      y: 2022,
    };

    const { data } = await this.API.get<IMovieSearch>("", {
      params,
    });

    return data;
  }

  public async getDetails(id: string) {
    const params = {
      ...this.DEFALUT_REQUEST_PARAMS,
      s: "",
      i: id,
      plot: "full",
    };

    const { data } = await this.API.get<IDetailsMovie>("", {
      params,
    });

    return data;
  }

  public async getSearch(s: string | null, newParams: MovieRequestParams) {
    const params = {
      ...this.DEFALUT_REQUEST_PARAMS,
      ...newParams,
      s: s,
    };

    const { data } = await this.API.get<IMovieSearch>("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
