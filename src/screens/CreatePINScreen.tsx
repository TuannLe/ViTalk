import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

export default function CreatePINScreen({ navigation }) {
    return (
        <View style={tw`flex justify-center w-full h-full px-5 relative bg-white`}>
            <View style={tw`flex flex-row items-center absolute inset-x-0 top-0`}>
                <TouchableOpacity
                    style={tw`px-5 py-4`}
                    onPress={() => navigation.goBack()}
                >
                    <IoniconsIcon name="arrow-back" style={tw`text-black text-2xl`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>Create New PIN</Text>
            </View>
            <View style={tw`flex items-center`}>
                <Text style={tw`text-black text-base text-center`}>Add a PIN number to make your account more secure.</Text>
                <View style={tw`flex flex-row w-full justify-between my-8`}>
                    <TextInput
                        style={tw`bg-[#f8f8f8] px-7 text-base text-center rounded-md border border-gray-200`}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                    <TextInput
                        style={tw`bg-[#f8f8f8] px-7 text-base text-center rounded-md border border-gray-200`}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                    <TextInput
                        style={tw`bg-[#f8f8f8] px-7 text-base text-center rounded-md border border-gray-200`}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                    <TextInput
                        style={tw`bg-[#f8f8f8] px-7 text-base text-center rounded-md border border-gray-200`}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={tw`py-2.5 rounded-full bg-blue-600 absolute inset-x-5 bottom-8`}
                onPress={() => navigation.navigate('CreatePIN')}
            >
                <Text style={tw`text-base text-white font-medium text-center`}>Finish</Text>
            </TouchableOpacity>
        </View>
    )
}