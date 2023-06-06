import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton({ titleButton, onPress, reverseColor }) {
    const buttonStyle = reverseColor ? styles.buttonReverse : styles.button;
    const titleButtonStyle = reverseColor ? styles.titleButtonReverse : styles.titleButton;

    // Calculer la largeur du bouton en fonction de la longueur du titre
    const buttonWidth = titleButton.length * 10 + 40;

    return (
        <View>
            <TouchableOpacity style={[buttonStyle, { width: buttonWidth }]} onPress={onPress}>
                <Text style={titleButtonStyle}>{titleButton}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#749857',
        borderRadius: 10,
        padding: 15,
        margin: 10,
    },
    buttonReverse: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        padding: 15,
        margin: 10,
    },
    titleButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    titleButtonReverse: {
        color: '#749857',
        fontWeight: 'bold',
    },
});
