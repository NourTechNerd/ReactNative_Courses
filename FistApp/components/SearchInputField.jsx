import { View, TextInput,TouchableOpacity,Image } from 'react-native'
import {useState} from 'react'
import icons from '../app/icons'


export default function SearchInputField({placeholderText,Value,SetValue}) {
    function handleChange(text)
    {
        //SetValue(text)
    }

  return (
    <View className = "flex flex-row items-center p-2 justify-center">
      <TextInput
      value= {Value}
      className="text-black-100 rounded-xl border-2 border-black-200 h-14 font-pregular  focus:border-secondary-200 bg-black-100 w-full px-3"
      placeholder= {placeholderText}
      placeholderTextColor = "#fff"
    
      onChangeText={handleChange}
      >
      </TextInput>

      <TouchableOpacity className="absolute right-3 h-10 w-12 items-center justify-center rounded-xl">
      <Image
      source = {icons.search}
      resizeMode = 'contain'
      className = "w-6 h-6"
      />
      </TouchableOpacity>

    
    </View>
  )
}