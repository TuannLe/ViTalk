import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function PreProfileScreen({ navigation }) {
    return (
        <View style={tw`flex w-full h-full px-5 relative bg-white`}>
            <View style={tw`flex flex-row items-center absolute inset-x-0 top-0`}>
                <TouchableOpacity
                    style={tw`px-5 py-4`}
                    onPress={() => navigation.goBack()}
                >
                    <IoniconsIcon name="arrow-back" style={tw`text-black text-2xl`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>Fill Your Profile</Text>
            </View>
            <View style={tw`flex items-center`}>
                <View style={tw`relative mb-10 mt-20`}>
                    <Image
                        style={tw`w-35 h-35 rounded-full`}
                        source={require('../assets/images/defaultAvatar.png')}
                    />
                    <TouchableOpacity
                        style={tw`px-2 py-1.5 bg-blue-600 rounded-md absolute bottom-0 right-2`}
                    >
                        <FontAwesome5 name='pen' style={tw`text-sm text-white`} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Full name"
                    style={tw`w-full mt-4 p-2 text-base bg-[#f8f8f8] rounded-md`}
                />
                <TextInput
                    placeholder="Date of Birth"
                    style={tw`w-full mt-4 p-2 text-base bg-[#f8f8f8] rounded-md`}
                />
                <TextInput
                    placeholder="Email"
                    style={tw`w-full mt-4 p-2 text-base bg-[#f8f8f8] rounded-md`}
                />
                <TextInput
                    placeholder="Bio"
                    style={tw`w-full mt-4 p-2 text-base bg-[#f8f8f8] rounded-md`}
                />
            </View>
            <TouchableOpacity
                style={tw`py-2.5 rounded-full bg-blue-600 absolute inset-x-5 bottom-8`}
                onPress={() => navigation.navigate('CreatePIN')}
            >
                <Text style={tw`text-base text-white font-medium text-center`}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}