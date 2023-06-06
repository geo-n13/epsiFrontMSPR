import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onLogin() {
        if (formValidate(email, password)) {
            try {
                const response = await axios.post(
                    "https://127.0.0.1:8000/auth",
                    {
                        username: email,
                        password: password,
                    }
                );

                console.log("Bienvenue " + email + " " + password);
                console.log("Réponse du serveur :", response.data);

                // Réponse réussie, vous pouvez gérer la suite de votre logique ici
            } catch (error) {
                console.error("Erreur lors de la connexion :", error);
                Alert.alert("Erreur", "Une erreur s'est produite lors de la connexion.");
            }
        }

        setEmail("");
        setPassword("");
    }

    function formValidate(email, password) {
        if (email !== "" && password !== "") {
            return true;
        } else {
            console.log("incorrect");
            return false;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hi again!</Text>
            <Text style={styles.subTitle}>Welcome back, you've been missed</Text>

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email..."
            />

            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password..."
                secureTextEntry
            />

            <Button title="Sign in" onPress={onLogin} />

            <Text style={styles.link} onPress={() => console.log("Forgot password?")}>
                Forgot password?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F7F6",
        padding: 10,
    },
    title: {
        fontSize: 35,
        marginTop: "20%",
        fontWeight: "500",
    },
    subTitle: {
        marginLeft: 10,
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#749857",
        paddingHorizontal: 10,
    },
    link: {
        color: "#749857",
        textAlign: "center",
        marginTop: 10,
    },
});
