
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PagePaywall from "../../components/PackageItem/pagePaywall";
import Dashboard from "./Dashboard";
import DetailMenu from "../../components/Menu/DetailMenu";

//Page Content
import ContentUmrahOne from "../../components/Menu/MenuUmrah/page/contentUmrah1";
import ContentUmrahTwo from "../../components/Menu/MenuUmrah/page/contentUmrah2";
import ContentUmrahThree from "../../components/Menu/MenuUmrah/page/contentUmrah3";
import ContentUmrahFour from "../../components/Menu/MenuUmrah/page/contentUmrah4";

import ContentSHUOne from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU1";
import ContentSHUTwo from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU2";
import ContentSHUThree from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU3";
import ContentSHUFour from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU4";
import ContentSHUFive from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU5";
import ContentSHUSix from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU6";
import ContentSHUSeven from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU7";
import ContentSHUEight from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU8";
import ContentSHUNine from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU9";
import ContentSHUTen from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU10";
import ContentSHUEleven from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU11";
import ContentSHUTwelve from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU12";
import ContentSHUThirteen from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU13";
import ContentSHUFourteen from "../../components/Menu/MenuSeputerHaji&Umrah/page/contentSHU14";

import ContentHajiOne from "../../components/Menu/MenuHaji/page/contentHaji1";
import ContentHajiTwo from "../../components/Menu/MenuHaji/page/contentHaji2";
import ContentHajiThree from "../../components/Menu/MenuHaji/page/contentHaji3";
import ContentHajiFour from "../../components/Menu/MenuHaji/page/contentHaji4";

const DashboardStartedStack = createNativeStackNavigator();

export default function NavDasboard() {
    return (
        <DashboardStartedStack.Navigator>
            <DashboardStartedStack.Screen name="dashboard" component={Dashboard} options={{ title: "dashboard", headerShown: false }} />
            <DashboardStartedStack.Screen name="paywal" component={PagePaywall} options={{ title: "Islampedia Store Premium" }} />
            <DashboardStartedStack.Screen name="detailMenu" component={DetailMenu} options={{ title: "List Menu", headerShown: false }} />

            <DashboardStartedStack.Screen name="contentUmrahOne" component={ContentUmrahOne} options={{ title: "contentUmrahOne", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentUmrahTwo" component={ContentUmrahTwo} options={{ title: "contentUmrahTwo", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentUmrahThree" component={ContentUmrahThree} options={{ title: "contentUmrahThree", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentUmrahFour" component={ContentUmrahFour} options={{ title: "contentUmrahFour", headerShown: false }} />

            <DashboardStartedStack.Screen name="contentSHUOne" component={ContentSHUOne} options={{ title: "contentSHUOne", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUTwo" component={ContentSHUTwo} options={{ title: "contentSHUTwo", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUThree" component={ContentSHUThree} options={{ title: "contentSHUThree", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUFour" component={ContentSHUFour} options={{ title: "contentSHUFour", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUFive" component={ContentSHUFive} options={{ title: "contentSHUFive", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUSix" component={ContentSHUSix} options={{ title: "contentSHUSix", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUSeven" component={ContentSHUSeven} options={{ title: "contentSHUSeven", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUEight" component={ContentSHUEight} options={{ title: "contentSHUEight", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUNine" component={ContentSHUNine} options={{ title: "contentSHUNine", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUTen" component={ContentSHUTen} options={{ title: "contentSHUTen", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUEleven" component={ContentSHUEleven} options={{ title: "contentSHUEleven", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUTwelve" component={ContentSHUTwelve} options={{ title: "contentSHUTwelve", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUThirteen" component={ContentSHUThirteen} options={{ title: "contentSHUThirteen", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentSHUFourteen" component={ContentSHUFourteen} options={{ title: "contentSHUFourteen", headerShown: false }} />


            <DashboardStartedStack.Screen name="contentHajiOne" component={ContentHajiOne} options={{ title: "contentHajiOne", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentHajiTwo" component={ContentHajiTwo} options={{ title: "contentHajiTwo", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentHajiThree" component={ContentHajiThree} options={{ title: "contentHajiThree", headerShown: false }} />
            <DashboardStartedStack.Screen name="contentHajiFour" component={ContentHajiFour} options={{ title: "contentHajiFour", headerShown: false }} />

        </DashboardStartedStack.Navigator>
    )
}