
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageOne from "../../components/Menu/MenuUmrah/page/page1";
import PagePaywall from "../../components/Menu/MenuUmrah/page/pagePaywall";
import Dashboard from "./Dashboard";

const DashboardStartedStack = createNativeStackNavigator();

export default function NavDasboard(){
    
    return (
        <DashboardStartedStack.Navigator>
            <DashboardStartedStack.Screen name="dashboard" component={Dashboard} options={{title: "dashboard", headerShown: false}}/>
            <DashboardStartedStack.Screen name="paywal" component={PagePaywall} options={{title: "Islampedia Store Premium"}} />
            <DashboardStartedStack.Screen name="pageOne" component={PageOne} options={{title: "pageOne"}} />
        </DashboardStartedStack.Navigator>
    )
}