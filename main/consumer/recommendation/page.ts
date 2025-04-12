import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

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
