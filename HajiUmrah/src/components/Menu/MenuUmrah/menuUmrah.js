import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions, FlatList, Platform } from "react-native"
import { PanGestureHandler, State } from "react-native-gesture-handler"
import { JudulMenu } from "../style/style"
import { checkSubscription } from "../../../helpers/checkSubcription";
import { setDataDetailMenu, setHeaderLabel } from "../../../store/UtilStore/utilCreator";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { API_IMAGES } from "../../../constants";

const styles = StyleSheet.create(JudulMenu);

const heightMobileUI = 896;
const widthMobileUI = 414;
const {width, height} = Dimensions.get("window");
const windowWidth = (width * 351) / widthMobileUI;
const windowHeight = (height * 180) / heightMobileUI;
const menuIconUri = API_IMAGES + "/Menu/Menu1/";


export default function MenuUmrah() {
    
    const [allMenuData, setAllMenuData] = useState([
        {
            title: `Manasik Umrah${'\n'} Pertama : ${'\n'}`,
            title_detail: "IHRAM",
            onPress: () => goToPageOne(),
            imgIndex: 0,
            style: 1
        },
        {
            title: `Manasik Umrah${'\n'} Kedua : ${'\n'}`,
            title_detail: "Tawaf",
            onPress: () => goToPageTwo(),
            imgIndex: 1,
            style: 1
        },
        {
            title: `Manasik Umrah${'\n'} Ketiga : ${'\n'}`,
            title_detail: "SAI",
            onPress: () => goToPageThree(),
            imgIndex: 2,
            style: 1
        },
        {
            title: `Manasik Umrah${'\n'} Terakhir : ${'\n'}`,
            title_detail: "Tahallul",
            onPress: () => goToPageFour(),
            imgIndex: 3,
            style: 1
        },
    ]);

    const [imgRender, setImgRender] = useState([
        { uri: menuIconUri + 'u_01.png'},
        { uri: menuIconUri + 'u_02.png'},
        { uri: menuIconUri + 'u_03.png'},
        { uri: menuIconUri + 'u_04.png'},
    ])

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goToDetailMenu = () => {
        dispatch(setDataDetailMenu(allMenuData))
        dispatch(setHeaderLabel("UMRAH"))
        navigation.navigate("detailMenu")
    }

    const goToPageOne = async () => {
        navigation.navigate("contentUmrahOne")
    }

    const goToPageTwo = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentUmrahTwo")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageThree = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentUmrahThree")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageFour = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentUmrahFour")
        } else {
            navigation.navigate("paywal")
        }
    }
    const flatListRef = useRef();
    const gestureRef = useRef();

    let currentIndex = 0;
    const autoScroll = () => {
        if (currentIndex < allMenuData.length - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
    
        // Menggerakkan ScrollView ke indeks berikutnya
        // scrollViewRef.current.scrollTo({
        //   x: currentIndex * windowWidth,
        //   animated: true,
        // });
        flatListRef.current.scrollToIndex({ index: currentIndex });
      };

      useEffect(() => {
        const interval = setInterval(autoScroll, 5000); // Ganti dengan interval waktu yang Anda inginkan (dalam milidetik)
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex]);


      const onGestureEvent = (event) => {
        // Mengatur pengontrol geser untuk mengubah indeks slide berdasarkan gerakan
        if (event.nativeEvent.state === State.END) {
          const translationX = event.nativeEvent.translationX;
    
          if (translationX < -50 && currentIndex < allMenuData.length - 1) {
            currentIndex++;
          } else if (translationX > 50 && currentIndex > 0) {
            currentIndex--;
          }
    
          flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
          gestureRef.current.setNativeProps({ translationX: 0 });
        }
      };

    return (
        <View style={styles.containerMenu}>
            <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/logo_1.png')} style={{ width: wp(18), height: hp(11.5), resizeMode: "cover" }}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" size={wp(4)} style={styles.fontJudul}>MENELADANI {'\n'}<Text color="yellow">UMRAH</Text> {'\n'}RASULULLAH</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.lihatSemua} onPress={goToDetailMenu}>
                <Text color="yellow" size={wp(3)}>LIHAT SEMUA</Text>
            </TouchableOpacity>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                ref={gestureRef}
                simultaneousHandlers={flatListRef}
                >
                <FlatList 
                    horizontal 
                    pagingEnabled={true}
                    data={allMenuData}
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={styles.lineOne} 
                    ref={flatListRef}
                    initialScrollIndex={0}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=> (
                        <TouchableOpacity style={[styles.btnMenu, { width: width > 400 ? wp('91.6%') : wp('86.9%'), height: height > 800 ? hp('18%') : hp('20%') }]} onPress={item.onPress}>
                            <ImageBackground
                                source={{uri : imgRender[item.imgIndex].uri}}
                                resizeMode="cover"
                                style={[styles.imgBg, { width: "100%", height: "100%" }]}
                            >
                                <Text style={[styles.btnText, { fontSize: hp('2.5%') }]} color="black">{item.title}<Text bold h3>{item.title_detail}</Text></Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />
                </PanGestureHandler>
        </View>
    )
}

const styleInside = StyleSheet.create({

})