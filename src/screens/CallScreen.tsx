import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import FeatherIcon from 'react-native-vector-icons/Feather'
import CallItem from '../components/call/CallItem'


const data = [
    {
        id: '1',
        username: 'admin',
        avatar: 'https://static1.dienanh.net/upload/202112/7b917f4c-826b-42b7-866a-21eee61ff762.jpg',
    },
    {
        id: '2',
        username: 'user1',
        avatar: 'https://static1.dienanh.net/upload/202112/7b917f4c-826b-42b7-866a-21eee61ff762.jpg',
    },
    {
        id: '3',
        username: 'user2',
        avatar: 'https://static1.dienanh.net/upload/202112/7b917f4c-826b-42b7-866a-21eee61ff762.jpg',
    },
    {
        id: '4',
        username: 'user3',
        avatar: 'https://static1.dienanh.net/upload/202112/7b917f4c-826b-42b7-866a-21eee61ff762.jpg',
    },
    {
        id: '5',
        username: 'user4',
        avatar: 'https://static1.dienanh.net/upload/202112/7b917f4c-826b-42b7-866a-21eee61ff762.jpg',
    },
    {
        id: '6',
        username: 'admin',
        avatar: 'https://static1.dienanh.net/upload/202112/7b917f4c-826b-42b7-866a-21eee61ff762.jpg',
    }
]
// const data = []

export default function CallScreen() {
    return (
        <View style={tw`flex w-full h-full bg-white px-4`}>
            <View style={tw`flex flex-row justify-center items-center relative py-2.5`}>
                <Text style={tw`text-xl font-medium text-black`}>Calls</Text>
                <TouchableOpacity
                    style={tw`absolute right-0 py-2.5 pl-3`}
                >
                    <FeatherIcon name='edit' style={tw`text-white text-blue-500 text-2xl`} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={tw`bg-[#f8f8f8] rounded-md py-1.5 text-base text-black`}
                placeholder='Search...'
            />
            {data.length ? (
                <FlatList
                    data={data}
                    renderItem={(item) => <CallItem item={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={tw`flex h-full items-center justify-center`}>
                    <Text style={tw`text-3xl text-blue-600 font-medium mb-4`}>You haven't call yet</Text>
                    <Text style={tw`text-base text-black`}>Call together with your friends and family</Text>
                    <Text style={tw`text-base text-black`}>with ViTalk right now!</Text>
                    <TouchableOpacity
                        style={tw`w-full py-3 bg-blue-600 rounded-full mt-10`}
                    >
                        <Text style={tw`text-base text-center text-white font-medium`}>Start new call</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}