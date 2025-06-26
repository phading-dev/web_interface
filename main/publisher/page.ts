import { SeasonState, SEASON_STATE } from '@phading/product_service_interface/show/season_state';
import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Empty, EMPTY } from '../../empty';

export interface ListPageRl {
  seasonState?: SeasonState,
}

export let LIST_PAGE_RL: MessageDescriptor<ListPageRl> = {
  name: 'ListPageRl',
  fields: [{
    name: 'seasonState',
    index: 1,
    enumType: SEASON_STATE,
  }],
};

export interface SearchPageRl {
  seasonState?: SeasonState,
  query?: string,
}

export let SEARCH_PAGE_RL: MessageDescriptor<SearchPageRl> = {
  name: 'SearchPageRl',
  fields: [{
    name: 'seasonState',
    index: 1,
    enumType: SEASON_STATE,
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

export interface EpisodeDetailsPage {
  seasonId?: string,
  episodeId?: string,
}

export let EPISODE_DETAILS_PAGE: MessageDescriptor<EpisodeDetailsPage> = {
  name: 'EpisodeDetailsPage',
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

export interface PublisherPageRl {
  list?: ListPageRl,
  search?: SearchPageRl,
  create?: Empty,
  seasonDetails?: SeasonDetailsPage,
  episodeDetails?: EpisodeDetailsPage,
  stats?: Empty,
}

export let PUBLISHER_PAGE_RL: MessageDescriptor<PublisherPageRl> = {
  name: 'PublisherPageRl',
  fields: [{
    name: 'list',
    index: 1,
    messageType: LIST_PAGE_RL,
  }, {
    name: 'search',
    index: 2,
    messageType: SEARCH_PAGE_RL,
  }, {
    name: 'create',
    index: 3,
    messageType: EMPTY,
  }, {
    name: 'seasonDetails',
    index: 4,
    messageType: SEASON_DETAILS_PAGE,
  }, {
    name: 'episodeDetails',
    index: 5,
    messageType: EPISODE_DETAILS_PAGE,
  }, {
    name: 'stats',
    index: 6,
    messageType: EMPTY,
  }],
};
