import { View, Text,Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import icons from '../icons.jsx'


export default function tabs_layout ()
{
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
            tabBarIcon: ({color}) => (
              <Image
              source = {icons.home}
              resizeMode = "contain" // Ensures the entire image is visible within the container.
              tintColor = {color}
              className = "w-6 h-6"
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
            tabBarIcon: ({color}) => (
              <Image
              source = {icons.plus}
              resizeMode = "contain" // Ensures the entire image is visible within the container.
              tintColor = {color}
              className = "w-6 h-6"
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
            tabBarIcon: ({color}) => (
              <Image
              source = {icons.profile}
              resizeMode = "contain" // Ensures the entire image is visible within the container.
              tintColor = {color}
              className = "w-6 h-6"
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
            tabBarIcon: ({color}) => (
              <Image
              source = {icons.bookmark}
              resizeMode = "contain" // Ensures the entire image is visible within the container.
              tintColor = {color}
              className = "w-6 h-6"
              />

            )
            
          }
        }
        />
      
      </Tabs>
    </View>
  )
}

