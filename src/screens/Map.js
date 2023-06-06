import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomBottomBarMenu from '../components/CustomBottomBarMenu';
import { StatusBar } from 'expo-status-bar';

export default function Carte() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        // Logique de recherche avec le texte entré
        console.log('Recherche :', searchText);
        // Ajoutez ici votre logique de recherche des éléments correspondants
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmitEditing={handleSearch}
                />
            </View>
            <MapView style={styles.map} region={{ latitude: 44.837789, longitude: -0.57918, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
                <Marker
                    coordinate={{ latitude: 44.837789, longitude: -0.57918 }}
                    title="PlantSitting 1"
                    description="Description + Contact of the person"
                />
                <Marker
                    coordinate={{ latitude: 44.840439, longitude: -0.574096 }}
                    title="PlantSitting 2"
                    description="Description + Contact of the person"
                />
                <Marker
                    coordinate={{ latitude: 44.837006, longitude: -0.567923 }}
                    title="PlantSitting 3"
                    description="Description + Contact of the person"
                />
            </MapView>
            <CustomBottomBarMenu />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    map: {
        flex: 1,
    },
});
