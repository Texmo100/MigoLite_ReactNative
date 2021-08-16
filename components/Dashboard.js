import React, { useState, useEffect } from 'react'
import {
StyleSheet,
View,
Text,
Button,
TextInput,
TouchableOpacity,
Dimensions,
KeyboardAvoidingView,
Platform,
Image,
ScrollView,
} from 'react-native'
import firebase from '../database/firebase'
import MigoCard from './MigoCard'
import image from '../images/image-01.jpg'

const Dashboard = ({ navigation, route }) => {
  // State section
  const [displayName, setDisplayName] = useState(firebase.auth().currentUser.displayName)
  const [uid, setUid] = useState(firebase.auth().currentUser.uid)
  const [animeList, setAnimeList] = useState([])
  const [Title, setAnimeTitle] = useState('')
  const [episodes, setEpisodes] = useState(0)
  const [status, setStatus] = useState('')
  const [rate, setRate] = useState(0)

  // useEffect

  // function to handle signOut action
  const signOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate('LoginSignup')
    })
      .catch(error => console.log(error.message))
  }

  // function to handle input event
  const handleInputAnime = (value, name) => {
    if (name === 'inputAnime') {
      setInputAnime(value)
    }
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

  return (
    <View style={styles.container}>

    </View>
  )
}

// get the current screen width
const screenWidth = Dimensions.get('screen').width

// Styles section
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2b2b2b'
  },
})

export default Dashboard