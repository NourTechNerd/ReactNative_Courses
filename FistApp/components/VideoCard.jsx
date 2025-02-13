import { View, Text,Image,TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import icons from '../app/icons'


export default function VideoCard({video}) {
    const [IsPlaying, setIsPlaying] = useState(false);

  return (
    <View className= "flex flex-col space-y-2 mt-5 ml-5 mr-5">
        <View className = "flex flex-row items-center">
            <Image 
            source = {{uri : video.user.avatar}} 
            className = "w-10 h-10 rounded-md"/>
            <View className = "flex flex-col">    
                <Text className = "text-white font-pmedium text-[15px] ml-2" numberOfLines={1}>{video.title}</Text>
                <Text className = "text-white font-pregular text-[12px] ml-2" numberOfLines={1}>{video.user.username}</Text>
            </View>
            <TouchableOpacity className = "absolute right-0  h-8 w-8 items-end">
                <Image 
                source = {icons.menu}
                className = "w-5 h-5"
                resizeMode='contain'
                />
            </TouchableOpacity>
       
        </View>
        {
            IsPlaying ? (
                <Text>Playing</Text>
            )
            :
            (
                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => setIsPlaying(true)}
                className= "border-2 border-black-100 rounded-md overflow-hidden items-center justify-center">
                <Image 
                    source={{uri:video.thumbnail}}
                    className="w-[320px] h-[170px]"
                    resizeMode='cover'
                    />
                <Image 
                    source={icons.play}
                    className="w-10 h-10 absolute"
                    resizeMode='contain'
                    />
                
                </TouchableOpacity>

            )
        }
     
    </View>
  )
}