import { Text } from "galio-framework";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient"

// Style
import { bodyDashboard } from "../../styles/dashboard";

// Component
import HeaderDashboardNew from "../../components/headerDashboardNew";
import FooterDashboard from "../../components/footerDashboard";
import MenuUmrah from "../../components/Menu/MenuUmrah/menuUmrah";
import Menuhaji from "../../components/Menu/MenuHaji/menuHaji";
import MenuSeputarHajiUmrah from "../../components/Menu/MenuSeputerHaji&Umrah/menuSeputarHajiUmrah";
import MenuSerbaSerbi from "../../components/Menu/MenuSerbaSerbi/menuSerbaSerbi";

const style = StyleSheet.create(bodyDashboard)

export default function Dashboard(){
    return (
            <LinearGradient start={{x: 0, y: 0.3}} end={{x: 1, y: 0}} colors={['#fffc00', '#ffffff']} style={style.partBody}>
                <HeaderDashboardNew />
                    <ScrollView>
                        <MenuUmrah />
                        <Menuhaji />
                        <MenuSeputarHajiUmrah />
                        <MenuSerbaSerbi />
                    </ScrollView>
                <FooterDashboard />
            </LinearGradient>
    )
}