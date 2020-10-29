import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

const Input = (props) => {
    const { placeholder, onChangeText, value, password } = props;
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="gray"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
        padding: Platform.OS === "android" ? 5 : 9,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    input: { width: "100%",  height: '100%', },
});
