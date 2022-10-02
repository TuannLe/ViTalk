import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CallItem({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
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
                <View style={tw`flex flex-row items-center`}>
                    {/* <MaterialCommunityIcons name='arrow-up-box' style={tw`text-base text-green-500 mr-1`} /> */}
                    {/* <Text>Outgoing | Today, 16.35</Text> */}
                    {/* <MaterialCommunityIcons name='arrow-down-box' style={tw`text-base text-blue-500 mr-1`} /> */}
                    {/* <Text>Incoming | Today, 16.35</Text> */}
                    <MaterialCommunityIcons name='close-box' style={tw`text-base text-red-500 mr-1`} />
                    <Text>Missed (3) | Today, 16.35</Text>
                </View>
            </View>
            <TouchableOpacity
                style={tw`py-1.5 px-2`}
                onPress={() => navigation.navigate('InfoCallStack')}
            >
                <Ionicons name="ios-information-circle" style={tw`text-2xl text-gray-300`} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}