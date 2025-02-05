import { View, TextInput } from 'react-native'
import React from 'react'

export default function CustomInputField({placeholderText,isPassword,Value,SetValue}) {
    function handleChange(text)
    {
        SetValue(text)
    }
  return (
    <View>
      <TextInput
      value= {Value}
      className="rounded-full border-2 border-secondary-100 p-3 m-3 min-w-[300px] h-12 text-white font-psemibold text-center focus:border-ternary bg-black-100"
      placeholder= {placeholderText}
      placeholderTextColor="#fff"
      secureTextEntry = {isPassword} // Makes the text hidden as dots
      onChangeText={handleChange}
      >

      </TextInput>
    </View>
  )
}