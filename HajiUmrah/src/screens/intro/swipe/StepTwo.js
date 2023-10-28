import React, { useEffect } from "react";
import { Text } from "galio-framework";
import { Image, StyleSheet, View } from "react-native";

export default function StepTwo({navigation}){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('StepThree', {name: 'StepThree'})
        }, 4000)
    }, [])

    return (
            <View style={styles.container}>
                <View style={styles.positionContent1}>
                    <Image source={require('../../../assets/logo_1.png')} style={{width: 90, height: 110}}></Image>
                </View>
                <View style={styles.positionContent2}>
                    <Text style={styles.textJudul} h5>Meneladani {'\n'}Haji & Umrah {'\n'}Rasulullah</Text>
                </View>
            </View>
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