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
    <View className = "h-full flex flex-row">
      <Tabs
       screenOptions={{
        tabBarShowLabel: true, // Hides tab labels
        tabBarStyle: {
          backgroundColor: "#fff", // Sets the tab bar background color
          elevation: 0, // Removes shadow on Android
          borderTopWidth: 0, // Removes top border
        },
      }}
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
      <Tabs.Screen   
        name="Create" // It's the name of the route.
        options={
          {
            
            headerShown: false, // Hides the header.
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
              icon={icons.plus} 
              color={color} 
              name="Create" 
              focused={focused}
              />

            )
            
          }
        }
        />
       <Tabs.Screen   
        name="Profile" // It's the name of the route.
        options={
          {
            
            headerShown: false, // Hides the header.
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
              icon={icons.profile} 
              color={color} 
              name="Profile" 
              focused={focused}
              />

            )
            
          }
        }
        />
        
        <Tabs.Screen   
        name="Bookmark" // It's the name of the route.
        options={
          {
            
            headerShown: false, // Hides the header.
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
              icon={icons.bookmark} 
              color={color} 
              name="Bookmark" 
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