import React, { useReducer, useEffect } from 'react'
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import appContext from './index';
import appReducer from './reducer';

const AppState = ({ children }) => {
    const initialState = {
        user: null,
        dates: []
    };
    const [state, dispatch] = useReducer(appReducer, initialState);

    const AuthState = () => {
        if(state && state.user ) {
            Actions.drawer();
        }
    }
    useEffect(AuthState,[])

    const _login = (payload) => {
        console.log(payload);
        dispatch({
            type: 'LOGIN',
            payload: {
                name: payload.split(',')[2],
                code: payload.split(',')[1],
                career: payload.split(',')[4],
                calendar: payload.split(',')[0],
                school: payload.split(',')[3]
            }
        });
    }

    const _getDates =  () => {
       fetch('http://localhost:4000/api/dates')
            .then(response => response.json())
            .then(data => dispatch({
                type:'SET_DATES',
                payload: data.data
            })).catch(() => Alert.alert('Hubo un problema con la API'));
    }

    const _deleteDate = (id) => {
        fetch(`http://localhost:4000/api/dates/${id}`).then(respone => {
            if(respone.status === 200) {
                dispatch({
                    type: 'REMOVE_DATE',
                    payload: id
                });
            }else {
                Alert.alert('La API REGRESO 404, NO EXISTE LA CITA');
            }
        }).catch(err => Alert.alert('Error en la base de datos'));
    }

    const _createDate =  (data) => {
        let headers = {};
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';
        fetch('http://localhost:4000/api/dates', {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }).then(response => {
            if(response.status === 200) {
                console.log('La api regreso 200');
                dispatch({
                    type: 'ADD_DATE',
                    payload: data
                });
            }else {
                console.log(response);
                Alert.alert('Ya tienes una Cita agendada para ese dia y hora');
            }
        }).catch(err => {
            return Alert.alert('Error al Crear la cita');
        });
    }

    return (
        <appContext.Provider value={{ ...state, _login , _getDates, _createDate, _deleteDate}}>
            {children}
        </appContext.Provider>
    );
}

export default AppState;