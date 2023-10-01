import React, { useEffect } from "react";
import { Text } from "galio-framework";
import { Image, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient"


// Font
// import BadHawkDemoRegular from '../../../assets/Font/BadHawkDemoRegular.ttf'

export default function StepTwo({navigation}){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('StepThree', {name: 'StepThree'})
        }, 4000)
    }, [])

    return (
        // <LinearGradient start={{x: 0, y: 0.3}} end={{x: 1, y: 0}} colors={['#fffc00', '#ffffff']} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.positionContent1}>
                    <Image source={require('../../../assets/logo_1.png')} style={{width: 90, height: 110}}></Image>
                </View>
                <View style={styles.positionContent2}>
                    <Text style={styles.textJudul} h5>Meneladani Haji & Umrah Rasulullah</Text>
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
        alignItems: 'center',
    },
    positionContent2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "60%",
    },
    textJudul: {
        textAlign: "center",
        color: "white",
        fontFamily: "TrajanPro",
    }
})