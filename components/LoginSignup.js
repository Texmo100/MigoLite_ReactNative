import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, StatusBar, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';

const LoginSignup = ({ navigation, route }) => {

    // State section
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    // will rerender the page if isLogin change
    useEffect(() => { }, [isLogin])

    // reset all values
    const allInitialValues = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setIsLoading(false)
        setIsLogin(true)
        setErrorMessage('')
    }

    // reset the values(only for special cases)
    const initialValues = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setIsLoading(false)
    }

    // toggle function to switch from Login page to Signup page
    const toggleRender = signal => {
        if (signal === 's') {
            initialValues()
            setIsLogin(false)
        } else {
            initialValues()
            setIsLogin(true)
        }
    }

    // function to handle the input values
    const handleInput = (value, name) => {
        if (name === 'displayName') {
            setDisplayName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else {
            setPassword(value)
        }
    }

    // function to handle the errors
    const handleError = error => {
        setErrorMessage(error)
        console.log(errorMessage)
    }

    // function to handle the submit event in Login page
    const handleSubmitLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Enter details to login!')
        } else {
            setIsLoading(true)
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((res) => {
                    console.log(res)
                    console.log('User logged-in successfully!')
                    allInitialValues()
                    navigation.navigate('Dashboard')
                })
                .catch(error => handleError(error.message))
        }
    }

    // function to handle submit event in Signup page
    const handleSumbitSignup = () => {
        if (email === '' || password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            setIsLoading(true)
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: displayName
                    })
                    console.log('User registered successfully!')
                    allInitialValues()
                })
                .catch(error => handleError(error.message))
        }
    }

    // function which serves as conditional render for the input name
    const inputNameRender = () => {
        if (!isLogin) {
            return (
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    placeholderTextColor='#aeaeae'
                    value={displayName}
                    onChangeText={(value) => handleInput(value, 'displayName')}
                />

            )
        } else {
            return null
        }
    }

    // function which serves as conditional render for the submit button
    const submitButtonRender = () => {
        if (!isLogin) {
            return (
                <TouchableOpacity style={styles.submitButton} onPress={() => handleSumbitSignup()}>
                    <Text style={styles.submitButtonText}>Signup</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmitLogin()}>
                    <Text style={styles.submitButtonText}>Login</Text>
                </TouchableOpacity>
            )
        }
    }

    // function which serves as conditional render for the link
    const linkRender = () => {
        if (!isLogin) {
            return (
                <Text
                    style={styles.loginText}
                    onPress={() => toggleRender('l')}>
                    Already Registered? Click here to login
                </Text>
            )
        } else {
            return (
                <Text
                    style={styles.loginText}
                    onPress={() => toggleRender('s')}>
                    Don't have account? Click here to signup
                </Text>
            )
        }
    }

    if (isLoading) { // Verify if is loading
        return (
            <View style={styles.preloader}>
                {/* status bar */}
                <StatusBar
                    backgroundColor='#000000'
                    barStyle='light-content'
                />
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                {/* status bar */}
                <StatusBar
                    backgroundColor='#000000'
                    barStyle='light-content'
                />
                {/* if isn't the Login page, this function will render the input name*/}
                {inputNameRender()}
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    placeholderTextColor='#aeaeae'
                    value={email}
                    onChangeText={(value) => handleInput(value, 'email')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    placeholderTextColor='#aeaeae'
                    value={password}
                    onChangeText={(value) => handleInput(value, 'password')}
                    maxLength={15}
                    secureTextEntry={true}
                />
                {/* if isn't the Login page, this function will render the submit button and the link respectively*/}
                {submitButtonRender()}
                {linkRender()}
            </View>
        )
    }
}

// Styles section
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#212121'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212121'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 20,
        padding: 10,
        alignSelf: "center",
        backgroundColor: '#2b2b2b',
        borderRadius: 50,
        color: '#e8e8e8'
    },
    loginText: {
        color: '#cc3355',
        marginTop: 25,
        textAlign: 'center'
    },
    submitButton: {
        backgroundColor: '#212121',
        padding: 10,
        borderColor: '#00acc1',
        borderWidth: 1,
        borderRadius: 50,
    },
    submitButtonText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#e8e8e8',
        textTransform: 'uppercase'
    }
})

export default LoginSignup