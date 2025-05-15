const dayjs = useDayjs();

export const formatDate = (date: string): string =>
  dayjs(date).format('MM-DD-YYYY');
