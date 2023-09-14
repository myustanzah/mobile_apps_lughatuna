/**
 * 
 * @author
 * 
 * M. Yustanzah
 */


import React, { useEffect } from "react";
import { StyleSheet } from 'react-native';
import { GalioProvider, Text, withGalio } from "galio-framework"
import { NavigationContainer } from "@react-navigation/native";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import MyNavRoute from "./src/screens/Navigator";

import { API_KEY } from "./src/constants/"
import fontLemonMilk from "./src/assets/Font/bad_hawk/BadHawkDemoRegular.ttf"


function App(){

  useEffect(()=>{
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
    Purchases.configure({apiKey: API_KEY})
  },[])

  const customTheme = {
    fontFamily: "BadHawkDemoRegular"
  }

  return (
    <NavigationContainer>
      <GalioProvider theme={customTheme}>
        <MyNavRoute></MyNavRoute>
      </GalioProvider>
    </NavigationContainer>
  ) 
}

const styles = theme => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.FACEBOOK,
    fontFamily: "BadHawkDemoRegular"
  }
})


export default withGalio(App, styles)
