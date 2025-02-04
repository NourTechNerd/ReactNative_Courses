import { View, Text,Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import icons from '../icons.jsx'

const TabIcon = ({icon,color,name,focused}) =>
{
  return (
    <View>
      <Image
      source = {icon}
      resizeMode = "contain" // Ensures the entire image is visible within the container.
      tintColor = {color}
      className = "w-6 h-6"
      />
      <Text className="text-xs font-bold">{name}</Text>
    </View>
  )

}

const _layout = () => {
  return (
    <View className = "flex-row w-full absolute bottom-0">
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