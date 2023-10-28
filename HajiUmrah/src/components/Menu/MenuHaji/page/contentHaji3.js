import React, { useRef, useState } from "react";
import { Button, Text } from "galio-framework";
import { StyleSheet, View, FlatList, Image, ImageBackground, Dimensions, Pressable, TouchableOpacity, Alert } from "react-native";
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import SoundPlayer from "react-native-sound-player";

import Footer from "./FooterHeader/Footer";
import Header from "./FooterHeader/Header";
import { API_IMAGES } from "../../../../constants";

const { width, height } = Dimensions.get('window');
const folderFile = "10_iduladha";
const logoUri = API_IMAGES + "03_haji/" + folderFile + "/iduladha.png";

const ContentHajiThree = () => {
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
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/044.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/044.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/045.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/045.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/046.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/046.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/047.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/047.mp3'},
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/048.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/048.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/049.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/049.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/050.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/050.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/051.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/051.mp3'},
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/052.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/052.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/053.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/053.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/054.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/054.mp3'}, 
        { uri: API_IMAGES + '/03_haji/'+  folderFile  +'/image/055.png', audio: API_IMAGES + '/03_haji/'+  folderFile  +'/audio/055.mp3'},
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
            {showHeader && <Header logoUri={logoUri}></Header>}
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

export default ContentHajiThree;

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