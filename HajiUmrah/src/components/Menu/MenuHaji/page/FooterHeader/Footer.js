import React, { useRef } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import ModalHaji from '../Modal';

export default function Footer({onNext, onPrevious, increaseSize, decreaseSize, playSound}){
    const childRef = useRef();
    const navigation = useNavigation()

    const triggerModalShow = () => {
        childRef.current.showModal();
    }

    function goToMenu(){
        navigation.goBack()
    }

    const gotoWebSIte = useCallback(async () => {
          await Linking.openURL('http://islampedia.store');
      }, []);

    return (
            <View style={styles.container}>
                <ModalHaji ref={childRef} />
                <TouchableOpacity style={styles.button} onPress={triggerModalShow}>
                    <Image source={require('../../../../../assets/daftar_isi_bg.png')} style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={gotoWebSIte}>
                    <Image source={require('../../../../../assets/peta_bg.png')} style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPrevious}>
                    <Image source={require('../../../../../assets/mundur_bg.png')} style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToMenu}>
                    <Image source={require('../../../../../assets/home_bg.png')} style={{width: 40, height: 45}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onNext}>
                    <Image source={require('../../../../../assets/lanjut_bg.png')} style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={playSound}>
                    <Image source={require('../../../../../assets/audio_bg.png')} style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decreaseSize}>
                    <Image source={require('../../../../../assets/zoom_out.png')} style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={increaseSize}>
                    <Image source={require('../../../../../assets/zoom_in.png')} style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 1,
        backgroundColor: "#FFFBD2",
    },
    button: {
        alignItems: "center",
        justifyContent: "center"
    }
})