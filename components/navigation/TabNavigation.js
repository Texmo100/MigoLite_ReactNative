import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AnimeScreen from '../tabScreens/AnimeScreen'
import MangaScreen from '../tabScreens/MangaScreen'

const Tab = createMaterialTopTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Anime" component={AnimeScreen} />
            <Tab.Screen name="Manga" component={MangaScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigation