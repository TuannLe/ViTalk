import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

export default function MessageScreen({ navigation }) {
    return (
        <View style={tw`flex w-full h-full bg-white`}>
            <View style={tw`flex flex-row items-center bg-blue-600`}>
                <TouchableOpacity
                    style={tw`p-3`}
                    onPress={() => navigation.goBack()}
                >
                    <IoniconsIcon name="arrow-back" style={tw`text-white text-2xl`} />
                </TouchableOpacity>
                <Text style={tw`flex-1 text-xl text-white font-medium`}>Username</Text>
                <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity
                        style={tw`p-3`}
                    >
                        <IoniconsIcon name="ios-call" style={tw`text-white text-2xl`} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`p-3`}
                    >
                        <IoniconsIcon name="ios-videocam" style={tw`text-white text-2xl`} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`p-3`}
                    >
                        <IoniconsIcon name="ios-ellipsis-horizontal-circle" style={tw`text-white text-2xl`} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}