import { MAIN_APP, MainApp } from "./main_app";
import {
  REPLACE_PRIMARY_PAYMENT_METHOD,
  ReplacePrimaryPaymentMethod,
} from "./replace_primary_payment_method";
import { MessageDescriptor } from "@selfage/message/descriptor";

export interface WebAppDef<T> {
  path: string;
  rootPage: MessageDescriptor<T>;
}

export let MAIN_APP_DEF: WebAppDef<MainApp> = {
  path: "/",
  rootPage: MAIN_APP,
};

export let REPLACE_PRIMARY_PAYMENT_METHOD_DEF: WebAppDef<ReplacePrimaryPaymentMethod> =
  {
    path: "/replace_primary_payment_method",
    rootPage: REPLACE_PRIMARY_PAYMENT_METHOD,
  };
