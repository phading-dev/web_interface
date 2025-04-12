import { EnumDescriptor, MessageDescriptor } from '@selfage/message/descriptor';

export enum Tab {
  CONSUMER = 1,
  PUBLISHER = 2,
}

export let TAB: EnumDescriptor<Tab> = {
  name: 'Tab',
  values: [{
    name: 'CONSUMER',
    value: 1,
  }, {
    name: 'PUBLISHER',
    value: 2,
  }]
}

export interface MarketingPage {
  tab?: Tab,
}

export let MARKETING_PAGE: MessageDescriptor<MarketingPage> = {
  name: 'MarketingPage',
  fields: [{
    name: 'tab',
    index: 1,
    enumType: TAB,
  }],
};
