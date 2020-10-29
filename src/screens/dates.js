import React , { useContext , useEffect, useState} from 'react'
import { View,Text, StyleSheet, Image, Dimensions, FlatList, Alert } from 'react-native';
import Layout from '../components/Layout';
import Button from "../components/Button";
import appContext from '../context';
import colors from '../colors';
import Date from '../components/Date';
import { Actions } from 'react-native-router-flux';


const widthScreen = Dimensions.get('window').width;

const Dates = (props) => {
    const AppContext = useContext(appContext);
    const { user, _getDates, dates } = AppContext;


    useEffect(() => {
        props.navigation.setParams({
            title: user.school + ' CITAS',
          });
    },[]);

    useEffect(() => {
        _getDates();
    },[]);

    return (
        <Layout>
            {dates.length ? (
                <FlatList 
                    data={dates}
                    style={{flex:1}}
                    renderItem={({item}) => (
                        <Date item={item} />
                    )}

                />
            ): <Empty/>}
        </Layout>
    );
}

const Empty = () => (
    <View style={styles.emptyContainer}>
        <Image style={styles.emptyImage}  source={require('../assets/undraw_empty.png')}/>
        <Text style={{
            fontSize:18,
            fontWeight: '400',
            textAlign: 'center',
            marginVertical:15,
            color: "#053359",
        }}>NO TIENES <Text style={{
            fontWeight: 'bold',
            color: "black"
        }}>CITAS</Text>  REGISTRADAS {'\n'}  <Text style={{
            fontSize:15, color: 'black'
        }}>Agenda una cita atraves de la app de citas</Text></Text>
           <Button
                text="Agendar Cita"
                style={{
                    backgroundColor: colors.primary
                }}
                onPress={Actions.modalDate}
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
              
            />
    </View>
)


const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        paddingTop:80
      },
      emptyImage: {
        width: widthScreen/1.2,
        height:widthScreen/1.2,
        resizeMode: 'stretch',
      },
});

export default Dates;