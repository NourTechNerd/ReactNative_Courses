import { View, Text ,FlatList} from 'react-native'
import {useState} from 'react'
import { useGlobaContext } from '../../context/GlobalProvider'
import SearchInputField from '../../components/SearchInputField'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'

// We remove ScrollView and let FlatList handle the scrolling.

const Home = () => {
  const {User} = useGlobaContext();
  const [query, setQuery] = useState("");


  return (
    <View className="bg-primary h-full w-full">
      <FlatList
      //data={[{id : 10},{id :22},{id : 39}]} // List of Items 
      data={[]} 
      keyExtractor={(item) => item.id} // Unique Key for each Item
      renderItem={({item}) => <Text className = "text-white">{item.id}</Text>} // Renders each Item
      // The Header of the List
      ListHeaderComponent={()=>
       <View className = "space-y-2 ml-3 mt-3">
          {/*Welcome Message */}
            <Text className = "text-white text-lg font-pmedium">
            Welocome to Aora</Text>
            <Text className = "text-white text-3xl font-pbold">{User.username}</Text>

          {/* Search Input Field */}
            <SearchInputField
            placeholderText="Search for a video"
            SetValue={setQuery}
            />

          {/* Latest added videos to Aora (Horizantal Scroling) */}
            <View className = "mt-10 ml-3 space-y-2">
              <Text className= "text-white">Latest added videos to Aora</Text>
              <Trending posts={[{id : 1},{id :2},{id : 3}]} />
            </View>

       </View>
      }
     
      //Programme what will be rendered if the list is empty
      ListEmptyComponent={()=>
        <View>
          <EmptyState
          title={"No Videos Found"}
          subtitle={"Be the first one to upload a video !"}
          />
        </View>
      }
      >
      </FlatList>

    </View>
  )
}

export default Home