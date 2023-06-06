import { StatusBar } from 'expo-status-bar';
import { View, Modal, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomBottomBarMenu from '../components/CustomBottomBarMenu';
import React, { useState } from 'react'
import CustomSearchBar from '../components/CustomSearchBar';
import CustomProfileHeader from '../components/CustomProfileHeader';
import CustomButton from '../components/CustomButton';
import PlantComponent from '../components/PlantComponent';

export default function Home() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [selectedPlantTypes, setSelectedPlantTypes] = useState([]);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const togglePlantType = (type) => {
        if (selectedPlantTypes.includes(type)) {
            setSelectedPlantTypes(selectedPlantTypes.filter((item) => item !== type));
        } else {
            setSelectedPlantTypes([...selectedPlantTypes, type]);
        }
    };

    return (
        <View style={styles.container}>
            <CustomProfileHeader />
            <CustomSearchBar />
            <PlantComponent />

            <CustomButton titleButton={'Create PlantSitting'} onPress={openModal} reverseColor={false} />

            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Create PlantSitting</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={description}
                            onChangeText={setDescription}
                        />
                        {/* Menu déroulant pour les types de plantes */}
                        <Text style={styles.modalLabel}>Plant Types:</Text>
                        <TouchableOpacity
                            style={[styles.option, selectedPlantTypes.includes('Type 1') && styles.selectedOption]}
                            onPress={() => togglePlantType('Type 1')}
                        >
                            <Text style={styles.optionText}>Type 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.option, selectedPlantTypes.includes('Type 2') && styles.selectedOption]}
                            onPress={() => togglePlantType('Type 2')}
                        >
                            <Text style={styles.optionText}>Type 2</Text>
                        </TouchableOpacity>
                        {/* ... Autres options de types de plantes ... */}

                        <TouchableOpacity style={styles.button} onPress={closeModal}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <CustomBottomBarMenu />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        height: 500,
        width: 300,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 160,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    modalLabel: {
        fontSize: 16,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    option: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginBottom: 5,
    },
    selectedOption: {
        backgroundColor: 'lightgreen',
    },
    optionText: {
        fontSize: 14,
    },
    button: {
        backgroundColor: '#749857',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
