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
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import { loginStyle } from "../styles/loginStyle";

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
    <View style={loginStyle.container}>
      <Text style={loginStyle.title}>Hi again !</Text>
      <Text style={loginStyle.subTitle}>Welcome back you’ve been missed</Text>

      <View style={loginStyle.input}>
        <EmailInput
          email={email}
          setEmail={setEmail}
          placeholder={"Enter your email..."}
        />
      </View>
      <View style={loginStyle.input}>
        <PasswordInput
          password={password}
          setPassword={setPassword}
          placeholder={"Enter your password..."}
          showPassword={showPassword}
          setShowPassword={setShowPassword}></PasswordInput>
      </View>
      <View style={loginStyle.checkboxContainer}>
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
            style={loginStyle.linkStyle}
            onPress={() => console.log("SIGN UP !")}>
            Forgot password ?
          </Text>
        </View>
      </View>
      <View style={loginStyle.signInButton}>
        <Pressable
          style={loginStyle.signInButtonText}
          onPress={() => {
            onLogin();
          }}>
          {({ pressed }) => <Text style={{ color: "white" }}>Sign in</Text>}
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={loginStyle.lineStyle} />
        <View>
          <Text style={loginStyle.lineStyleText}>Or sign in with</Text>
        </View>
        <View style={loginStyle.lineStyle} />
      </View>
      <View style={loginStyle.signUpText}>
        <Text>
          Don't have an account yet ?
          <Text
            style={loginStyle.linkStyle}
            onPress={() => console.log("SIGN UP !")}>
            {" Sign up"}
          </Text>
        </Text>
      </View>
    </View>
  );
}
