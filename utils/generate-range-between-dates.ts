import dayjs from 'dayjs';

export function generateNextDays(amount: number) {
  const today = dayjs().startOf('day');
  const dates: Date[] = [];

  let compareDate = today;

  for (let i = 0; i < amount; i++) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
  }

  return dates;
}
