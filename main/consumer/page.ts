import { EnumDescriptor, MessageDescriptor } from '@selfage/message/descriptor';
import { PlayPage, PLAY_PAGE } from './play/page';
import { RecommendationPage, RECOMMENDATION_PAGE } from './recommendation/page';
import { MeterPage, METER_PAGE } from './meter/page';

export enum Page {
  PLAY = 1,
  RECOMMENDATION = 2,
  METER = 3,
}

export let PAGE: EnumDescriptor<Page> = {
  name: 'Page',
  values: [{
    name: 'PLAY',
    value: 1,
  }, {
    name: 'RECOMMENDATION',
    value: 2,
  }, {
    name: 'METER',
    value: 3,
  }]
}

export interface ConsumerPage {
  page?: Page,
  play?: PlayPage,
  recommendation?: RecommendationPage,
  meter?: MeterPage,
}

export let CONSUMER_PAGE: MessageDescriptor<ConsumerPage> = {
  name: 'ConsumerPage',
  fields: [{
    name: 'page',
    index: 1,
    enumType: PAGE,
  }, {
    name: 'play',
    index: 2,
    messageType: PLAY_PAGE,
  }, {
    name: 'recommendation',
    index: 3,
    messageType: RECOMMENDATION_PAGE,
  }, {
    name: 'meter',
    index: 4,
    messageType: METER_PAGE,
  }],
};
