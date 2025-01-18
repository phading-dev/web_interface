import { RootPage } from "./interface";
import { ORIGIN, PARAM_KEY } from "./vars";

export class UrlBuilder {
  private url: URL;

  public constructor(origin = ORIGIN) {
    this.url = new URL(origin);
  }

  public set(value: RootPage): this {
    this.url.searchParams.set(PARAM_KEY, JSON.stringify(value));
    return this;
  }

  public build(): string {
    return this.url.href;
  }
}

export let URL_BUILDER = new UrlBuilder();
