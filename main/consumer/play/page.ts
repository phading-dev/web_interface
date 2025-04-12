import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

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
