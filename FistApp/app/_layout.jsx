import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {Slot} from 'expo-router'


export default function App() {
  return (
    <View className="flex flex-row">
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

