import { View, Text,FlatList } from 'react-native'
import {useState} from 'react'
import * as Animatable from 'react-native-animatable';



const zoomIn = {
  0 :{scale :0.9,},
  1:{scale :1,}
}
const zoomOut = {
  0 :{scale :0.9,},
  1:{scale :1,}
}


function TrendingItem({item,activeItem})
{
  return (
    <Animatable.View
    className = "mr-5"
    animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
    duration={500} // in ms
    ></Animatable.View>
  )
}

export default function Trending({posts}) {
  const [activeItem, setActiveItem] = useState(posts[0]);
  return (
    <View>
      <FlatList
      data = {posts}
      keyExtractor={(item) => item.$id}
      renderItem={({item}) => <TrendingItem item={item} activeItem={activeItem} />}
      horizontal
      >

      </FlatList>
    </View>
  )
}













