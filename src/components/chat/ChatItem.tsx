import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

export default function ChatItem({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MessageStack')}
            style={tw`flex flex-row items-center mt-3`}
        >
            <View style={tw`relative`}>
                <Image
                    source={{ uri: item.item.avatar }}
                    style={tw`w-12 h-12 rounded-full`}
                />
                <View style={tw`absolute bottom-0 right-0 border border-white bg-blue-500 w-3 h-3 rounded-full`}></View>
            </View>
            <View style={tw`ml-3 flex-1`}>
                <Text style={tw`text-base text-black font-medium`}>{item.item.username}</Text>
                <Text style={tw`text-sm`}>Hello everyone</Text>
            </View>
        </TouchableOpacity>
    )
}