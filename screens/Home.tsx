import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { HabitDay, DAY_SIZE } from '../components/HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="mb-2 mt-6 flex-row">
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            style={{
              width: DAY_SIZE,
              color: '#a1a1aa', // zinc-400
              fontSize: 20, // text-xl
              fontWeight: 'bold',
              textAlign: 'center',
              margin: 4, // mesmo m-1 do HabitDay (m-1 = 4px)
            }}>
            {weekDay}
          </Text>
        ))}
      </View>

      <HabitDay />
    </View>
  );
}
