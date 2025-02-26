import { APP, App } from "./app";
import { PARAM_KEY } from "./constants";
import { stringifyMessage } from "@selfage/message/stringifier";

export class UrlBuilder {
  public static create(origin: string): UrlBuilder {
    return new UrlBuilder(origin);
  }

  public constructor(private origin: string) {}

  public build(value: App, extraParams?: Array<[string, string]>): string {
    let url = new URL(this.origin);
    url.searchParams.set(PARAM_KEY, stringifyMessage(value, APP));
    if (extraParams) {
      extraParams.forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }
    return url.href;
  }
}
