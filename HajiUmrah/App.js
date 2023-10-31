/**
 * 
 * @author
 * 
 * M. Yustanzah
 */


import React, { useEffect } from "react";
import { GalioProvider, Text, withGalio } from "galio-framework";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import MyNavRoute from "./src/screens/Navigator";
import { API_KEY } from "./src/constants/";
import { Provider } from "react-redux";
import store from "./src/store/reducer";
import { GestureHandlerRootView } from "react-native-gesture-handler";


function App(){
  

  // useEffect(()=>{
  //   Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
  //   Purchases.configure({apiKey: API_KEY})
  // },[])


  return (
    <NavigationContainer>
      <Provider store={store}>
        <GalioProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <MyNavRoute></MyNavRoute>
          </GestureHandlerRootView>
        </GalioProvider>
      </Provider>
    </NavigationContainer>
  ) 
}

export default App
