import { Alert, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from 'components/BackButton';
import { useState } from 'react';
import { Checkbox } from 'components/CheckBox';
import { api } from 'lib/axios';

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
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) => prevState.filter((weekDay) => weekDay !== weekDayIndex));
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

  async function handleCreateNewHabit() {
    try {
      if (!title.trim() || weekDays.length === 0) {
        Alert.alert('Novo hábito', 'Informe o nome do hábito e escolha a periodicidade.');
      }

      await api.post('/habits', {
        title,
        weekDays,
      });

      setTitle('');
      setWeekDays([]);
      Alert.alert('Novo hábito', 'Hábito criado com sucesso!');
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possivel criar o novo hábito.');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1E1E', paddingHorizontal: 32 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16, paddingLeft: 16, paddingBottom: 100 }}>
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
            marginBottom: 8,
            backgroundColor: '#18181B',
            color: '#FFFFFF',
            borderWidth: isFocused ? 2 : 1,
            borderColor: isFocused ? '#22c55e' : '#27272A',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Digite seu hábito"
          placeholderTextColor="#AAAAAA"
          onChangeText={setTitle}
          value={title}
        />

        <Text className="mb-2 mt-4 font-semibold text-base text-white">Qual a recorrência?</Text>

        {avaiableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox
              key={weekDay}
              title={weekDay}
              onPress={() => handleToggleWeekDay(index)}
              checked={weekDays.includes(index)}
            />
          );
        })}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCreateNewHabit}
          style={{
            marginTop: 24,
            height: 56,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            backgroundColor: '#16a34a',
          }}>
          <Feather name="check" size={20} color="#FFFFFF" />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: '600',
              fontSize: 16,
              color: '#FFFFFF',
            }}>
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
