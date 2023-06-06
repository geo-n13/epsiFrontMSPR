import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function CustomProfileHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.identificationContainer}>
                <Text style={styles.welcome}>Hi,</Text>
                <Text style={styles.username}>Arnaud BOYER</Text>
            </View>
            <View style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={require('../assets/icon.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    welcome: {
        fontSize: 14,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 60,
        height: 60,
    },
});