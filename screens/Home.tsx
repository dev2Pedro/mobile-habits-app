import { View, Text, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { HabitDay, DAY_SIZE } from '../components/HabitDay';
import { generateNextDays } from '../utils/generate-range-between-dates';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateNextDays(5);
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length;

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
          {datesFromYearStart.slice(0, minimumSummaryDatesSizes).map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                style={{
                  width: DAY_SIZE,
                  height: DAY_SIZE,
                  margin: 4,
                  backgroundColor: '#18181b',
                  borderWidth: 2,
                  borderColor: '#27272a',
                  borderRadius: 8,
                  opacity: 0.4,
                }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
