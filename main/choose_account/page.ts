import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface ChooseAccountPage {
  preSelectedAccountId?: string,
}

export let CHOOSE_ACCOUNT_PAGE: MessageDescriptor<ChooseAccountPage> = {
  name: 'ChooseAccountPage',
  fields: [{
    name: 'preSelectedAccountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};
