import { MainApp } from "./main_app";
import { ReplacePrimaryPaymentMethod } from "./replace_primary_payment_method";
import { SetConnectedAccountOnboarded } from "./set_connected_account_onboarded";
import { ORIGIN } from "./vars";
import {
  MAIN_APP_DEF,
  REPLACE_PRIMARY_PAYMENT_METHOD_DEF,
  SET_CONNECTED_ACCOUNT_ONBOARDED_DEF,
  WebAppDef,
} from "./web_apps";

export class UrlBuilder {
  public constructor(private origin = ORIGIN) {}

  public build<T>(
    webApp: WebAppDef<T>,
    value: T,
    extraParams?: Array<[string, string]>,
  ): string {
    let url = new URL(this.origin);
    url.pathname = webApp.path;
    url.searchParams.set(webApp.state.key, JSON.stringify(value));
    if (extraParams) {
      extraParams.forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }
    return url.href;
  }
}

export let URL_BUILDER = new UrlBuilder();

export function buildMainAppUrl(builder: UrlBuilder, value: MainApp): string {
  return builder.build(MAIN_APP_DEF, value);
}

export function buildReplacePrimaryPaymentMethodUrl(
  builder: UrlBuilder,
  value: ReplacePrimaryPaymentMethod,
  sessionId: string,
): string {
  return builder.build(REPLACE_PRIMARY_PAYMENT_METHOD_DEF, value, [
    ["session_id", sessionId],
  ]);
}

export function buildSetConnectedAccountOnboardedUrl(
  builder: UrlBuilder,
  value: SetConnectedAccountOnboarded,
): string {
  return builder.build(SET_CONNECTED_ACCOUNT_ONBOARDED_DEF, value);
}
