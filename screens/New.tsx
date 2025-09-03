import { ScrollView, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from 'components/BackButton';
import { useState } from 'react';
import { Checkbox } from 'components/CheckBox';

const avaiableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export function New() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1E1E', paddingHorizontal: 32 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16, paddingLeft: 16 }}>
        <BackButton />

        <Text
          style={{
            marginTop: 24,
            fontFamily: 'Inter_800ExtraBold',
            fontSize: 24,
            color: '#FFFFFF',
          }}>
          Criar hábito
        </Text>

        <Text
          style={{
            marginTop: 24,
            fontFamily: 'Inter_600SemiBold',
            fontSize: 16,
            color: '#FFFFFF',
          }}>
          Qual seu comprometimento?
        </Text>

        <TextInput
          style={{
            height: 48,
            paddingLeft: 16,
            borderRadius: 8,
            marginTop: 12,
            backgroundColor: '#4a4a51',
            color: '#FFFFFF',
            borderWidth: isFocused ? 2 : 0, // borda quando focado
            borderColor: isFocused ? '#22c55e' : 'transparent',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Digite seu hábito"
          placeholderTextColor="#AAAAAA"
        />

        {avaiableWeekDays.map((weekDay, index) => {
          return <Checkbox key={weekDay} title={weekDay} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
