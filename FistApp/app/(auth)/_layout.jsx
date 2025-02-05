import {Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
export default function Auth_layout() {
  return (
    <>
      <Text>Auth_layout</Text>
      <Stack
      initialRouteName='SignIn'
      >
        <Stack.Screen
          name="SignIn"
        />

        <Stack.Screen
          name="SignUp"
        />
      </Stack>
    </>
  )
}

