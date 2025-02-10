import { MainApp, MAIN_APP } from './main_app';
import { ReplacePrimaryPaymentMethod, REPLACE_PRIMARY_PAYMENT_METHOD } from './replace_primary_payment_method';
import { SetConnectedAccountOnboarded, SET_CONNECTED_ACCOUNT_ONBOARDED } from './set_connected_account_onboarded';
import { MessageDescriptor } from '@selfage/message/descriptor';

export interface App {
  main?: MainApp,
  replacePrimaryPaymnetMethod?: ReplacePrimaryPaymentMethod,
  setConnectedAccountOnboarded?: SetConnectedAccountOnboarded,
}

export let APP: MessageDescriptor<App> = {
  name: 'App',
  fields: [{
    name: 'main',
    index: 1,
    messageType: MAIN_APP,
  }, {
    name: 'replacePrimaryPaymnetMethod',
    index: 2,
    messageType: REPLACE_PRIMARY_PAYMENT_METHOD,
  }, {
    name: 'setConnectedAccountOnboarded',
    index: 3,
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED,
  }],
};
