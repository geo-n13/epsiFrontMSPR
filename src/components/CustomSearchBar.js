import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomSearchBar() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        // Logique de recherche avec le texte entré
        console.log('Recherche :', searchText);
    };

    const handleScanQRCode = () => {
        // Logique pour lancer la lecture du QR Code
        console.log('Scan QR Code');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
            />
            <TouchableOpacity style={styles.qrCodeButton} onPress={handleScanQRCode}>
                <Ionicons name="qr-code-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    input: {
        width: 300,
        height: 40,
        marginRight: 8,
    },
    qrCodeButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#eaeaea',
    },
});