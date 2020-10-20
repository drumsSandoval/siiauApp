import React , { useContext , useEffect, useState} from 'react'
import { View,Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import CalendarPicker from 'react-native-calendar-picker';
import Layout from '../components/Layout';
import appContext from '../context';

const Dates = (props) => {
    const AppContext = useContext(appContext);
    const { user } = AppContext;
    const [selectedStartDate, setSelectedStartDate] = useState(null);

    useEffect(() => {
        props.navigation.setParams({
            title: user.school + ' CITAS',
          });
    },[]);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
        <Layout>
            <View style={{flex:1}}>
                <CalendarPicker onDateChange={setSelectedStartDate}/>
            </View>
            <View>
          <Text>SELECTED DATE:{ startDate}</Text>
        </View>
        </Layout>
    );
}

export default Dates;