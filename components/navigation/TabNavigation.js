import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AnimeScreen from '../tabScreens/AnimeScreen'
import MangaScreen from '../tabScreens/MangaScreen'

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

    return (
        <Tab.Navigator screenOptions={tabNavigationOptions}>
            <Tab.Screen name="Anime" component={AnimeScreen} />
            <Tab.Screen name="Manga" component={MangaScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigation