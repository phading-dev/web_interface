import { SeasonState, SEASON_STATE } from '@phading/product_service_interface/show/season_state';
import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { DaysRange, DAYS_RANGE, MonthsRange, MONTHS_RANGE } from '../../range';
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

export interface SeasonDetailsPageRl {
  seasonId?: string,
}

export let SEASON_DETAILS_PAGE_RL: MessageDescriptor<SeasonDetailsPageRl> = {
  name: 'SeasonDetailsPageRl',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UsagePageRl {
  days?: DaysRange,
  months?: MonthsRange,
}

export let USAGE_PAGE_RL: MessageDescriptor<UsagePageRl> = {
  name: 'UsagePageRl',
  fields: [{
    name: 'days',
    index: 1,
    messageType: DAYS_RANGE,
  }, {
    name: 'months',
    index: 2,
    messageType: MONTHS_RANGE,
  }],
};

export interface PublisherPageRl {
  list?: ListPageRl,
  search?: SearchPageRl,
  create?: Empty,
  seasonDetails?: SeasonDetailsPageRl,
  usage?: UsagePageRl,
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
    messageType: SEASON_DETAILS_PAGE_RL,
  }, {
    name: 'usage',
    index: 5,
    messageType: USAGE_PAGE_RL,
  }],
};
