import * as React from "react";
import { useNavigation } from "@react-navigation/native"
import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native"
import { JudulMenu } from "../style/style"
import { checkSubscription } from "../../../helpers/checkSubcription";

const styles = StyleSheet.create(JudulMenu);

// import ButtonNormal from "../../Button/ButtonNormal";
// import HexagonGrid from "../../Button/HexagonGrid";
// import ButtonHexagon from "../../Button/ButtonHexagon"

export default function MenuUmrah(){

    const navigation = useNavigation();
    

    const goToPageOne = () => {
        navigation.navigate("pageOne")
    }

    const goToPageTwo = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("pageTwo")
        } else {
            navigation.navigate("paywal")
        }
    }

    // const hexagonData = [
    //     [null, { title: 'Manasik Umrah Kedua : Ihram', onPress: () => goToPageOne(), color : "red" }, { title: 'Manasik Umrah Kedua : Ihram', onPress: () => goToPageOne(), color : "blue" }, null, null],
    //     [null, { title: 'Manasik Umrah Kedua : Ihram', onPress: () => goToPageOne(), color : "blue" }, { title: 'Manasik Umrah Kedua : Ihram', onPress: () => goToPageOne(), color : "red" }, null, null],
    //   ];
      
    
    
    return (
        <View style={styles.containerMenu}>
            <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/logo_1.png')} style={{width: 65, height: 75}}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" size={15} style={styles.fontJudul}>MENELADANI {'\n'}<Text color="yellow">UMRAH</Text> {'\n'}RASULULLAH</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.lihatSemua}>
                <Text color="yellow">lihat semua</Text>
            </TouchableOpacity>
            <View style={styles.menu}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.lineOne}>
                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageOne}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_01.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         >
                            <Text style={styles.btnText} color="black">Menasik Umrah Pertama : <Text bold h3>IHRAM</Text></Text>
                         </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageTwo}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_02.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         >
                            <Text style={styles.btnText} color="black">Menasik Umrah Kedua :       <Text bold h3>TAWAF</Text></Text>
                         </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageTwo}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_03.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         >
                            <Text style={styles.btnText} color="black">Menasik Umrah Ketiga :                 <Text bold h3>SAI</Text></Text>
                         </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageTwo}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_04.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         >
                            <Text style={styles.btnText} color="black">Menasik Umrah Terakhir : <Text bold h3>TAHALLUL</Text></Text>
                         </ImageBackground>
                    </TouchableOpacity>
                    
                    {/* <ButtonNormal title="Manasik Umrah Kedua : Ihram" onPress={goToPageOne} color="green" size="large" />
                    <ButtonNormal title="Manasik Umrah Kedua : Tawaf" color="red" onPress={goToPagePaywall} size="large" /> */}
                </ScrollView>
            </View>
        </View>
    )
}