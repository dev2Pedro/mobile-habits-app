import { View, ScrollView, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BackButton } from 'components/BackButton';

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  console.log(date);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1E1E', paddingHorizontal: 32 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 18, paddingBottom: 100 }}>
        <BackButton />
      </ScrollView>
    </SafeAreaView>
  );
}
