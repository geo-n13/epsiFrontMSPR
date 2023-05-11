import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton({ titleButton, onPress, reverseColor }) {
    const buttonStyle = reverseColor ? styles.buttonReverse : styles.button;
    const titleButtonStyle = reverseColor ? styles.titleButtonReverse : styles.titleButton;

    return (
        <View>
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
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
        width: 120,
        padding: 15,
        margin: 10,
    },
    buttonReverse: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        width: 120,
        padding: 15,
        margin: 10,
    },
    titleButton: {
        color: '#FFFFFF',
        fontWeight:'bold',
    },
    titleButtonReverse: {
        color: '#749857',
        fontWeight:'bold',
    },
});