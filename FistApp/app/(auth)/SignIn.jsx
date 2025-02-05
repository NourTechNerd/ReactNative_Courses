import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import Images from '../images'

export default function SignIn() {
  return (
    <ScrollView className="bg-primary h-full w-full">
      <View className="items-center">
        <Image
        source={Images.logo}
        resizeMode='contain'
        className = "w-32 h-32"
        />
        <Text
        className = "text-white text-2xl font-pbold m-0"
        >Log In to Aora</Text>
      </View>
      
    </ScrollView>
  )
}