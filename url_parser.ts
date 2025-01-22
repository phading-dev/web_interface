import { WebAppDef } from "./web_apps";
import { parseMessage } from "@selfage/message/parser";

export function parseRootPage<T>(
  webApp: WebAppDef<T>,
  thisWindow: Window = window,
): {
  rootPage: T;
  extraParams: Map<string, string>;
} {
  let searchParams = new URLSearchParams(thisWindow.location.search);
  let value = searchParams.get(webApp.state.key);
  let obj: any;
  if (value) {
    try {
      obj = JSON.parse(value);
    } catch (e) {
      // Ignore
    }
  }
  let rootPage = parseMessage(obj, webApp.state.value);
  let extraParams: Map<string, string>;
  if (webApp.extraParamKeys) {
    extraParams = new Map();
    searchParams.forEach((value, key) => {
      if (webApp.extraParamKeys.includes(key)) {
        extraParams.set(key, value);
      }
    });
  }
  return { rootPage, extraParams };
}
