import { RootPage } from "./interface";
import { ORIGIN } from "./vars";

export function buildUrl(key: string, value: RootPage): string {
  let url = new URL(ORIGIN);
  url.searchParams.set(key, JSON.stringify(value));
  return url.href;
}
