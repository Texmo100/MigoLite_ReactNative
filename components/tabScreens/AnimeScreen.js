import React from 'react'
import { View, StyleSheet, Text} from 'react-native'


const AnimeScreen = ({ route, navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Anime Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b2b2b'
    },
    text: {
        color: '#e8e8e8'
    }
})

export default AnimeScreen