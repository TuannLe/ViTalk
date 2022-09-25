import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation()
    return (
        <View style={tw`flex w-full h-full items-center justify-center px-10 relative`}>
            <Text style={tw`text-3xl text-blue-600 font-bold mb-8`}>Welcome to ViTalk!</Text>
            <TouchableOpacity
                style={tw`flex flex-row w-full items-center justify-center py-2.5 rounded-xl border border-gray-300`}
            >
                <Image
                    style={tw`w-6 h-6 mr-3`}
                    source={require('../assets/images/logo_facebook.png')}
                />
                <Text style={tw`text-base text-black font-medium text-center`}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={tw`flex flex-row w-full items-center justify-center mt-3 py-2.5 rounded-xl border border-gray-300`}
            >
                <Image
                    style={tw`w-6 h-6 mr-3`}
                    source={require('../assets/images/logo_google.png')}
                />
                <Text style={tw`text-base text-black font-medium text-center`}>Continue with Google</Text>
            </TouchableOpacity>
            <Text style={tw`text-center text-base text-black py-2.5`}>or</Text>
            <TouchableOpacity
                style={tw`w-full py-2.5 rounded-full bg-blue-600`}
            >
                <Text style={tw`text-base text-white font-medium text-center`}>Sign in with phone number</Text>
            </TouchableOpacity>
            <View style={tw`flex flex-row items-center justify-center absolute inset-x-0 bottom-8`}>
                <Text style={tw`text-base text-black mr-2`}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={tw`text-base font-medium text-blue-600`}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}