/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react'
import {  TouchableOpacity  } from 'react-native'
import { Scene, Router, Stack, Drawer, Actions, Lightbox  } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/Entypo';

import AppState from "./src/context/state";
import Login from "./src/screens/login.js";
import Dates from './src/screens/dates.js';
import DrawerContent from './src/components/DrawerContext';
import LightBoxDate from './src/components/LightBox';



const App = () => {
  return (
    <AppState>
      <Router>
        <Lightbox key="init" hideNavBar>
          <Stack type="reset" key="root" hideNavBar>
            <Scene type="reset" key="login" component={Login} initial />
          </Stack>
          <Drawer 
              type="reset"
              hideNavBar 
              key="drawer" 
              drawerIcon={() => <Icon name="unread" size={30} color={'rgb(5, 51, 89)'} />}
              draweWidth={300} 
              contentComponent={DrawerContent}
            >
              <Scene type="reset" key="dates" component={Dates}  
              renderRightButton={() => (
                  
                      <TouchableOpacity  style={{padding:5}} onPress={Actions.modalDate}>
                        <Icon name="plus" size={30} color={'rgb(5, 51, 89)'} />
                      </TouchableOpacity>
                  
                )}/>
            </Drawer>
          <Scene key="modalDate" component={DateModal}/>
        </Lightbox>
      </Router>
    </AppState>
  );
};

const DateModal = () => {
  return (
    <LightBoxDate      
      verticalPercent={0.6}
      horizontalPercent={1}
    />
  )
}




export default App;
