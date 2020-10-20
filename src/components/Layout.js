import React from 'react'
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import colors from "../colors"

export default ({ children }) => {
    return (
        <>
            <StatusBar translucent barStyle="dark-content" backgroundColor={colors.primary} />
            <View style={styles.container}>
                <View style={{ flexDirection: "row", position: "absolute", top: -30, right: 0, }}>
                    <View style={{
                        width: 100,
                        height: 100,
                        backgroundColor: colors.primary,
                        borderRadius: 100

                    }} />
                    <View style={{
                        width: 40,
                        height: 40,
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        position: "absolute",
                        top: 90,
                        right: 80
                    }} />
                    

                </View >
                <View style={{
                    width: 100,
                    height: 200,
                    backgroundColor: colors.primary,
                    borderRadius:50,
                    marginLeft: 10,
                    position: 'absolute',
                    top: 150,
                    transform: [{ skewX: "-10deg" },
                    { skewY: "20deg" }, { rotateX: '45deg' }, { rotateY: '45deg' }]
                    
                }} />
                <View style={{
                    width: 200,
                    height: 1400,
                    backgroundColor: colors.primary,
                    transform: [{ rotate: '45deg' }, { rotateZ: 3 }],
                    position: "absolute"

                }} />
                <View style={{
                    width: 100,
                    height: 200,
                    backgroundColor: colors.primary,
                    borderRadius:50,
                    marginLeft: 10,
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    transform: [{ skewX: "-10deg" },
                    { skewY: "20deg" }, { rotateX: '45deg' }, { rotateY: '45deg' }]
                }} />
            </View>
            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}>
                {children}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 24,
    },
    oval: {
        backgroundColor: colors.primary,
    }
});