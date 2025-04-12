import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodePage, EPISODE_PAGE } from './episode/page';

export enum Page {
  EDIT_SEASON = 1,
  EDIT_EPISODE = 2,
}

export let PAGE: EnumDescriptor<Page> = {
  name: 'Page',
  values: [{
    name: 'EDIT_SEASON',
    value: 1,
  }, {
    name: 'EDIT_EPISODE',
    value: 2,
  }]
}

export interface EditingPage {
  seasonId?: string,
  page?: Page,
  episode?: EpisodePage,
}

export let EDITING_PAGE: MessageDescriptor<EditingPage> = {
  name: 'EditingPage',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'page',
    index: 2,
    enumType: PAGE,
  }, {
    name: 'episode',
    index: 3,
    messageType: EPISODE_PAGE,
  }],
};
