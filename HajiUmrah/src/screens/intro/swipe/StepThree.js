import React, { useEffect } from "react";
import { Text } from "galio-framework";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native"


export default function StepThree({navigation}){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("NavDashboard", { screen: "dashboard" })
        }, 4000)
    }, [])
    
    useEffect(()=>{
        
        _storeData = async () => {
          try {
            await AsyncStorage.setItem('isInstall', 'true');

          } catch (error) {
            // Error saving data
            console.warn(error)
          }
        };
        
        _storeData()
      },[])

    return (
        // <LinearGradient start={{x: 0, y: 0.3}} end={{x: 1, y: 0}} colors={['#fffc00', '#ffffff']} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.positionContent1}>
                    <Image source={require('../../../assets/logo_1.png')} style={{width: 90, height: 110}}></Image>
                </View>
                <View style={styles.positionContent2}>
                    <Text style={styles.textJudul} h5>Aplikasi Visual Haji Umrah</Text>
                </View>
            </View>
        // </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#184531",
        alignItems: 'center',
    },
    positionContent1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    positionContent2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "70%",
    },
    textJudul: {
        textAlign: "center",
        color: "white",
        fontFamily: "TrajanPro"
    },
})