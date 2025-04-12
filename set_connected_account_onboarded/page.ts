import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface SetConnectedAccountOnboarded {
  accountId?: string,
}

export let SET_CONNECTED_ACCOUNT_ONBOARDED: MessageDescriptor<SetConnectedAccountOnboarded> = {
  name: 'SetConnectedAccountOnboarded',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};
