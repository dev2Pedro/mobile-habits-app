import { TouchableOpacity, Dimensions, TouchableOpacityProps } from 'react-native';
import clsx from 'clsx';
import { generateProgressPercentage } from 'utils/generate-progress-percentage';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = 32;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  (Dimensions.get('window').width - SCREEN_HORIZONTAL_PADDING) / WEEK_DAYS - DAY_MARGIN_BETWEEN;

interface Props extends TouchableOpacityProps {
  amountOfHabits?: number;
  amountCompleted?: number;
  date: Date;
}

export function HabitDay({ amountOfHabits = 0, amountCompleted = 0, date, ...rest }: Props) {
  const amountAccomplishedPercentage =
    amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0;
  return (
    <TouchableOpacity
      className={clsx('m-1 rounded-lg border-2', {
        ['border-zinc-800 bg-zinc-900']: amountAccomplishedPercentage === 0,
        ['border-violet-700 bg-violet-900']:
          amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
        ['border-violet-800 bg-violet-600']:
          amountAccomplishedPercentage > 20 && amountAccomplishedPercentage < 40,
        ['border-violet-700 bg-violet-500']:
          amountAccomplishedPercentage > 40 && amountAccomplishedPercentage < 60,
        ['border-violet-500 bg-violet-600']:
          amountAccomplishedPercentage > 60 && amountAccomplishedPercentage < 80,
        ['border-violet-400 bg-violet-500']: amountAccomplishedPercentage > 80,
      })}
      style={{
        width: DAY_SIZE,
        height: DAY_SIZE,
      }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
