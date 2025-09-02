import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from 'components/BackButton';

export function New() {
  return (
    <SafeAreaView className="flex-1 bg-background px-8">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16, paddingLeft: 16 }}>
        <BackButton />
      </ScrollView>
    </SafeAreaView>
  );
}
