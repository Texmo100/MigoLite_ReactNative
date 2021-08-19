import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import firebase from '../../database/firebase'

const DrawerContent = ({ navigation }) => {

    // custom Alert dialog to handle the signout action
    const customSignOutButton = () => {
        Alert.alert(
            "Warning",
            "Are you sure want to signout?",
            [
                {
                    text: 'signout',
                    onPress: () => signOut()
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                },

            ],
            {
                cancelable: true
            }
        )
    }

    // function to handle signOut action
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate('LoginSignup')
        })
            .catch(error => console.log(error.message))
    }

    return (
        <View style={styles.drawerContainer}>
            <Text>Drawer content</Text>
            <Button
                title='Signout'
                onPress={() => customSignOutButton()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DrawerContent
