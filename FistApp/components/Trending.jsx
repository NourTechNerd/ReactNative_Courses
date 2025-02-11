import { View, Text,FlatList } from 'react-native'
import React from 'react'

export default function Trending({posts}) {
  return (
    <View>
      <Text className = "text-white">Trending</Text>
      <FlatList
      data = {posts}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Text className = "text-white">{item.id}</Text>}
      horizontal
      >

      </FlatList>
    </View>
  )
}













