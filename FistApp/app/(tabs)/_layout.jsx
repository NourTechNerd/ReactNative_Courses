import { View, Text } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import icons from '../icons.jsx'

const TabIcon = ({icon,color,name,focused}) =>
{
  return (
    <View>
      <Image
      source = {icon}
      resizeMode = "contain"
      tintColor = {color}
      className = "w-6 h-6"
      />
      <Text className="text-xs font-pbold text-white">{name}</Text>
    </View>
  )

}
const _layout = () => {
  return (
    <View>
      <Tabs>
        <Tabs.Screen 
        name="Home"
        options={
          {
            title: "Home",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
              icon={icons.home} 
              color={color} 
              name="Home" 
              focused={focused}
              />

            )
            
          }
        }
        />
      </Tabs>
    </View>
  )
}

export default _layout