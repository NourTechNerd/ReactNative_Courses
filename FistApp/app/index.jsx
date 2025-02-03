import {Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

export default function RoutLayout() {
  return (
    <View>
      <Text className="text-5xl text-white font-pbold">Index</Text>
      <Link href="/Home" className='text-2xl text-purple-500'>Go to Home</Link>
    </View>
  )
}

