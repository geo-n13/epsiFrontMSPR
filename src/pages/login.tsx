import CheckBox from "expo-checkbox";
import React from "react";
import { useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSelected, setSelection] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  function formValidate(): boolean {
    if (email !== "" && password !== "") {
      return true;
    } else {
      console.log("incorrect");
      return false;
    }
  }

  function onLogin() {
    if (formValidate()) {
      console.log("Bienvenue " + email + " " + password);
    }
    setEmail("");
    setPassword("");
  }

  function onCheckboxChange() {
    console.log("Remember me !");
    setSelection(!isSelected);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi again !</Text>
      <Text style={styles.subTitle}>Welcome back you’ve been missed</Text>

      <View style={styles.input}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email..."
          keyboardType="email-address"
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={{ width: "80%" }}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password..."
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
            padding: 5,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text>Remember me</Text>
          <Text
            style={styles.linkStyle}
            onPress={() => console.log("SIGN UP !")}>
            Forgot password ?
          </Text>
        </View>
      </View>
      <View style={styles.signInButton}>
        <Pressable
          style={styles.signInButtonText}
          onPress={() => {
            onLogin();
          }}>
          {({ pressed }) => <Text style={{ color: "white" }}>Sign in</Text>}
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.lineStyle} />
        <View>
          <Text style={styles.lineStyleText}>Or sign in with</Text>
        </View>
        <View style={styles.lineStyle} />
      </View>
      <View style={styles.signUpText}>
        <Text>
          Don't have an account yet ?
          <Text
            style={styles.linkStyle}
            onPress={() => console.log("SIGN UP !")}>
            {" Sign up"}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F6",
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
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
  checkboxContainer: {
    margin: 10,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
