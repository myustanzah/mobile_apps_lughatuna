import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import StepOne from "./swipe/StepOne";
import StepTwo from "./swipe/StepTwo";
import StepThree from "./swipe/StepThree";

import { headerGetStarted } from "../../styles/getStarted";


const GetStartedStack = createNativeStackNavigator();

export default function GetStarted(){

    return (
        <GetStartedStack.Navigator>
            <GetStartedStack.Screen name="StepOne" component={StepOne} options={headerGetStarted}/>
            <GetStartedStack.Screen name="StepTwo" component={StepTwo} options={headerGetStarted}/>
            <GetStartedStack.Screen name="StepThree" component={StepThree} options={headerGetStarted}/>
        </GetStartedStack.Navigator>
    )
}