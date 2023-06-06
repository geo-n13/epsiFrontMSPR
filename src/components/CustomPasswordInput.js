import React from 'react';
import { TextInput, TouchableHighlight, View, Text } from 'react-native';

export default function CustomPasswordInput({
    password,
    setPassword,
    placeholder,
    showPassword,
    setShowPassword,
}) {
    return (
        <>
            <TextInput
                style={{ width: '80%' }}
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
