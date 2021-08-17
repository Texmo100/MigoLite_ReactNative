import React, { useLayoutEffect } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AnimeScreen from '../tabScreens/AnimeScreen'
import MangaScreen from '../tabScreens/MangaScreen'
import firebase from '../../database/firebase'
import { Icon } from 'react-native-elements'


const TabNavigation = ({ navigation }) => {

    // material top tab navigator created
    const Tab = createMaterialTopTabNavigator()

    // useLayoutEffect function
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Icon
                    name='bars'
                    type='font-awesome'
                    iconStyle={styles.leftButton}
                    onPress={() => signOut()}
                />
            )
        })
    }, [navigation])

    // function to handle signOut action
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate('LoginSignup')
        })
            .catch(error => console.log(error.message))
    }

    // function to handle submit event
    const handleSubmitAnime = () => {
        firebase.firestore().collection('animes').add({
            animeTitle: inputAnime
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id)
                setInputAnime('')
            })
            .catch((error) => {
                console.log(error)
            })
    }

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

const styles = StyleSheet.create({
    leftButton: {
        color: '#e8e8e8',
        marginLeft: 20
    }
})

export default TabNavigation