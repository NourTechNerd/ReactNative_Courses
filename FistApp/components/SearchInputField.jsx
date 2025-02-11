import { View, TextInput,TouchableOpacity,Image } from 'react-native'
import {useState} from 'react'
import icons from '../app/icons'


export default function SearchInputField({placeholderText,Value,SetValue}) {
    function handleChange(text)
    {
        //SetValue(text)
    }

  return (
    <View className = "flex flex-row items-center">
      <TextInput
      value= {Value}
      className="text-white rounded-xl border-2 border-black-200 min-w-[300px] h-14 font-pregular text-center focus:border-secondary-200 bg-black-100 m-3"
      placeholder= {placeholderText}
      placeholderTextColor = "#fff"
    
      onChangeText={handleChange}
      >
      </TextInput>

      <TouchableOpacity className="absolute right-10 h-10 w-12 items-center justify-center rounded-xl">
      <Image
      source = {icons.search}
      resizeMode = 'contain'
      className = "w-6 h-6"
      />
      </TouchableOpacity>

    
    </View>
  )
}