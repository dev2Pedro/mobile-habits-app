import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

export function Checkbox() {
  return (
    <TouchableOpacity activeOpacity={0.7} className="mb-2 flex-row items-center">
      <View className="h-8 w-8 items-center justify-center rounded-lg bg-green-500">
        <Feather name="check" size={20} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}
