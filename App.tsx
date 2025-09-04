import './lib/dayjs';
import { StatusBar, View } from 'react-native';
import './global.css';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';

import { Loading } from 'components/Loading';
import { Routes } from 'routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background">
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </View>
  );
}
