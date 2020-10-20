import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const Button = (props) => {
    const { text, style, textStyle, onPress } = props;
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: StyleSheet.hairlineWidth,
        paddingVertical: 15,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        backgroundColor: "transparent",
        textAlign: "center",
    },
});
export default Button;