import { useDayjs } from '#imports';

const dayjs = useDayjs();

export const formatDate = (date?: string): string =>
  dayjs(date ?? new Date()).format('MM-DD-YYYY');
