import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignup from '../LoginSignup';
import TabNavigation from '../navigation/TabNavigation'

const StackNavigation = () => {

    // default login/signup screen options
    const defaultOptionsLs = { headerShown: false }

    // default tab navigation options
    const defaultOptionsTabNavigation = {
        title: 'MIGOLite',
        headerStyle: {
            backgroundColor: '#212121'
        },
        headerTintColor: '#ffffff',
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
                    options={defaultOptionsTabNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation