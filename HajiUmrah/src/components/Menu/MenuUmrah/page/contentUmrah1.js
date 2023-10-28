import React, { useRef, useState } from "react";
import { Button, Text } from "galio-framework";
import { StyleSheet, View, FlatList, Image, ImageBackground, Dimensions, Pressable, TouchableOpacity, Alert } from "react-native";
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import SoundPlayer from "react-native-sound-player";

import Footer from "./FooterHeader/Footer";
import Header from "./FooterHeader/Header";
import { API_IMAGES } from "../../../../constants";

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

    const panGestureRef = useRef();
    const flatListRef = useRef(null);

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
                onPrevious={onPrevious}
                decreaseSize={decreaseSize}
                increaseSize={increaseSize}
                playSound={playSound}
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