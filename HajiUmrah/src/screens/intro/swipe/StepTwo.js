import React, { useEffect } from "react";
import { Text } from "galio-framework";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient"

export default function StepTwo({navigation}){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("NavDashboard", { screen: "dashboard" })
        }, 4000)
    }, [])

    return (
        <LinearGradient start={{x: 0, y: 0.3}} end={{x: 1, y: 0}} colors={['#fffc00', '#ffffff']} style={styles.container}>
            <View style={styles.positionContent1}>
                <Image source={require('../../../assets/icon.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.positionContent2}>
                <Text style={styles.textJudul} h6>MENELADANI HAJI & UMRAH RASULULLAH</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    positionContent1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    positionContent2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%",
    },
    textJudul: {
        textAlign: "center",
        color: "black",
        fontFamily: "BadHawkDemoRegular"
    },
})