import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface EpisodePage {
  episodeId?: string,
}

export let EPISODE_PAGE: MessageDescriptor<EpisodePage> = {
  name: 'EpisodePage',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};
