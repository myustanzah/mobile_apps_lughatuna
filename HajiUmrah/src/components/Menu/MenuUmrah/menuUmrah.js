import * as React from "react";
import { useNavigation } from "@react-navigation/native"
import { Text } from "galio-framework"
import { View, StyleSheet, Image } from "react-native"

import ButtonNormal from "../../Button/ButtonNormal";
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
                <Image source={require('../../../assets/icon.png')} style={{width: 50, height: 50}}></Image>
                <Text color="black">MENELADANI UMRAH RASULLUAH</Text>
            </View>
            {/* <HexagonGrid data={hexagonData} /> */}
            <View style={styles.menu}>
                <ButtonNormal title="Manasik Umrah Kedua : Ihram" onPress={goToPageOne} color="green" size="large" />
                <ButtonNormal title="Manasik Umrah Kedua : Tawaf" color="red" onPress={goToPagePaywall} size="large" />
                <ButtonNormal title="Manasik Umrah Ketiga : Sai" color="blue" size="large" />
                <ButtonNormal title="Manasik Umrah Terakhir : Tahallul" color="black" size="large" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMenu: {
        width: "100%",
        height: "auto",
        padding: 40
    },
    judul: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    menu: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    }
})