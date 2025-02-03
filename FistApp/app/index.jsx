import {Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

export default function RoutLayout() {
  return (
    <View>
      <Text className="text-5xl text-white font-pbold">Index</Text>
      <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
    </View>
  )
}

