import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { MainAppRl, MAIN_APP_RL } from './main/app';

export interface ReplacePrimaryPaymentMethodRl {
  accountId?: string,
}

export let REPLACE_PRIMARY_PAYMENT_METHOD_RL: MessageDescriptor<ReplacePrimaryPaymentMethodRl> = {
  name: 'ReplacePrimaryPaymentMethodRl',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SetConnectedAccountOnboardedRl {
  accountId?: string,
}

export let SET_CONNECTED_ACCOUNT_ONBOARDED_RL: MessageDescriptor<SetConnectedAccountOnboardedRl> = {
  name: 'SetConnectedAccountOnboardedRl',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AppRl {
  main?: MainAppRl,
  replacePrimaryPaymentMethod?: ReplacePrimaryPaymentMethodRl,
  setConnectedAccountOnboarded?: SetConnectedAccountOnboardedRl,
}

export let APP_RL: MessageDescriptor<AppRl> = {
  name: 'AppRl',
  fields: [{
    name: 'main',
    index: 1,
    messageType: MAIN_APP_RL,
  }, {
    name: 'replacePrimaryPaymentMethod',
    index: 2,
    messageType: REPLACE_PRIMARY_PAYMENT_METHOD_RL,
  }, {
    name: 'setConnectedAccountOnboarded',
    index: 3,
    messageType: SET_CONNECTED_ACCOUNT_ONBOARDED_RL,
  }],
};
