import { TextInput, TouchableHighlight, View, Text } from "react-native";

type iProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PasswordInput({
  password,
  setPassword,
  placeholder,
  showPassword,
  setShowPassword,
}: iProps) {
  return (
    <>
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
    </>
  );
}
