import { TouchableOpacity, Dimensions, TouchableOpacityProps } from 'react-native';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = 32;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  (Dimensions.get('window').width - SCREEN_HORIZONTAL_PADDING) / WEEK_DAYS - DAY_MARGIN_BETWEEN;

interface Props extends TouchableOpacityProps {}

export function HabitDay({ ...rest }: Props) {
  return (
    <TouchableOpacity
      className="m-1 rounded-lg border-2 border-zinc-800 bg-zinc-900"
      style={{
        width: DAY_SIZE,
        height: DAY_SIZE,
      }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
