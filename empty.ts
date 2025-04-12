import { MessageDescriptor } from '@selfage/message/descriptor';

export interface Empty {
}

export let EMPTY: MessageDescriptor<Empty> = {
  name: 'Empty',
  fields: [],
};
