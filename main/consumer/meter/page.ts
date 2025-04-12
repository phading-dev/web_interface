import { DaysRange, DAYS_RANGE, MonthsRange, MONTHS_RANGE } from '../../../range';
import { MessageDescriptor } from '@selfage/message/descriptor';

export interface MeterPage {
  days?: DaysRange,
  months?: MonthsRange,
}

export let METER_PAGE: MessageDescriptor<MeterPage> = {
  name: 'MeterPage',
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
