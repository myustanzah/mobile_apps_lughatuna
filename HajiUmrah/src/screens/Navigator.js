import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { headerNavDashboard } from "../styles/dashboard";
import { headerGetStarted } from "../styles/getStarted";

import GetStarted from "./intro/GetStarted";
import NavDasboard from "./dashboard/NavDasboard";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function MyNavRoute(){

    const navigation = useNavigation()
    
    useEffect(()=>{
        _retrieveData = async () => {
          try {
            const value = await AsyncStorage.getItem('isInstall');
            if (value !== null) {
              // We have data!!
              navigation.navigate("NavDashboard", { screen: "dashboard" })
            }
          } catch (error) {
            // Error retrieving data
            console.warn(error)
          }
        };
    
        _retrieveData()
      },[])
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="GetStarted" component={GetStarted} options={headerGetStarted}/>
            <Stack.Screen name="NavDashboard" component={NavDasboard} options={headerNavDashboard}/>
        </Stack.Navigator>
    );
}