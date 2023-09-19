import * as React from "react";
import { useNavigation } from "@react-navigation/native"
import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { JudulMenu } from "../style/style"

const styles = StyleSheet.create(JudulMenu);

// import ButtonNormal from "../../Button/ButtonNormal";
// import HexagonGrid from "../../Button/HexagonGrid";
// import ButtonHexagon from "../../Button/ButtonHexagon"

export default function MenuUmrah(){

    const navigation = useNavigation();
    

    const goToPageOne = () => {
        navigation.navigate("pageOne")
    }

    const goToPagePaywall = () => {
        navigation.navigate("paywal")
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
            {/* <HexagonGrid data={hexagonData} /> */}
            <View style={styles.menu}>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu1/u1.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu1/u2.png')} style={{width: 80, height: 80}}/>
                    </TouchableOpacity>
                    {/* <ButtonNormal title="Manasik Umrah Kedua : Ihram" onPress={goToPageOne} color="green" size="large" />
                    <ButtonNormal title="Manasik Umrah Kedua : Tawaf" color="red" onPress={goToPagePaywall} size="large" /> */}
                </View>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu1/u3.png')} style={{width: 80, height: 80}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu1/u4.png')} style={{width: 80, height: 80}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu1/u5.png')} style={{width: 80, height: 80}}/>
                    </TouchableOpacity>
                    {/* <ButtonNormal title="Manasik Umrah Ketiga : Sai" color="blue" size="large" />
                    <ButtonNormal title="Manasik Umrah Terakhir : Tahallul" color="black" size="large" />
                    <ButtonNormal title="Manasik Umrah Terakhir : Tahallul" color="black" size="large" />    */}
                </View>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu1/u1.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu1/u2.png')} style={{width: 80, height: 80}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}