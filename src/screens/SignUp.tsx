import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {
    const navigation = useNavigation()
    return (
        <View style={tw`flex items-center justify-center w-full h-full px-10 relative`}>
            <Text style={tw`text-3xl text-blue-600 font-bold mb-8`}>Create New Account</Text>
            <TextInput
                placeholder="0000 000 000"
                style={tw`w-full bg-gray-200 py-1.5 rounded-lg`}
            />
            <TouchableOpacity
                style={tw`w-full py-2.5 rounded-full bg-blue-600`}
                onPress={() => navigation.navigate('VerifyOTP')}
            >
                <Text style={tw`text-base text-white font-medium text-center`}>Sign Up</Text>
            </TouchableOpacity>
            <View style={tw`flex flex-row items-center justify-center absolute inset-x-0 bottom-8`}>
                <Text style={tw`text-base text-black mr-2`}>Already have an account</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={tw`text-base font-medium text-blue-600`}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}