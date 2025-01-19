import { MainApp } from "./main_app";
import { ReplacePrimaryPaymentMethod } from "./replace_primary_payment_method";
import { ORIGIN, PARAM_KEY } from "./vars";
import {
  MAIN_APP_DEF,
  REPLACE_PRIMARY_PAYMENT_METHOD_DEF,
  WebAppDef,
} from "./web_apps";

export class UrlBuilder {
  private url: URL;

  public constructor(origin = ORIGIN) {
    this.url = new URL(origin);
  }

  public build<T>(webAppDef: WebAppDef<T>, value: T): string {
    this.url.pathname = webAppDef.path;
    this.url.searchParams.set(PARAM_KEY, JSON.stringify(value));
    return this.url.href;
  }
}

export let URL_BUILDER = new UrlBuilder();

export function buildMainAppUrl(builder: UrlBuilder, mainApp: MainApp): string {
  return builder.build(MAIN_APP_DEF, mainApp);
}

export function buildReplacePrimaryPaymentMethodUrl(
  builder: UrlBuilder,
  replacePrimaryPaymentMethod: ReplacePrimaryPaymentMethod,
): string {
  return builder.build(
    REPLACE_PRIMARY_PAYMENT_METHOD_DEF,
    replacePrimaryPaymentMethod,
  );
}
