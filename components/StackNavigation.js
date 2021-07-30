import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignup from './LoginSignup';
import Dashboard from './Dashboard';

const StackNavigation = () => {

    // default login/signup screen options
    const defaultOptionsLs = {headerShown: false}

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
                    name="Dashboard"
                    component={Dashboard}
                    options={
                        { title: 'Dashboard' },
                        { headerLeft: null }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation