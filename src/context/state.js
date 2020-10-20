import React, { useReducer, useEffect } from 'react'
import { Actions } from 'react-native-router-flux';
import appContext from './index';
import appReducer from './reducer';

const AppState = ({ children }) => {
    const initialState = {
        user: null,
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
    return (
        <appContext.Provider value={{ ...state, _login }}>
            {children}
        </appContext.Provider>
    );
}

export default AppState;