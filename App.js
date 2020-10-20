/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react'
import { Scene, Router, Stack, Drawer, Actions } from "react-native-router-flux";

import AppState from "./src/context/state";
import Login from "./src/screens/login.js";
import Dates from './src/screens/dates.js';
import DrawerContent from './src/components/DrawerContext';
const App = () => {
  return (
    <AppState>
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="login" component={Login} initial />
          <Drawer 
            hideNavBar 
            key="drawer" 
            drawerImage={require('./src/assets/menu_burger.png')} 
            draweWidth={300} 
            contentComponent={DrawerContent}
          >
            <Scene key="dates" component={Dates}/>
          </Drawer>
        </Stack>
      </Router>
    </AppState>
  );
};



export default App;
