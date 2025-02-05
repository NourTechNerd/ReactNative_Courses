import {Text,ScrollView,View,Image} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from './images'
export default function RoutLayout() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}> 
        <View className="flex flex-col items-center">
          <Image 
          className = "w-28 h-28"
          source = {Images.logo} 
          resizeMode='contain' />

          <Image 
          className = "w-[380px] h-[380px]"
          source={Images.cards}  />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

