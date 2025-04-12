import { EnumDescriptor, MessageDescriptor } from '@selfage/message/descriptor';
import { MainApp, MAIN_APP } from './main/app';
import { MarketingPage, MARKETING_PAGE } from './marketing/page';
import { ReplacePrimaryPaymentMethod, REPLACE_PRIMARY_PAYMENT_METHOD } from './replace_primary_payment_method/page';
import { SetConnectedAccountOnboarded, SET_CONNECTED_ACCOUNT_ONBOARDED } from './set_connected_account_onboarded/page';

export enum Page {
  MAIN = 1,
  MARKETING = 2,
  REPLACE_PRIMARY_PAYMENT_METHOD = 3,
  SET_CONNECTED_ACCOUNT_ONBOARDED = 4,
}

export let PAGE: EnumDescriptor<Page> = {
  name: 'Page',
  values: [{
    name: 'MAIN',
    value: 1,
  }, {
    name: 'MARKETING',
    value: 2,
  }, {
    name: 'REPLACE_PRIMARY_PAYMENT_METHOD',
    value: 3,
  }, {
    name: 'SET_CONNECTED_ACCOUNT_ONBOARDED',
    value: 4,
  }]
}

export interface App {
  page?: Page,
  main?: MainApp,
  marketing?: MarketingPage,
  replacePrimaryPaymnetMethod?: ReplacePrimaryPaymentMethod,
  setConnectedAccountOnboarded?: SetConnectedAccountOnboarded,
}

export let APP: MessageDescriptor<App> = {
  name: 'App',
  fields: [{
    name: 'page',
    index: 1,
    enumType: PAGE,
  }, {
    name: 'main',
    index: 2,
    messageType: MAIN_APP,
  }, {
    name: 'marketing',
    index: 3,
    messageType: MARKETING_PAGE,
  }, {
    name: 'replacePrimaryPaymnetMethod',
    index: 4,
    messageType: REPLACE_PRIMARY_PAYMENT_METHOD,
  }, {
    name: 'setConnectedAccountOnboarded',
    index: 5,
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED,
  }],
};
