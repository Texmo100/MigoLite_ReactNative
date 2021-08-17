import React from 'react'
import { View, StyleSheet, Text} from 'react-native'


const MangaScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Manga Screen</Text>
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

export default MangaScreen