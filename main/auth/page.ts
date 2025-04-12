import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AuthPage {
  initAccountType?: number,
}

export let AUTH_PAGE: MessageDescriptor<AuthPage> = {
  name: 'AuthPage',
  fields: [{
    name: 'initAccountType',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
