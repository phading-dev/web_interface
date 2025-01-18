import { RootPage } from "./interface";
import { ORIGIN, PARAM_KEY } from "./vars";

export function buildUrl(value: RootPage, origin = ORIGIN): string {
  let url = new URL(origin);
  url.searchParams.set(PARAM_KEY, JSON.stringify(value));
  return url.href;
}
