import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native'
import { Icon } from 'react-native-elements'

const MigoCard = ({ image, title, episodes, status, rating }) => {
    return (
        <>
        {/* Migo Card */}
            <View style={styles.animeCard}>
                {/* Migo card Image */}
                <Image source={image} style={styles.animeCardImage} />
                {/* Migo card Description */}
                <View style={styles.aniemCardDesc}>
                    <View style={styles.animeCardTextContainer}>
                        <Text style={styles.labelText}>Title</Text>
                        <Text style={styles.animeText}>{title}</Text>
                    </View>

                    <View style={styles.animeCardTextContainer}>
                        <Text style={styles.labelText}>Episodes</Text>
                        <Text style={styles.animeText}>{episodes} episodes</Text>
                    </View>

                    <View style={styles.animeCardTextContainer}>
                        <Text style={styles.labelText}>Status</Text>
                        <Text style={styles.animeText}>{status}</Text>
                    </View>
                </View>
                {/* Migo card Rating section */}
                <View style={styles.animeCardRate}>
                    <View style={styles.animeRateContainer}>
                        <Icon name='circle' iconStyle={styles.animeRateIcon} />
                        <Text>{rating}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

// Styles section
const styles = StyleSheet.create({
    animeCard: {
        flexDirection: 'row',
        width: '100%',
        maxHeight: 130,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        marginVertical: 10
    },
    animeCardImage: {
        flex: 2,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        backgroundColor: '#4DB6AC',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    aniemCardDesc: {
        flex: 4,
        padding: 5,
        paddingLeft: 10
    },
    animeCardTextContainer: {
        marginVertical: 1
    },
    labelText: {
        fontSize: 10,
        color: '#aeaeae'
    },
    animeText: {
        fontSize: 15,
        color: '#2b2b2b'
    },
    animeCardRate: {
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: 5
    },
    animeRateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    animeRateIcon: {
        color: '#FFD700',
        fontSize: 15
    },
})

export default MigoCard