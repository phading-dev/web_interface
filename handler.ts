import { ROOT_PAGE, RootPage } from "./interface";
import { PARAM_KEY } from "./vars";
import { parseMessage } from "@selfage/message/parser";

export function parseUrl(thisWindow: Window = window): RootPage {
  let value = new URLSearchParams(thisWindow.location.search).get(PARAM_KEY);
  let obj: any;
  if (value) {
    try {
      obj = JSON.parse(value);
    } catch (e) {
      // Ignore
    }
  }
  return parseMessage(obj, ROOT_PAGE);
}
