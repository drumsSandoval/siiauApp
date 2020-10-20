import React, { useState, useContext } from "react";
import {
    View,
    StyleSheet,
    Text,
    Alert,
    ActivityIndicator,
    Dimensions,
    Image,
} from "react-native";
import { Actions } from "react-native-router-flux";
import Button from "../components/Button";
import Input from "../components/Input";
import colors from "../colors";
import Layout from "../components//Layout";
import appContext from "../context";
import Icon from 'react-native-vector-icons/AntDesign';

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setIPassword] = useState("");
    const [fetching, setFetch] = useState(false);
    const AppContext = useContext(appContext);
    const { _login } = AppContext;
  
    const fetchData = () => {
        const r = async () => {
            setFetch(true);
            const response = await fetch(
                `https://cuceimobile.tech/Escuela/datosudeg.php?codigo=${email}&nip=${password}&operacion=1`
            );
            const data = await response.text();
    
            setFetch(false);
            if (data === '0') {
                return Alert.alert("Error", "La api mando error");
            }
            _login(data);
            Actions.drawer();
        };
        r().catch((err) => {
            Alert.alert("Error", err.message);
            setFetch(false);
        });
    };

    return (
        <Layout>
            <View style={styles.container}>
            <Icon name="rocket" size={30} color="#900" />
                <View style={styles.gradient}>
                    <Text style={styles.title}>Siiau</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../assets/tarea2.png")}
                            style={styles.image}
                            resizeMode="contain"
                        />

                    </View>
                </View>
                <View style={styles.inpuContainer}>
                    <Text style={styles.label}>Codigo</Text>
                    <Input
                        placeholder="Codigo"
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
                <View style={styles.inpuContainer}>
                    <Text style={styles.label}>Nip</Text>
                    <Input
                        placeholder="*******"
                        onChangeText={setIPassword}
                        value={password}
                        password
                    />
                </View>
                <View style={styles.buttonContainer}>
                    {fetching ? (
                        <ActivityIndicator size="large" />
                    ) : (
                            <Button
                                text="Iniciar Sesion"
                                style={styles.button}
                                textStyle={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    textShadowColor: "rgba(0,0,0, .75)",
                                    textShadowOffset: {
                                        width: 1,
                                        height: 1,
                                    },
                                    textShadowRadius: 0,
                                }}
                                onPress={fetchData}
                            />
                        )}
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 12,

                    }}>
                        2020 OSCAR SANDOVAL - {"\n"} All Rights Reserved
                    </Text>
                </View>
            </View>
        </Layout>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        marginHorizontal: 22,
        fontWeight: "bold",
    },
    inpuContainer: {
        marginBottom: 15,
    },
    buttonContainer: {
        marginHorizontal: "2.5%",
    },
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 20,
        marginBottom: 15,
    },
    gradient: {
        width: widthScreen,
        height: heightScreen / 2.5,

    },
    image: {
        width: "100%",
        height: "100%",
        tintColor: 'black'
    },
    imageContainer: {
        flex: 1,
        bottom: 0,
    },
    title: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        marginLeft: 20,
        textShadowColor: "rgba(0,0,0, .75)",
        textShadowOffset: {
            width: 4,
            height: 4,
        },
        textShadowRadius: 0,
    },
});


export default Login;
