import React from 'react'
import { View, StyleSheet, Text} from 'react-native'


const AnimeScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Anime Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AnimeScreen