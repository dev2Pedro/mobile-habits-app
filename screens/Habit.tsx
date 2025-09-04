import { ScrollView, SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BackButton } from 'components/BackButton';
import dayjs from 'dayjs';

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1E1E', paddingHorizontal: 32 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 100 }}>
        <BackButton />

        <Text
          style={{
            marginTop: 24,
            fontWeight: '600',
            fontSize: 18,
            color: '#A1A1AA',
            textTransform: 'lowercase',
          }}>
          {dayOfWeek}
        </Text>

        <Text
          style={{
            fontWeight: '500',
            fontSize: 32,
            color: '#A1A1AA',
          }}>
          {dayAndMonth}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
