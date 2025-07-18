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

export interface AppRl {
  main?: MainAppRl,
  replacePrimaryPaymentMethod?: ReplacePrimaryPaymentMethodRl,
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
  }],
};
