import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native"
import { JudulMenu } from "../style/style"
import { checkSubscription } from "../../../helpers/checkSubcription";
import { setDataDetailMenu } from "../../../store/UtilStore/utilCreator";

const styles = StyleSheet.create(JudulMenu);


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

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goToDetailMenu = () => {
        dispatch(setDataDetailMenu(allMenuData))
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





    return (
        <View style={styles.containerMenu}>
            <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/logo_1.png')} style={{ width: 65, height: 75 }}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" size={15} style={styles.fontJudul}>MENELADANI {'\n'}<Text color="yellow">UMRAH</Text> {'\n'}RASULULLAH</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.lihatSemua} onPress={goToDetailMenu}>
                <Text color="yellow">lihat semua</Text>
            </TouchableOpacity>
            <View style={styles.menu}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.lineOne}>
                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageOne}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_01.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                        >
                            <Text style={styles.btnText} color="black">Menasik Umrah Pertama : <Text bold h3>IHRAM</Text></Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageTwo}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_02.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                        >
                            <Text style={styles.btnText} color="black">Menasik Umrah Kedua :       <Text bold h3>TAWAF</Text></Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageThree}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_03.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                        >
                            <Text style={styles.btnText} color="black">Menasik Umrah Ketiga :                 <Text bold h3>SAI</Text></Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={goToPageFour}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu1/u_04.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                        >
                            <Text style={styles.btnText} color="black">Menasik Umrah Terakhir : <Text bold h3>TAHALLUL</Text></Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* <ButtonNormal title="Manasik Umrah Kedua : Ihram" onPress={goToPageOne} color="green" size="large" />
                    <ButtonNormal title="Manasik Umrah Kedua : Tawaf" color="red" onPress={goToPagePaywall} size="large" /> */}
                </ScrollView>
            </View>
        </View>
    )
}