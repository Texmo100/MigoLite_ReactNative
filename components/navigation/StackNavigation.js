import * as React from 'react';
import {
    Alert,
    StyleSheet
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignup from '../LoginSignup';
import TabNavigation from '../navigation/TabNavigation'
import { Icon } from 'react-native-elements'

const StackNavigation = () => {

    // default login/signup screen options
    const defaultOptionsLs = { headerShown: false }
    const defaultOptionsDshaboard = {
        title: 'MIGOLite',
        headerStyle: {
            backgroundColor: '#212121'
        },
        headerTintColor: '#ffffff',
        headerLeft: () => (
            <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.leftButton}
                onPress={() => Alert.alert('Sidebar menu')}
            />
        )
    }

    // creation stack
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="LoginSignup"
                    component={LoginSignup}
                    options={defaultOptionsLs}
                />
                <Stack.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                    options={defaultOptionsDshaboard}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    leftButton: {
        color: '#e8e8e8',
        marginLeft: 20
    }
})

export default StackNavigation