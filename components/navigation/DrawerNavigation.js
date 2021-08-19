import React, { useState, useLayoutEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import LoginSignup from '../LoginSignup';
import TabNavigation from './TabNavigation'
import DrawerContent from './DrawerContent';

const DrawerNavigation = ({ navigation }) => {

    // create Drawer
    const Drawer = createDrawerNavigator()

    // default login/signup screen options
    const defaultOptions = {
        headerShown: false,
        drawerLabel: 'Login and Signup',
        swipeEnabled: false
    }

    // default tab navigation options
    const tabDefaultOptions = {
        drawerLabel: 'Home',
        title: 'MIGOLite',
        headerStyle: {
            backgroundColor: '#212121',
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTintColor: '#ffffff'
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="LoginSignup" drawerContent={(props) => <DrawerContent {...props}/>}>
                    <Drawer.Screen
                        name="LoginSignup"
                        component={LoginSignup}
                        options={defaultOptions}
                    />
                    <Drawer.Screen
                        name="Home"
                        component={TabNavigation}
                        options={tabDefaultOptions}
                    />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation