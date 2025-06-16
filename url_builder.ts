import { APP_RL, AppRl } from "./app";
import { PARAM_KEY } from "./constants";
import { stringifyMessage } from "@selfage/message/stringifier";

// TODO: Figure out a way to define extraParams in the APP message.
export function buildUrl(
  origin: string,
  value: AppRl,
  extraParams?: Array<[string, string]>,
): string {
  let url = new URL(origin);
  // Assumes the path is always "/".
  url.searchParams.set(PARAM_KEY, stringifyMessage(value, APP_RL));
  if (extraParams) {
    extraParams.forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  return url.href;
}
