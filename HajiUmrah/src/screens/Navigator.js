import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { headerNavDashboard } from "../styles/dashboard";
import { headerGetStarted } from "../styles/getStarted";

import GetStarted from "./intro/GetStarted";
import NavDasboard from "./dashboard/NavDasboard";
// import StepOne from "./intro/swipe/StepOne";
// import StepTwo from "./intro/swipe/StepTwo";
// import Dashboard from "./dashboard/Dashboard";
// import PageOne from "../components/Menu/MenuUmrah/page/page1";

const Stack = createNativeStackNavigator();

export default function MyNavRoute(){
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="GetStarted" component={GetStarted} options={headerGetStarted}/>
            <Stack.Screen name="NavDashboard" component={NavDasboard} options={headerNavDashboard}/>


            {/* GetStarted */}
            {/* <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StepOne" component={StepOne}/>
                <Stack.Screen name="StepTwo" component={StepTwo}/>  
            </Stack.Group> */}
            {/* Dashboard */}
            {/* <Stack.Group>
                <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }}/>
                <Stack.Screen name="pageOne" component={PageOne}/>
            </Stack.Group> */}
        </Stack.Navigator>
    );
}