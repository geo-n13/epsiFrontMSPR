import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import plantsData from '../bouchons/plants.json';
import plantTypesData from '../bouchons/plant_types.json';
import images from '../bouchons/images';

export default function PlantComponent() {
    const [selectedPlant, setSelectedPlant] = useState(null);

    const openPlantModal = (plant) => {
        setSelectedPlant(plant);
    };

    const closePlantModal = () => {
        setSelectedPlant(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Liste des plantes</Text>
            <ScrollView horizontal>
                {plantsData.map((plant) => (
                    <TouchableWithoutFeedback key={plant.id} onPress={() => openPlantModal(plant)}>
                        <View style={styles.plantCard}>
                            <Text style={styles.plantName}>{plant.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
            <Text style={styles.heading}>Types de plantes</Text>
            <ScrollView horizontal>
                {plantTypesData.map((type) => (
                    <View style={styles.plantTypeCard} key={type.id}>
                        <Text style={styles.plantTypeName}>{type.name}</Text>
                    </View>
                ))}
            </ScrollView>

            <Modal visible={selectedPlant !== null} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={closePlantModal}>
                        <View style={styles.overlay} />
                    </TouchableWithoutFeedback>
                    {selectedPlant && (
                        <View style={styles.modalContent}>
                            <Image source={images[selectedPlant.image]} style={styles.plantImage} />
                            <Text style={styles.modalPlantName}>{selectedPlant.name}</Text>
                            <Text style={styles.modalPlantDescription}>{selectedPlant.description}</Text>
                            <Text style={styles.modalPlantCareTips}>{selectedPlant.careTips}</Text>
                        </View>
                    )}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 350,
        padding: 16,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    plantCard: {
        width: 100,
        height: 100,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plantName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    plantTypeCard: {
        width: 100,
        height: 100,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plantTypeName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    plantImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 8,
    },
    modalPlantName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    modalPlantDescription: {
        fontSize: 14,
        textAlign: 'center',
    },
    modalPlantCareTips: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#749857',
    },
});
