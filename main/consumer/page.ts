import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Empty, EMPTY } from '../../empty';

export enum SearchTarget {
  SEASON = 1,
  PUBLISHER = 2,
}

export let SEARCH_TARGET: EnumDescriptor<SearchTarget> = {
  name: 'SearchTarget',
  values: [{
    name: 'SEASON',
    value: 1,
  }, {
    name: 'PUBLISHER',
    value: 2,
  }]
}

export interface SearchPage {
  searchTarget?: SearchTarget,
  query?: string,
}

export let SEARCH_PAGE: MessageDescriptor<SearchPage> = {
  name: 'SearchPage',
  fields: [{
    name: 'searchTarget',
    index: 1,
    enumType: SEARCH_TARGET,
  }, {
    name: 'query',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SeasonDetailsPage {
  seasonId?: string,
}

export let SEASON_DETAILS_PAGE: MessageDescriptor<SeasonDetailsPage> = {
  name: 'SeasonDetailsPage',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface PlayPage {
  seasonId?: string,
  episodeId?: string,
}

export let PLAY_PAGE: MessageDescriptor<PlayPage> = {
  name: 'PlayPage',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface PublisherShowroomPage {
  accountId?: string,
}

export let PUBLISHER_SHOWROOM_PAGE: MessageDescriptor<PublisherShowroomPage> = {
  name: 'PublisherShowroomPage',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ConsumerPageRl {
  home?: Empty,
  listTopRated?: Empty,
  listRecentPremieres?: Empty,
  search?: SearchPage,
  seasonDetails?: SeasonDetailsPage,
  play?: PlayPage,
  publisherShowroom?: PublisherShowroomPage,
  history?: Empty,
  watchLater?: Empty,
  usage?: Empty,
}

export let CONSUMER_PAGE_RL: MessageDescriptor<ConsumerPageRl> = {
  name: 'ConsumerPageRl',
  fields: [{
    name: 'home',
    index: 1,
    messageType: EMPTY,
  }, {
    name: 'listTopRated',
    index: 2,
    messageType: EMPTY,
  }, {
    name: 'listRecentPremieres',
    index: 3,
    messageType: EMPTY,
  }, {
    name: 'search',
    index: 4,
    messageType: SEARCH_PAGE,
  }, {
    name: 'seasonDetails',
    index: 5,
    messageType: SEASON_DETAILS_PAGE,
  }, {
    name: 'play',
    index: 6,
    messageType: PLAY_PAGE,
  }, {
    name: 'publisherShowroom',
    index: 7,
    messageType: PUBLISHER_SHOWROOM_PAGE,
  }, {
    name: 'history',
    index: 8,
    messageType: EMPTY,
  }, {
    name: 'watchLater',
    index: 9,
    messageType: EMPTY,
  }, {
    name: 'usage',
    index: 10,
    messageType: EMPTY,
  }],
};
