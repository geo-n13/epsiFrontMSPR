import CheckBox from "expo-checkbox";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isSelected, setSelection] = useState(false);

  function onCheckboxChange() {
    console.log("Remember me !");
    setSelection(!isSelected);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, let's create your account </Text>
      <Text style={styles.subTitle}>Welcome, write down your info please!</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.container14}>
        <GooglePlacesAutocomplete
          styles={{
            height: "10px",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#749857",
            backgroundColor: "#08d893",
          }}
          textInputProps={styles.inputAdress}
          fetchDetails
          currentLocation
          currentLocationLabel="Ma posicion"
          debounce={400}
          placeholder="Adresse"
          query={{
            key: "AIzaSyBAScqrcdwCpji6Z4-rJuAWLwxF1tEJnxQ",
            language: "fr",
          }}
          onPress={(data, details) => setAdress(data.description)}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: "https://maps.googleapis.com/maps/api",
            useOnPlatform: "web",
          }}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          onChangeText={setFullName}
          value={fullName}
          placeholder="Full Name"
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={{ width: "80%" }}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={showPassword}
        />
        <TouchableHighlight
          style={{
            margin: 10,
          }}
          onPress={() => setShowPassword(!showPassword)}
          underlayColor="transparent">
          <View>
            <Text>Show</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={() => {
            onCheckboxChange();
          }}
        />
        <View
          style={{
            paddingLeft: 10,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}>
          <Text>Yes, I want to receive offers and discounts</Text>
        </View>
      </View>
      <View style={styles.signInButton}>
        <Pressable
          style={styles.signInButtonText}
          onPress={() => {
            console.log("create my account");
          }}>
          {({ pressed }) => <Text style={{ color: "white" }}>Sign in</Text>}
        </Pressable>
      </View>

      <View style={styles.signUpText}>
        <Text>
          Already have an account ?
          <Text
            style={styles.linkStyle}
            onPress={() => console.log("SIGN IN !")}>
            {" Sign in"}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container14: {
    height: "auto",
    padding: 10,
    backgroundColor: "#F4F7F6",
  },
  container: {
    height: "100%",
    backgroundColor: "#F4F7F6",
    padding: 10,
    borderColor: "#749857",
    overflow: "scroll",
  },
  linkStyle: {
    color: "#749857",
  },
  signInButton: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginTop: 12,
  },
  signInButtonText: {
    height: 30,

    backgroundColor: "#749857",
    width: "70%",
    borderRadius: 10,
    color: "white",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    flexDirection: "row",
    display: "flex",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#749857",
  },
  inputAdress: {
    flexDirection: "row",
    display: "flex",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#749857",
  },
  checkboxContainer: {
    flexDirection: "row",
    margin: 12,
  },
  checkbox: {
    alignSelf: "center",
  },
  title: {
    margin: 10,
    fontSize: 35,
    paddingTop: "20%",
    fontWeight: "500",
  },
  subTitle: { marginLeft: 10 },
  signUpText: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  label: {
    margin: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  lineStyleText: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
});
