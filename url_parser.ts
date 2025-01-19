import { PARAM_KEY } from "./vars";
import { MessageDescriptor } from "@selfage/message/descriptor";
import { parseMessage } from "@selfage/message/parser";

export function parseUrl<T>(
  descriptor: MessageDescriptor<T>,
  thisWindow: Window = window,
): T {
  let value = new URLSearchParams(thisWindow.location.search).get(PARAM_KEY);
  let obj: any;
  if (value) {
    try {
      obj = JSON.parse(value);
    } catch (e) {
      // Ignore
    }
  }
  return parseMessage(obj, descriptor);
}
