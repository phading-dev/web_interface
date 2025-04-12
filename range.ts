import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

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
