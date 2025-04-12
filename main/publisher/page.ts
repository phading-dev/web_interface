import { EnumDescriptor, MessageDescriptor } from '@selfage/message/descriptor';
import { EditingPage, EDITING_PAGE } from './editing/page';
import { MeterPage, METER_PAGE } from './meter/page';

export enum Page {
  CATALOG = 1,
  EDITING = 2,
  METER = 3,
}

export let PAGE: EnumDescriptor<Page> = {
  name: 'Page',
  values: [{
    name: 'CATALOG',
    value: 1,
  }, {
    name: 'EDITING',
    value: 2,
  }, {
    name: 'METER',
    value: 3,
  }]
}

export interface PublisherPage {
  page?: Page,
  editing?: EditingPage,
  meter?: MeterPage,
}

export let PUBLISHER_PAGE: MessageDescriptor<PublisherPage> = {
  name: 'PublisherPage',
  fields: [{
    name: 'page',
    index: 1,
    enumType: PAGE,
  }, {
    name: 'editing',
    index: 2,
    messageType: EDITING_PAGE,
  }, {
    name: 'meter',
    index: 3,
    messageType: METER_PAGE,
  }],
};
