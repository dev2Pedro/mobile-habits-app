import dayjs from 'dayjs';

export function generateNextDaysFrom(startDate: Date | string, amount: number) {
  const firstDay = dayjs(startDate).startOf('day');
  const dates: Date[] = [];

  let compareDate = firstDay;

  for (let i = 0; i < amount; i++) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
  }

  return dates;
}
