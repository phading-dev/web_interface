import { Empty, EMPTY } from '../../empty';
import { MessageDescriptor } from '@selfage/message/descriptor';

export interface AccountPage {
  profile?: Empty,
  payment?: Empty,
  payout?: Empty,
  statements?: Empty,
}

export let ACCOUNT_PAGE: MessageDescriptor<AccountPage> = {
  name: 'AccountPage',
  fields: [{
    name: 'profile',
    index: 1,
    messageType: EMPTY,
  }, {
    name: 'payment',
    index: 2,
    messageType: EMPTY,
  }, {
    name: 'payout',
    index: 3,
    messageType: EMPTY,
  }, {
    name: 'statements',
    index: 4,
    messageType: EMPTY,
  }],
};
