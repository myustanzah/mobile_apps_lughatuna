import React, { useEffect, useRef } from "react";
import { Text } from "galio-framework";
import { Animated, Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StepOne({navigation}){
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(()=>{
        _retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem('isInstall');
              if (value === null) {
                // We have data!!
                const animation = Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 6000,
                    useNativeDriver: true
                });
        
                animation.start(() => {
                    navigation.navigate('StepTwo', {name: 'StepTwo'})
                })
        
                return () => {
                    animation.stop();
                }
              }
            } catch (error) {
              // Error retrieving data
              console.warn(error)
            }
          };

        
          _retrieveData()
    },[fadeAnim, navigation])
    

    return (
            <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
                <View>
                    <Image source={require('../../../assets/bismillah.png')} style={{width: 100, height: 100}}></Image>
                </View>
            </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#184531",
        justifyContent: 'center',
        alignItems: 'center'
    }
})