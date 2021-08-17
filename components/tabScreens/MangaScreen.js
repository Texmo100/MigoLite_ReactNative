import React from 'react'
import { View, StyleSheet, Text} from 'react-native'


const MangaScreen = () => {
    return(
        <View style={styles.container}>
            <Text> Manga Screen </Text>
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

export default MangaScreen