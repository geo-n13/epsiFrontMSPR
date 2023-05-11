import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.pictureContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/icon.png')} style={styles.tinyLogo}/>
                </View>
                <Image source={require('../assets/welcome-pic.png')} style={styles.logo}/>
                {/* FIXME : L'icône et l'image se chevauchent bien mais veiller à ce que en fonction de la taille de l'écran ça ne provoque pas d'anomalies */}
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>The best app for your guarding</Text>
                <Text style={styles.descriptionText}>Keep your mind at ease, take your vacation and let experts take care of your plants !</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <CustomButton titleButton={'Register'} onPress={null} reverseColor={true}/>
                <CustomButton titleButton={'Sign In'} onPress={null} reverseColor={false}/>
            </View>
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
    logoContainer: {
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    logo: {
        width: 400,
        height: 400,
    },
    textContainer: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descriptionText: {
        margin: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection:'row',
    },
});