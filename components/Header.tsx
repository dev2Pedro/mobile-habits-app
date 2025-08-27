import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../assets/logo.svg';
import colors from 'tailwindcss/colors';

export function Header() {
  return (
    <View className="mt-14 w-full flex-row items-center justify-between px-2">
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
        className="h-11 flex-row items-center rounded-lg border border-violet-500 px-4">
        <Feather name="plus" color={colors.violet[500]} size={20} />
        <Text className="ml-3 font-semibold text-base text-white">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
