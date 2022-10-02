import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function MenuScreen() {
    return (
        <View style={tw`flex w-full h-full px-4 bg-white`}>
            <View style={tw`flex items-center py-2.5`}>
                <Text style={tw`text-xl font-medium text-black`}>Settings</Text>
            </View>
            <View>
                <View style={tw`flex flex-row items-center`}>
                    <Image
                        source={{ uri: 'https://vcdn1-ngoisao.vnecdn.net/2022/09/26/-7973-1664172690.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=FQtlZIsaei8ejk9m77-Lbg' }}
                        style={tw`w-15 h-15 rounded-full`}
                    />
                    <View style={tw`flex flex-1 ml-3`}>
                        <Text style={tw`text-base text-black font-medium`}>Username</Text>
                        <Text style={tw`text-sm`}>Email</Text>
                    </View>
                    <TouchableOpacity
                        style={tw`py-3 pl-3`}
                    >
                        <MaterialCommunityIcons name='qrcode-scan' size={22} style={tw`text-blue-500`} />
                    </TouchableOpacity>
                </View>
                <View>
                </View>
                <TouchableOpacity
                    style={tw`flex flex-row items-center`}
                >
                    <Ionicons name='ios-person-outline' style={tw`text-2xl text-black`} />
                    <Text style={tw`flex-1 text-base text-black ml-3`}>Account</Text>
                    <Ionicons name='ios-chevron-forward-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}