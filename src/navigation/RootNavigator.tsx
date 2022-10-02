import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import BottomNavigator from './BottomNavigator'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import PreProfileScreen from '../screens/PreProfileScreen'
import VerifyOTPScreen from '../screens/VerifyOTPScreen'
import CreatePINScreen from '../screens/CreatePINScreen'
import MessageScreen from '../screens/MessageScreen'
import InfoCallScreen from '../screens/InfoCallScreen'

export default function RootNavigator() {
    const token = true
    const Stack = createNativeStackNavigator<RootStackParamList>()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {!token ? (
                <>
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="VerifyOTP"
                        component={VerifyOTPScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="PreProfile"
                        component={PreProfileScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="CreatePIN"
                        component={CreatePINScreen}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Root"
                        component={BottomNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MessageStack"
                        component={MessageScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="InfoCallStack"
                        component={InfoCallScreen}
                        options={{ headerShown: false }}
                    />
                </>
            )}
        </Stack.Navigator>
    )
}