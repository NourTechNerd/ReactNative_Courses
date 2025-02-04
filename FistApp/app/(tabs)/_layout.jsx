import { View, Text,Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import icons from '../icons.jsx'

const TabIcon = ({icon,color,name,focused}) =>
{
  return (
    <View className= "flex flex-col items-center justify-center gap-1">
      <Image
      source = {icon}
      resizeMode = "contain" // Ensures the entire image is visible within the container.
      tintColor = {color}
      className = "w-6 h-6"
      />
      <Text className= {`${focused ? 'font-psemibold' : 'font-semibold'} text-[10px]`}>
      {name}
      </Text> 
    </View>
  )

}

const _layout = () => {
  return (
    <View className = "flex-row w-full absolute bottom-0 h-24">
      <Tabs
      screenOptions={
        {
          tabBarShowLabel: false, // Hides the default labels on the tab bar.
        }
      }
      >
        <Tabs.Screen 
        name="Home" // It's the name of the route.
        options={
          {
            headerShown: false, // Hides the header.
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