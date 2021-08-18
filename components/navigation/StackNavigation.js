import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignup from '../LoginSignup';
import DrawerNavigation from './DrawerNavigation';

const StackNavigation = () => {

    // default login/signup screen options
    const defaultOptions = { headerShown: false }

    // creation stack
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="LoginSignup"
                    component={LoginSignup}
                    options={defaultOptions}
                />
                <Stack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                    options={defaultOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation