import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

export default function VerifyOTPScreen({ navigation }) {
    return (
        <View style={tw`flex justify-center w-full h-full px-5 relative bg-white`}>
            <View style={tw`flex flex-row items-center absolute inset-x-0 top-0`}>
                <TouchableOpacity
                    style={tw`px-5 py-4`}
                    onPress={() => navigation.goBack()}
                >
                    <IoniconsIcon name="arrow-back" style={tw`text-black text-2xl`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>OTP Code Verification</Text>
            </View>
            <View style={tw`flex items-center mt-10`}>
                <Text style={tw`text-black text-base`}>Code has been send to 09******38</Text>
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
                <Text style={tw`text-black text-base`}>Resend code in
                    <Text style={tw`text-blue-600 text-base`}> 55 </Text>
                    s
                </Text>
            </View>
            <TouchableOpacity
                style={tw`py-2.5 rounded-full bg-blue-600 absolute inset-x-5 bottom-8`}
                onPress={() => navigation.navigate('PreProfile')}
            >
                <Text style={tw`text-base text-white font-medium text-center`}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}