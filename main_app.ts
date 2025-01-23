import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface Empty {
}

export let EMPTY: MessageDescriptor<Empty> = {
  name: 'Empty',
  fields: [],
};

export interface DaysRange {
  startDate?: string,
  endDate?: string,
}

export let DAYS_RANGE: MessageDescriptor<DaysRange> = {
  name: 'DaysRange',
  fields: [{
    name: 'startDate',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endDate',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface MonthsRange {
  startMonth?: string,
  endMonth?: string,
}

export let MONTHS_RANGE: MessageDescriptor<MonthsRange> = {
  name: 'MonthsRange',
  fields: [{
    name: 'startMonth',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endMonth',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface BillingPage {
  range?: MonthsRange,
}

export let BILLING_PAGE: MessageDescriptor<BillingPage> = {
  name: 'BillingPage',
  fields: [{
    name: 'range',
    index: 1,
    messageType: MONTHS_RANGE,
  }],
};

export interface EarningsPage {
  range?: MonthsRange,
}

export let EARNINGS_PAGE: MessageDescriptor<EarningsPage> = {
  name: 'EarningsPage',
  fields: [{
    name: 'range',
    index: 1,
    messageType: MONTHS_RANGE,
  }],
};

export interface AccountPage {
  profile?: Empty,
  billing?: BillingPage,
  earnings?: EarningsPage,
}

export let ACCOUNT_PAGE: MessageDescriptor<AccountPage> = {
  name: 'AccountPage',
  fields: [{
    name: 'profile',
    index: 1,
    messageType: EMPTY,
  }, {
    name: 'billing',
    index: 2,
    messageType: BILLING_PAGE,
  }, {
    name: 'earnings',
    index: 3,
    messageType: EARNINGS_PAGE,
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

export interface RecommendationPage {
  query?: string,
  publisherId?: string,
}

export let RECOMMENDATION_PAGE: MessageDescriptor<RecommendationPage> = {
  name: 'RecommendationPage',
  fields: [{
    name: 'query',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'publisherId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ConsumerMeterPage {
  days?: DaysRange,
  months?: MonthsRange,
}

export let CONSUMER_METER_PAGE: MessageDescriptor<ConsumerMeterPage> = {
  name: 'ConsumerMeterPage',
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

export interface ConsumerPage {
  play?: PlayPage,
  recommendation?: RecommendationPage,
  meter?: ConsumerMeterPage,
}

export let CONSUMER_PAGE: MessageDescriptor<ConsumerPage> = {
  name: 'ConsumerPage',
  fields: [{
    name: 'play',
    index: 1,
    messageType: PLAY_PAGE,
  }, {
    name: 'recommendation',
    index: 2,
    messageType: RECOMMENDATION_PAGE,
  }, {
    name: 'meter',
    index: 3,
    messageType: CONSUMER_METER_PAGE,
  }],
};

export interface EditingEpisodePage {
  episodeId?: string,
}

export let EDITING_EPISODE_PAGE: MessageDescriptor<EditingEpisodePage> = {
  name: 'EditingEpisodePage',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface EditingPage {
  seasonId?: string,
  editingSeason?: Empty,
  editingEpisode?: EditingEpisodePage,
}

export let EDITING_PAGE: MessageDescriptor<EditingPage> = {
  name: 'EditingPage',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'editingSeason',
    index: 2,
    messageType: EMPTY,
  }, {
    name: 'editingEpisode',
    index: 3,
    messageType: EDITING_EPISODE_PAGE,
  }],
};

export interface PublisherMeterPage {
  days?: DaysRange,
  months?: MonthsRange,
}

export let PUBLISHER_METER_PAGE: MessageDescriptor<PublisherMeterPage> = {
  name: 'PublisherMeterPage',
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

export interface PublisherPage {
  catalog?: Empty,
  editing?: EditingPage,
  meter?: PublisherMeterPage,
}

export let PUBLISHER_PAGE: MessageDescriptor<PublisherPage> = {
  name: 'PublisherPage',
  fields: [{
    name: 'catalog',
    index: 1,
    messageType: EMPTY,
  }, {
    name: 'editing',
    index: 2,
    messageType: EDITING_PAGE,
  }, {
    name: 'meter',
    index: 3,
    messageType: PUBLISHER_METER_PAGE,
  }],
};

export interface MainApp {
  accountId?: string,
  account?: AccountPage,
  consumer?: ConsumerPage,
  publisher?: PublisherPage,
}

export let MAIN_APP: MessageDescriptor<MainApp> = {
  name: 'MainApp',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'account',
    index: 2,
    messageType: ACCOUNT_PAGE,
  }, {
    name: 'consumer',
    index: 3,
    messageType: CONSUMER_PAGE,
  }, {
    name: 'publisher',
    index: 4,
    messageType: PUBLISHER_PAGE,
  }],
};
