import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface ReplacePrimaryPaymentMethod {
  accountId?: string,
}

export let REPLACE_PRIMARY_PAYMENT_METHOD: MessageDescriptor<ReplacePrimaryPaymentMethod> = {
  name: 'ReplacePrimaryPaymentMethod',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};
