import { App } from "./app";
import { PARAM_KEY } from "./constants";

export class UrlBuilder {
  public constructor(private origin: string) {}

  public build(value: App, extraParams?: Array<[string, string]>): string {
    let url = new URL(this.origin);
    url.searchParams.set(PARAM_KEY, JSON.stringify(value));
    if (extraParams) {
      extraParams.forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }
    return url.href;
  }
}
