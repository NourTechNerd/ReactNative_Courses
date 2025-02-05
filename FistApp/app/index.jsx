import {Text,ScrollView,View,Image} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from './images'
import CustomButton from '../components/CustomButton'

export default function RoutLayout() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}> 
        <View className="flex flex-col items-center h-full">
          <Image 
          className = "w-28 h-28"
          source = {Images.logo} 
          resizeMode='contain' />

          <Image 
          className = "w-[380px] h-[380px]"
          source={Images.cards} 
          resizeMode='contain' />
          <Text className="text-white text-center text-2xl m-2 font-pregular">
            The Discover the AI artistics with
            <Text className="text-secondary-200 font-pmedium"> Aora</Text>
          </Text>
          <Image
          source={Images.path}
          className="w-[136px] h-[15px] absolute bottom-[165px] right-20"
          resizeMode='contain'
          >
          </Image>

          <CustomButton>
          
          </CustomButton>
   
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

