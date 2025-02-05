import { View, Text, ScrollView,Image } from 'react-native'
import {useState } from 'react'
import Images from '../images'
import CustomInputField from '../../components/CustomInputField'

export default function SignIn() {


  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")


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
        <CustomInputField
          Value = {Email}
          placeholderText={"Email"}
          isPassword = {false}
          SetValue={setEmail}
        />

        <CustomInputField
          Value={Password}
          placeholderText={"Password"}
          isPassword = {true}
          SetValue={setPassword}
        />

      </View>
      
    </ScrollView>
  )
}