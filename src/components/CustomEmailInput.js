import React from 'react';
import { TextInput, View } from 'react-native';

export default function CustomEmailInput({ setEmail, email, placeholder }) {
    return (
        <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder={placeholder}
            keyboardType="email-address"
        />
    );
}
