import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {Slot} from 'expo-router'


export default function App() {
  return (
    <View className="flex flex-col items-center justify-center h-screen bg-primary">
      <Text className= "text-2xl font-bold text-secondary">Header</Text>
      <Slot />
      <Text>Footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

