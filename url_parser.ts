import { APP, App } from "./app";
import { PARAM_KEY } from "./constants";
import { destringifyMessage } from "@selfage/message/stringifier";

export function parse(thisWindow: Window = window): App {
  let searchParams = new URLSearchParams(thisWindow.location.search);
  let value = searchParams.get(PARAM_KEY);
  let obj: any;
  if (value) {
    try {
      obj = JSON.parse(value);
    } catch (e) {
      // Ignore
    }
  }
  return destringifyMessage(obj, APP);
}
