import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { MainAppRl, MAIN_APP_RL } from './main/app';
import { Empty, EMPTY } from './empty';

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

export interface VerifyEmailRl {
  tokenId?: string,
}

export let VERIFY_EMAIL_RL: MessageDescriptor<VerifyEmailRl> = {
  name: 'VerifyEmailRl',
  fields: [{
    name: 'tokenId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ResetPasswordRl {
  tokenId?: string,
}

export let RESET_PASSWORD_RL: MessageDescriptor<ResetPasswordRl> = {
  name: 'ResetPasswordRl',
  fields: [{
    name: 'tokenId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AppRl {
  main?: MainAppRl,
  replacePrimaryPaymentMethod?: ReplacePrimaryPaymentMethodRl,
  verifyEmail?: VerifyEmailRl,
  resetPassword?: ResetPasswordRl,
  marketing?: Empty,
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
    name: 'verifyEmail',
    index: 3,
    messageType: VERIFY_EMAIL_RL,
  }, {
    name: 'resetPassword',
    index: 4,
    messageType: RESET_PASSWORD_RL,
  }, {
    name: 'marketing',
    index: 5,
    messageType: EMPTY,
  }],
};
