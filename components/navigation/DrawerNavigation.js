import React, { useLayoutEffect } from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigation from './TabNavigation'
import { Icon } from 'react-native-elements'


const DrawerNavigation = ({ navigation }) => {
    const Drawer = createDrawerNavigator()

    // default tab navigation options
    const drawerDefaultOptions = {
        title: 'MIGOLite',
        headerStyle: {
            backgroundColor: '#212121',
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTintColor: '#ffffff',
    }

    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={drawerDefaultOptions}>
            <Drawer.Screen name="Home" component={TabNavigation}/>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    leftButton: {
        color: '#e8e8e8',
        marginLeft: 20
    }
})

export default DrawerNavigation