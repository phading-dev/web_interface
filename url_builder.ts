import { APP_RL, AppRl } from "./app";
import { PARAM_KEY } from "./constants";
import { stringifyMessage } from "@selfage/message/stringifier";

export function buildUrl(
  origin: string,
  value: AppRl,
): string {
  let url = new URL(origin);
  // Assumes the path is always "/".
  url.searchParams.set(PARAM_KEY, stringifyMessage(value, APP_RL));
  return url.href;
}
