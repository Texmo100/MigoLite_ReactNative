import React, { useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AnimeScreen from '../tabScreens/AnimeScreen'
import MangaScreen from '../tabScreens/MangaScreen'
import firebase from '../../database/firebase'

const TabNavigation = ({ navigation }) => {

    // material top tab navigator created
    const Tab = createMaterialTopTabNavigator()

    // tab navigation options
    const tabNavigationOptions = {
        tabBarStyle: {
            backgroundColor: '#212121',
            height: 50
        },
        tabBarLabelStyle: {
            fontSize: 15,
            color: '#e8e8e8'
        },
        tabBarIndicatorStyle: {
            backgroundColor: '#cc3355',
            height: 3,
            borderRadius: 50
        },
        scrollEnabled: true,
    }

    // custom back action
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp()}
        ])
        return true
    }

    // useEffect function to mount a custom back handler action
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction)
    }, [])

    return (
        <Tab.Navigator screenOptions={tabNavigationOptions}>
            <Tab.Screen
                name="Anime"
                component={AnimeScreen}
            />
            <Tab.Screen
                name="Manga"
                component={MangaScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation