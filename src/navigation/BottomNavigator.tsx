import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import ChatScreen from '../screens/ChatScreen'
import CallScreen from '../screens/CallScreen'
import MenuScreen from '../screens/MenuScreen'
import ProfileScreen from '../screens/ProfileScreen';
import { RootTabParamList } from './types';

export default function BottomNavigator() {
    const BottomTab = createBottomTabNavigator<RootTabParamList>();
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="ChatTab"
                component={ChatScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <IoniconsIcon name="ios-chatbox" size={25} color={color} />
                            ) : (
                                <IoniconsIcon name="ios-chatbox-outline" size={25} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <BottomTab.Screen
                name="CallTab"
                component={CallScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <IoniconsIcon name="ios-call" size={25} color={color} />
                            ) : (
                                <IoniconsIcon name="ios-call-outline" size={25} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <BottomTab.Screen
                name="ProfileTab"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <IoniconsIcon name="ios-person" size={25} color={color} />
                            ) : (
                                <IoniconsIcon name="ios-person-outline" size={25} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <BottomTab.Screen
                name="MenuTab"
                component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <IoniconsIcon name="ios-grid" size={25} color={color} />
                            ) : (
                                <IoniconsIcon name="ios-grid-outline" size={25} color={color} />
                            )}
                        </>
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}