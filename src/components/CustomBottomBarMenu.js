import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CustomBottomBarMenu() {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    const navigateToMap = () => {
        navigation.navigate('Map');
    };

    const navigateToProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={navigateToHome}>
                <Ionicons name="home-outline" size={30} color="black" />
                <Text style={styles.iconLabel}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={navigateToMap}>
                <Ionicons name="map-outline" size={30} color="black" />
                <Text style={styles.iconLabel}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={navigateToProfile}>
                <Ionicons name="md-person-circle" size={30} color="black" />
                <Text style={styles.iconLabel}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        paddingVertical: 8,
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconLabel: {
        fontSize: 14,
        marginTop: 4,
    },
});