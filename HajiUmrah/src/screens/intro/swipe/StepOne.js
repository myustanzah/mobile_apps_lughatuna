import React, { useEffect } from "react";
import { Text } from "galio-framework";
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient"

export default function StepOne({navigation}){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('StepTwo', {name: 'StepTwo'})
        }, 4000)

    },[])

    return (
        <LinearGradient start={{x: 0, y: 0.3}} end={{x: 1, y: 0}} colors={['#fffc00', '#ffffff']} style={styles.container}>
            <View>
                <Image source={require('../../../assets/bismillah.png')} style={{width: 100, height: 100}}></Image>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center'
    }
})