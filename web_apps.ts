import { MAIN_APP, MainApp } from "./main_app";
import {
  REPLACE_PRIMARY_PAYMENT_METHOD,
  ReplacePrimaryPaymentMethod,
} from "./replace_primary_payment_method";
import { MessageDescriptor } from "@selfage/message/descriptor";
import { SET_CONNECTED_ACCOUNT_ONBOARDED, SetConnectedAccountOnboarded } from "./set_connected_account_onboarded";

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

export let SET_CONNECTED_ACCOUNT_ONBOARDED_DEF: WebAppDef<SetConnectedAccountOnboarded> =
  {
    path: "/set_connected_account_onboarded",
    rootPage: SET_CONNECTED_ACCOUNT_ONBOARDED,
  };
