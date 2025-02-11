import { View, Text ,FlatList} from 'react-native'
import React from 'react'
import { useGlobaContext } from '../../context/GlobalProvider'
import SearchInputField from '../../components/SearchInputField'

// We remove ScrollView and let FlatList handle the scrolling.

const Home = () => {
  const {User} = useGlobaContext();
  return (
    <View className="bg-primary h-full w-full">
      <FlatList
      data={[{id : 10},{id :22},{id : 39}]} // List of Items 
      keyExtractor={(item) => item.id} // Unique Key for each Item
      renderItem={({item}) => <Text className = "text-white">{item.id}</Text>} // Renders each Item
      // The Header of the List
      ListHeaderComponent={()=>
       <View className = "space-y-2 ml-3 mt-3">
          <Text className = "text-white text-lg font-pmedium">
          Welocome to Aora</Text>
          <Text className = "text-white text-3xl font-pbold">{User.username}</Text>
           <SearchInputField>
            
           </SearchInputField>
       </View>
      }
      >

      </FlatList>
    </View>
  )
}

export default Home