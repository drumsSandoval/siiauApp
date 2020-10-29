import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View , Dimensions, ImageBackground} from 'react-native'
const { width } =  Dimensions.get('window');

const Date = ({item}) => {
    console.log('desde Date: ', item);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.view}>
                <ImageBackground
                style={styles.image}
                source={require('../assets/date.png')}
                resizeMode={'stretch'}
                >
                    <Text style={{textAlign: 'center'}}>
                        Estudiante: {item.name} {"\n"}
                        Lugar de Cita:  {item.school} {"\n"}
                        Carrera: {item.career} {"\n"}
                        Fecha: Dia: {item.day} Mes: {item.month} Año: 2020  {"\n"}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingLeft:10,
        marginBottom:3,
    
    },
    view: {
        width: width ,
        height: width / 2,
        marginBottom: 10,
        marginHorizontal: 5,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth
      },
      image: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.7)'
      },
});

export default Date;