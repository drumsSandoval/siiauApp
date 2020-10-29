import React, { useState , useContext } from 'react'
import { View, Text, StyleSheet , TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { Picker } from '@react-native-community/picker';
import CalendarPicker from 'react-native-calendar-picker';
import Button from "./Button";
import appContext from '../context';
import { Actions } from 'react-native-router-flux';

const DateModal = ({_closeModal}) => {
    const AppContext= useContext(appContext);
    const { _createDate, user }  = AppContext;
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [showPickers, setShowPickers] = useState(false);
    const [hours, setHours] = useState('12');
    const [minutes, setMinutes] = useState('15');
    const [fetching, setFetching] = useState(false);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    const _makeDate = () => {
        setFetching(true);
        const r = async () => {
            const {day,month, year} = selectedStartDate._i;
            const data = {
                day, 
                month: month+1, 
                year,
                code: user.code,
                name: user.name,
                hour: `${hours} : ${minutes}`,
                school: user.school,
                career: user.career
            }
            await _createDate(data);
            setFetching(false);
            Actions.pop();
        }
        r().catch(err => {
            Alert.alert('Hubo un error');
            return setFetching(false);
        })
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.closeIconContainer}
                onPress={_closeModal}>
                <Icon name="circle-with-cross" size={30} color={'rgb(5, 51, 89)'} />
            </TouchableOpacity>
            <View style={{padding:20}}>
            <Text style={styles.title}>{showPickers ? "Hora de la cita" : "Selecciona el día"}</Text>
            {showPickers ? (
                <SelectHour minutes={minutes} hours={hours} setMinutes={setMinutes} setHours={setHours} />
            ) :  <CalendarPicker onDateChange={setSelectedStartDate}/>}
          {selectedStartDate &&   <View>
                <Text style={{
                    textAlign:'center',
                    fontSize: 14,
                    fontWeight:'200',
                    color: 'rgb(5, 51, 89)',
                    padding:20
                }}>SELECTED DATE:{ startDate}</Text>
                {fetching ? (
                    <ActivityIndicator size={'small'} color='rgb(5, 51, 89)'/>
              )  : (
                    <Button
                        text={showPickers ? 'Agendar Cita' : "Siguiente"}
                        style={{
                            backgroundColor: 'rgb(5, 51, 89)'
                        }}
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
                        onPress={() => showPickers ? _makeDate() : setShowPickers(true) }
                    />
                )}
            </View> }
            </View>
        </View>
    );
};

const SelectHour = ({minutes, hours, setMinutes, setHours}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Picker
                selectedValue={hours}
                style={{flex:1}}
                onValueChange={value => setHours(value)}
            >
                <Picker.Item label="8 hrs" value="8" />
                <Picker.Item label="9 hrs" value="9" />
                <Picker.Item label="10 hrs" value="10" />
                <Picker.Item label="11 hrs" value="11" />
                <Picker.Item label="12 hrs" value="12" />
                <Picker.Item label="1 hrs" value="1" />
          </Picker>
          <Picker
            selectedValue={minutes}
            style={{flex:1}}
            onValueChange={value => setMinutes(value)}>
                <Picker.Item label="15 min" value="15" />
                <Picker.Item label="30 min" value="30" />
                <Picker.Item label="45 min" value="45" />
                <Picker.Item label="00 min" value="00" />
          </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
    },
    closeIconContainer: {
        padding: 10,
        alignSelf: 'flex-end',
      },
    title: {
            textAlign:'center',
            top:-25,
            fontSize: 18,
            fontWeight:'bold',
            color: 'rgb(5, 51, 89)'

      }
    
});

export default DateModal;