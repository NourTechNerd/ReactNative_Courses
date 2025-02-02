import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {Slot} from 'expo-router'


export default function App() {
  return (
    <View className="flex flex-col">
      <Text className= "font-bold">Header</Text>
      <Slot />
      <Text>Footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

