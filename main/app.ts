import { AuthPage, AUTH_PAGE } from './auth/page';
import { ChooseAccountPage, CHOOSE_ACCOUNT_PAGE } from './choose_account/page';
import { AccountPage, ACCOUNT_PAGE } from './account/page';
import { ConsumerPage, CONSUMER_PAGE } from './consumer/page';
import { PublisherPage, PUBLISHER_PAGE } from './publisher/page';
import { MessageDescriptor } from '@selfage/message/descriptor';

export interface MainApp {
  auth?: AuthPage,
  chooseAccount?: ChooseAccountPage,
  account?: AccountPage,
  consumer?: ConsumerPage,
  publisher?: PublisherPage,
}

export let MAIN_APP: MessageDescriptor<MainApp> = {
  name: 'MainApp',
  fields: [{
    name: 'auth',
    index: 1,
    messageType: AUTH_PAGE,
  }, {
    name: 'chooseAccount',
    index: 2,
    messageType: CHOOSE_ACCOUNT_PAGE,
  }, {
    name: 'account',
    index: 3,
    messageType: ACCOUNT_PAGE,
  }, {
    name: 'consumer',
    index: 4,
    messageType: CONSUMER_PAGE,
  }, {
    name: 'publisher',
    index: 5,
    messageType: PUBLISHER_PAGE,
  }],
};
