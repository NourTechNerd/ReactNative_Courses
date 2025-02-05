import {Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
export default function Auth_layout() {
  return (
    <View className="h-full">
      <Stack
      >
        <Stack.Screen
          name="SignIn"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  )
}

