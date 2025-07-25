import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountPageRl, ACCOUNT_PAGE_RL } from './account/page';
import { ConsumerPageRl, CONSUMER_PAGE_RL } from './consumer/page';
import { PublisherPageRl, PUBLISHER_PAGE_RL } from './publisher/page';

export interface ChooseAccountPage {
  accountId?: string,
}

export let CHOOSE_ACCOUNT_PAGE: MessageDescriptor<ChooseAccountPage> = {
  name: 'ChooseAccountPage',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface MainAppRl {
  chooseAccount?: ChooseAccountPage,
  account?: AccountPageRl,
  consumer?: ConsumerPageRl,
  publisher?: PublisherPageRl,
}

export let MAIN_APP_RL: MessageDescriptor<MainAppRl> = {
  name: 'MainAppRl',
  fields: [{
    name: 'chooseAccount',
    index: 1,
    messageType: CHOOSE_ACCOUNT_PAGE,
  }, {
    name: 'account',
    index: 2,
    messageType: ACCOUNT_PAGE_RL,
  }, {
    name: 'consumer',
    index: 3,
    messageType: CONSUMER_PAGE_RL,
  }, {
    name: 'publisher',
    index: 4,
    messageType: PUBLISHER_PAGE_RL,
  }],
};
