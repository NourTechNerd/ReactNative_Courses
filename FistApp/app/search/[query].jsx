import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';


export default function query() {
  const { query } = useLocalSearchParams();
  
  return (
    <View>
      <Text className="text-white text-3xl">{query}</Text>
    </View>
  )
}