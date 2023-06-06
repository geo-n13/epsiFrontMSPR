import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomBottomBarMenu from '../components/CustomBottomBarMenu';
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
    const [fullName, setFullName] = useState('Arnaud Boyer');
    const [email, setEmail] = useState('boyerarnaud@example.com');
    const [address, setAddress] = useState('123 Main Street');
    const [password, setPassword] = useState('********');

    const handleInputChange = (value, field) => {
        // Mettre à jour la valeur du champ correspondant
        switch (field) {
            case 'fullName':
                setFullName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const renderEditableField = (value, field, iconName) => {
        const [isEditing, setIsEditing] = useState(false);

        const handleEdit = () => {
            setIsEditing(true);
        };

        const handleSave = () => {
            setIsEditing(false);
            // Effectuer la mise à jour côté serveur avec la nouvelle valeur
            // Ajoutez ici votre logique de mise à jour côté serveur
        };

        return (
            <View style={styles.fieldContainer}>
                <TextInput
                    style={styles.input}
                    value={isEditing ? value : `${value}`} // Affiche la valeur dans le champ de texte
                    onChangeText={(text) => handleInputChange(text, field)}
                    editable={isEditing}
                />
                {!isEditing ? (
                    <TouchableOpacity style={styles.editIconContainer} onPress={handleEdit}>
                        <MaterialIcons name={iconName} size={24} color="black" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.editIconContainer} onPress={handleSave}>
                        <MaterialIcons name="save" size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {renderEditableField(fullName, 'fullName', 'person')}
            {renderEditableField(email, 'email', 'email')}
            {renderEditableField(address, 'address', 'home')}
            {renderEditableField(password, 'password', 'lock')}
            <CustomBottomBarMenu/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    editIconContainer: {
        marginLeft: 8,
    },
});
