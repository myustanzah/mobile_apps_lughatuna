import React, { useRef } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import ModalHaji from '../ModalHaji';
import SoundPlayer from 'react-native-sound-player';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderLabel, setIsPlay } from '../../../../../store/UtilStore/utilCreator';

export default function FooterHaji({onNext, onItemClick, dataDaftarIsi, onNextDisable, onPrevDisable, onPrevious, increaseSize, decreaseSize, playSound}){
    const childRef = useRef();
    const navigation = useNavigation();
    const isPlay = useSelector(state => state.UtilReducer.isPlay);
    const dispatch = useDispatch();
    
    const triggerModalShow = () => {
        childRef.current.showModalHaji();
    }

    function goToMenu(){
        // dispatch(setHeaderLabel("HAJI & UMRAH"))
        navigation.goBack()
    }

    const gotoWebSIte = useCallback(async () => {
          await Linking.openURL('http://islampedia.store');
      }, []);

    const nextBtn = () => {

        if (onNextDisable) {
            return (
                <TouchableOpacity style={styles.button} disabled>
                    <Image source={require('../../../../../assets/lanjut_bg.png')} style={[styles.sizeBtn, { opacity: 0.1 }]}></Image>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.button} onPress={onNext}>
                    <Image source={require('../../../../../assets/lanjut_bg.png')} style={styles.sizeBtn}></Image>
                </TouchableOpacity>
            )
        }
    }

    const prevBtn = () => {
        if (onPrevDisable) {
            return (
                <TouchableOpacity style={styles.button} disabled>
                    <Image source={require('../../../../../assets/mundur_bg.png')} style={[styles.sizeBtn, { opacity: 0.1 }]}></Image>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.button} onPress={onPrevious}>
                    <Image source={require('../../../../../assets/mundur_bg.png')} style={styles.sizeBtn}></Image>
                </TouchableOpacity>
            )
        }
    }

    function pausePlay(){
        dispatch(setIsPlay(false))
        SoundPlayer.pause()
    }

    function btnPlayTrigger(){
        if (isPlay) {
            return (
                <TouchableOpacity style={styles.button} onPress={pausePlay}>
                    <Image source={require('../../../../../assets/pause.png')} style={styles.pauseBtn}></Image>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.button} onPress={playSound}>
                    <Image source={require('../../../../../assets/audio_bg.png')} style={styles.sizeBtn}></Image>
                </TouchableOpacity>
            )
        }

    }

    return (
            <View style={styles.container}>
                <ModalHaji onItemClick={onItemClick} dataDaftarIsi={dataDaftarIsi} ref={childRef} />
                <TouchableOpacity style={styles.button} onPress={triggerModalShow}>
                    <Image source={require('../../../../../assets/daftar_isi_bg.png')} style={styles.sizeBtn}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={gotoWebSIte}>
                    <Image source={require('../../../../../assets/peta_bg.png')} style={styles.sizeBtn}></Image>
                </TouchableOpacity>
                {prevBtn()}
                <TouchableOpacity style={styles.button} onPress={goToMenu}>
                    <Image source={require('../../../../../assets/home_bg.png')} style={{width: 40, height: 45}}></Image>
                </TouchableOpacity>
                {nextBtn()}
                {btnPlayTrigger()}
                <TouchableOpacity style={styles.button} onPress={decreaseSize}>
                    <Image source={require('../../../../../assets/zoom_out.png')} style={styles.sizeBtn}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={increaseSize}>
                    <Image source={require('../../../../../assets/zoom_in.png')} style={styles.sizeBtn}></Image>
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
    },
    sizeBtn: {
        width: 40, 
        height: 40
    },
    pauseBtn: {
        width: 27, 
        height: 27
    }
})