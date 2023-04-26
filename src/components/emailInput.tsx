import { TextInput, View } from "react-native";

type iProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

export default function EmailInput({ setEmail, email, placeholder }: iProps) {
  return (
    <TextInput
      onChangeText={setEmail}
      value={email}
      placeholder="Enter your email..."
      keyboardType="email-address"
    />
  );
}
