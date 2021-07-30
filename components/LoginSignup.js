import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, StatusBar, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';

const LoginSignup = ({ navigation, route }) => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    // will rerender the page if isLogin change
    useEffect(()=> {}, [isLogin])

    const allInitialValues = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setIsLoading(false)
        setIsLogin(true)
        setErrorMessage('')
    }

    const initialValues = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setIsLoading(false)
    }

    const toggleRender = signal => {
        if(signal === 's'){
            initialValues()
            setIsLogin(false)
        }else{
            initialValues()
            setIsLogin(true)
        }
    }

    const handleInput = (value, name) => {
        if (name === 'displayName') {
            setDisplayName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else {
            setPassword(value)
        }
    }

    const handleError = error => {
        setErrorMessage(error)
        console.log(errorMessage)
    }

    const handleSubmitLogin = () => {
        if (email === '' && password === '') {
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

    const handleSumbitSignup = () => {
        if (email === '' && password === '') {
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

    if (isLoading) {
        return (
            <View style={styles.preloader}>
                <StatusBar
                    backgroundColor='#000000'
                    barStyle='light-content'
                />
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        )
    } else if (isLogin) {
        return (
            <View style={styles.container}>
                {/* Initial status bar */}
                <StatusBar
                    backgroundColor='#000000'
                    barStyle='light-content'
                />
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
                <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmitLogin()}>
                    <Text style={styles.submitButtonText}>Login</Text>
                </TouchableOpacity>

                <Text
                    style={styles.loginText}
                    onPress={() => toggleRender('s')}>
                    Don't have account? Click here to signup
                </Text>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    placeholderTextColor='#aeaeae'
                    value={displayName}
                    onChangeText={(value) => handleInput(value, 'displayName')}
                />
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

                <TouchableOpacity style={styles.submitButton} onPress={() => handleSumbitSignup()}>
                    <Text style={styles.submitButtonText}>Signup</Text>
                </TouchableOpacity>

                <Text
                    style={styles.loginText}
                    onPress={() => toggleRender('l')}>
                    Already Registered? Click here to login
                </Text>
            </View>
        )
    }
}

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