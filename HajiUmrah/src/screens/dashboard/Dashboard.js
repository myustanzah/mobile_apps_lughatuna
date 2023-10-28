import { useEffect } from "react";
import { Text } from "galio-framework";
import { BackHandler, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

// Style
import { bodyDashboard } from "../../styles/dashboard";

// Component
import HeaderDashboardNew from "../../components/headerDashboardNew";
import FooterDashboard from "../../components/footerDashboard";
import MenuUmrah from "../../components/Menu/MenuUmrah/menuUmrah";
import MenuHaji from "../../components/Menu/MenuHaji/menuHaji";
import MenuLampiran from "../../components/Menu/MenuSeputerHaji&Umrah/menuLampiran";


const style = StyleSheet.create(bodyDashboard)

export default function Dashboard(){
    
    const route = useRoute()

    const handleBackButton = () => {
        
        // Di sini Anda dapat menentukan logika untuk menutup aplikasi
        if (route.name === "dashboard") {
          BackHandler.exitApp(); // Menutup aplikasi
          return true; // Menghentikan peristiwa "kembali"
        }
        
        return false; // Lanjutkan peristiwa "kembali" normal
      };
      
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, []);

    return (
            <SafeAreaView style={style.partBody}>
                <HeaderDashboardNew headerColor={"#222222"} textColor={"white"} centerColor={"yellow"} />
                    <ScrollView style={style.scroolBody}>
                        <MenuUmrah />
                        <MenuLampiran />
                        <MenuHaji />
                    </ScrollView>
                <FooterDashboard colorText={"white"} />
            </SafeAreaView>
    )
}