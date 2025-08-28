import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { HabitDay, DAY_SIZE } from '../components/HabitDay';
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();

export function Home() {
  return (
    <View className="flex-1 bg-background px-4 pt-8">
      <Header />

      <View className="mb-2 mt-6 flex-row">
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            style={{
              width: DAY_SIZE,
              color: '#a1a1aa',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              margin: 4,
            }}>
            {weekDay}
          </Text>
        ))}
      </View>

      <View className="flex-row flex-wrap">
        {datesFromYearStart.slice(0, 60).map((date) => (
          <HabitDay key={date.toISOString()} />
        ))}
      </View>
    </View>
  );
}
