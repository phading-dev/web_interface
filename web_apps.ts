import { MAIN_APP, MainApp } from "./main_app";
import {
  REPLACE_PRIMARY_PAYMENT_METHOD,
  ReplacePrimaryPaymentMethod,
} from "./replace_primary_payment_method";
import {
  SET_CONNECTED_ACCOUNT_ONBOARDED,
  SetConnectedAccountOnboarded,
} from "./set_connected_account_onboarded";
import { MessageDescriptor } from "@selfage/message/descriptor";

export interface WebAppStateParam<T> {
  key: string;
  value: MessageDescriptor<T>;
}

export interface WebAppDef<T> {
  path: string;
  state: WebAppStateParam<T>;
  extraParamKeys?: Array<string>;
}

export let MAIN_APP_DEF: WebAppDef<MainApp> = {
  path: "/",
  state: {
    key: "e",
    value: MAIN_APP,
  },
};

export let REPLACE_PRIMARY_PAYMENT_METHOD_DEF: WebAppDef<ReplacePrimaryPaymentMethod> =
  {
    path: "/replace_primary_payment_method",
    state: {
      key: "e",
      value: REPLACE_PRIMARY_PAYMENT_METHOD,
    },
    extraParamKeys: ["session_id"],
  };

export let SET_CONNECTED_ACCOUNT_ONBOARDED_DEF: WebAppDef<SetConnectedAccountOnboarded> =
  {
    path: "/set_connected_account_onboarded",
    state: {
      key: "e",
      value: SET_CONNECTED_ACCOUNT_ONBOARDED,
    },
  };
