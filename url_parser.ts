import { APP_RL, AppRl } from "./app";
import { PARAM_KEY } from "./constants";
import { destringifyMessage } from "@selfage/message/stringifier";

export function parseUrl(thisWindow: Window): AppRl {
  let value = new URLSearchParams(thisWindow.location.search).get(PARAM_KEY);
  let rl: AppRl;
  if (value) {
    try {
      rl = destringifyMessage(value, APP_RL);
    } catch (e) {
      // Ignore
    }
  }
  return rl;
}
