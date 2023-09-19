/**
 * 
 * @author
 * 
 * M. Yustanzah
 */


import React, { useEffect } from "react";
import { GalioProvider, Text, withGalio } from "galio-framework"
import { NavigationContainer } from "@react-navigation/native";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import MyNavRoute from "./src/screens/Navigator";

import { API_KEY } from "./src/constants/"


function App(){

  useEffect(()=>{
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
    Purchases.configure({apiKey: API_KEY})
  },[])


  return (
    <NavigationContainer>
      <GalioProvider>
        <MyNavRoute></MyNavRoute>
      </GalioProvider>
    </NavigationContainer>
  ) 
}

export default App
