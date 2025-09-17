import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';

import { api } from 'lib/axios';
import { generateNextDaysFrom } from '../utils/generate-range-between-dates';

import { HabitDay, DAY_SIZE } from '../components/HabitDay';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const minimumSummaryDatesSizes = 18 * 5;

type SummaryProps = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export function Home() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps | null>(null);
  const [dates, setDates] = useState<Date[]>([]);
  const { navigate } = useNavigation();

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get('/summary');
      console.log('📌 Response data:', response.data);
      setSummary(response.data);

      // Pega a data do primeiro hábito
      const firstHabitDate = response.data[0]?.date;
      const generatedDates = firstHabitDate
        ? generateNextDaysFrom(firstHabitDate, 30)
        : generateNextDaysFrom(new Date(), 30);
      setDates(generatedDates);
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos');
      console.log('❌ API error:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const amountOfDaysToFill = minimumSummaryDatesSizes - dates.length;

  if (loading) {
    return <Loading />;
  }

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
        {summary && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
            {dates.slice(0, minimumSummaryDatesSizes).map((date) => {
              const dayWithHabits = summary.find((day) =>
                dayjs(date).isSame(dayjs(day.date), 'day')
              );

              return (
                <HabitDay
                  key={date.toISOString()}
                  date={date}
                  amountOfHabits={dayWithHabits?.amount}
                  amountCompleted={dayWithHabits?.completed}
                  onPress={() => navigate('habit', { date: date.toISOString() })}
                />
              );
            })}

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
        )}
      </ScrollView>
    </View>
  );
}
