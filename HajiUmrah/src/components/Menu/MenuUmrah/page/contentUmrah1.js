import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View, FlatList, Image, ImageBackground, Dimensions, Pressable, TouchableOpacity, Alert } from "react-native";
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import SoundPlayer from "react-native-sound-player";

import Footer from "./FooterHeader/Footer";
import Header from "./FooterHeader/Header";
import { API_IMAGES } from "../../../../constants";
import { setIsPlay } from "../../../../store/UtilStore/utilCreator";

const { width, height } = Dimensions.get('window');
const folderFile = "01_ihram"
const logoUri = API_IMAGES + "01_umrah/" + folderFile + "/ihram.png"

const ContentUmrahOne = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const [incWidth, setIncWidth] = useState(0);
    const [incHeight, setIncHeight] = useState(0);
    const [mode, setMode] = useState("cover");
    const [slide, setSlide] = useState(0);
    const [btnNextDisable, setBtnNextDisable] = useState(false);
    const [btnPrevDisable, setBtnPrevDisable] = useState(false);

    const panGestureRef = useRef();
    const flatListRef = useRef(null);
    const dispatch = useDispatch();

    const onPrevious = () => {
        if (slide === 0) return; 
        if(flatListRef.current){
            flatListRef.current.scrollToIndex({index: slide - 1})
            setSlide(slide - 1);
        }
    }
    const onNext = () => {
        if (slide === dataBook.length - 1) return; 
        if(flatListRef.current){
            flatListRef.current.scrollToIndex({index: slide + 1})
            setSlide(slide + 1);
        }
    }
    // API_IMAGES
    const dataBook = [
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/001.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/001.mp3'}, 
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/002.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/002.mp3'}, 
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/003.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/003.mp3'}, 
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/004.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/004.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/005.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/005.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/006.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/006.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/007.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/007.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/008.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/008.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/009.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/009.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/010.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/010.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/011.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/011.mp3'},
        { uri: API_IMAGES + '/01_umrah/'+  folderFile  +'/image/012.png', audio: API_IMAGES + '/01_umrah/'+  folderFile  +'/audio/012.mp3'},
    ]

    const daftarIsi = [
        { id: 0 ,title: 'Manasik Umrah', onFungsi: false, styles: { fontWeight: "bold", bgColor: "grey" } },
        { id: 1 ,title: 'Umrah Mudah & Singkat', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 2 ,title: 'Manasik Umrah Pertama: IHRAM', onFungsi: false, styles: { fontWeight: "bold", bgColor: "grey" } },
        { id: 99 ,title: 'Rangkaian Pekerjaan Sebelum Ihram', onFungsi: true, styles: { fontWeight: "bold", bgColor: "" } },
        { id: 3 ,title: '1. Mandi', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 4 ,title: '2. Mengenakan Wewangian', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 96 ,title: '3. Memakai Pakain Ihram', onFungsi: true, styles: { fontWeight: "", bgColor: "" } },
        { id: 5 ,title: '  a. Pakaian Ihram Pria', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 6 ,title: '     Izar dan Rida', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 7 ,title: '  b. Pakaian Ihram Wanita', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 98 ,title: 'Rangkaian Pekerjaan Saat Ihram', onFungsi: true, styles: { fontWeight: "bold", bgColor: "" } },
        { id: 8 ,title: '  Niat Umrah', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 97 ,title: 'Rangkaian Pekerjaan Setelah Ihram', onFungsi: true, styles: { fontWeight: "bold", bgColor: "grey" } },
        { id: 9 ,title: '1. Membaca Talbiyah', onFungsi: false, styles: { fontWeight: "", bgColor: "grey" } },
        { id: 10 ,title: '   Bacaan Talbiyah', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
        { id: 11 ,title: '2. Tidak Melanggar Larangan Ihram', onFungsi: false, styles: { fontWeight: "", bgColor: "" } },
      ];

    function onItemClick(index){
        setSlide(index)
        flatListRef.current.scrollToIndex({index: index})
    }

    useEffect(()=>{

        if(slide === dataBook.length - 1){
            setBtnNextDisable(true);
        } else {
            setBtnNextDisable(false)
        }

        if(slide === 0){
            setBtnPrevDisable(true);
        } else {
            setBtnPrevDisable(false)
        }

    },[slide, setBtnNextDisable])

    const onGestureEvent = (event) => {
        if (event.nativeEvent.translationY > 0) {
          setShowHeader(true);
          setShowFooter(true);
        } else if (event.nativeEvent.translationY < -1) {
          setShowHeader(false);
          setShowFooter(false);
        }
      };

    const onCancelHandler = () => {
        setShowHeader(true);
        setShowFooter(true);
    }

    const increaseSize = () => {
        setIncHeight(incHeight + 20);
        setIncWidth(incWidth + 20);
        setMode("contain");
    }

    const decreaseSize = () => {
        if (incHeight || incWidth > 0) {
            setIncHeight(incHeight - 20);
            setIncWidth(incWidth - 20);
        } else {
            setMode("cover")
            return
        };
    }

    const playSound = () => {
        try {
            SoundPlayer.playUrl(dataBook[slide].audio)
        } catch (e) {
            Alert.alert(e)
            console.log(`cannot play the sound file`, e)
        }
        dispatch(setIsPlay(true))
    }

    
    return (
        <View style={styles.container}>
            {showHeader && <Header logoUri={logoUri} ></Header>}
            <PanGestureHandler
                    ref={panGestureRef}
                    onGestureEvent={onGestureEvent}
                    simultaneousHandlers={panGestureRef}
                >
                <FlatList
                    ref={flatListRef}
                    horizontal
                    data={dataBook}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    snapToAlignment="center"
                    decelerationRate={'fast'}
                    pagingEnabled={true}
                    contentContainerStyle={styles.bookLine}
                    onScroll={data => {
                        const offset = data.nativeEvent.contentOffset.x / width;
                        const hasDecimal = offset - Math.floor(offset) !== 1;
                        if(!hasDecimal) {
                            const newSlide = offset + 1;
                            if(newSlide >= 1 || newSlide <= data.length) setSlide(newSlide);
                        }
                    }}
                    //can set 1 - 16
                    scrollEventThrottle={0}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View
                            style={[styles.boxImgStyle]}
                        >
                           <ImageBackground
                                source={{uri: item.uri}}
                                resizeMode={mode}
                                style={[styles.imgStyle, { width: width + incWidth, height: height + incHeight }]}
                            >
                            </ImageBackground> 
                        </View>
                    )}
                    />    
                </PanGestureHandler>
            {showFooter && 
            <Footer 
                onNext={onNext} 
                dataDaftarIsi={daftarIsi}
                onNextDisable={btnNextDisable}
                onPrevDisable={btnPrevDisable}
                onPrevious={onPrevious}
                decreaseSize={decreaseSize}
                increaseSize={increaseSize}
                playSound={playSound}
                onItemClick={onItemClick}
            ></Footer>}
        </View>
    )
}

export default ContentUmrahOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bookLine: {
        zIndex: 1,
    },
    boxImgStyle: {
        width : width, 
        // height: height - ( height > 800 ? 260 : 168),
        height: height,
        justifyContent: "center",
        alignItems: "center",

    },
    imgStyle: {
        // width : width - (width > 400 ? 150 : 50), 
        // height: height - ( height > 800 ? 260 : 168),
    },
    boxButton: {
        width,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    triggerHideHF: {
        width: "100%",
        height: "20%",
        position: "absolute",
        zIndex: 2
    }
})