import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function InfoCallScreen({ navigation }) {
    return (
        <View style={tw`flex w-full h-full`}>
            <TouchableOpacity
                style={tw`p-2`}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name='ios-chevron-back-outline' style={tw`text-3xl text-blue-600`} />
            </TouchableOpacity>
            <View style={tw`flex w-full h-full px-4`}>
                <View style={tw`flex items-center`}>
                    <Image
                        source={{ uri: 'https://vcdn1-ngoisao.vnecdn.net/2022/09/26/-7973-1664172690.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=FQtlZIsaei8ejk9m77-Lbg' }}
                        style={tw`w-30 h-30 rounded-full`}
                    />
                    <Text style={tw`text-2xl text-black font-medium my-3`}>Username</Text>
                </View>
                <View style={tw`flex flex-row w-full justify-between`}>
                    <TouchableOpacity
                        style={tw`w-14 h-14 rounded-full bg-gray-200`}
                    >
                        <Ionicons name="ios-call" size={28} style={tw`text-black text-center m-auto`} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`w-14 h-14 rounded-full bg-gray-200`}
                    >
                        <Ionicons name="ios-videocam" size={32} style={tw`text-black text-center m-auto`} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`w-14 h-14 rounded-full bg-gray-200`}
                    >
                        <Ionicons name="ios-chatbox" size={28} style={tw`text-black text-center m-auto`} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`w-14 h-14 rounded-full bg-gray-200`}
                    >
                        <Ionicons name="ios-information-circle" size={32} style={tw`text-black text-center m-auto`} />
                    </TouchableOpacity>
                </View>
                <View style={tw`mt-3`}>
                    <Text style={tw`text-xl text-gray-500 font-medium p-2`}>Chủ nhật</Text>
                    <View style={tw`bg-white rounded-md p-3`}>
                        <Text style={tw`text-xl text-black`}>13.45</Text>
                        <Text style={tw`text-base`}>Cuộc gọi video đi - 32 phút, 7 giây</Text>
                    </View>
                </View>
                <View style={tw`mt-3`}>
                    <Text style={tw`text-xl text-gray-500 font-medium p-2`}>Quyền riêng tư &#38; hỗ trợ</Text>
                    <View style={tw`bg-white rounded-md`}>
                        <TouchableOpacity style={tw`flex flex-row items-center p-3`}>
                            <Ionicons name='ios-remove-circle' style={tw`text-2xl text-black w-8`} />
                            <Text style={tw`text-xl text-black`}>Chặn</Text>
                        </TouchableOpacity>
                        <View style={tw`border-b border-gray-200 ml-11`}></View>
                        <TouchableOpacity style={tw`flex flex-row items-center p-3`}>
                            <Ionicons name='ios-warning-sharp' style={tw`text-2xl text-black w-8`} />
                            <Text style={tw`text-xl text-black`}>Báo cáo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}