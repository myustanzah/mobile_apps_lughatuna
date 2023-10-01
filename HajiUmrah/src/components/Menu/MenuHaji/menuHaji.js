import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native"
import { JudulMenu } from "../style/style"
import { setDataDetailMenu } from "../../../store/UtilStore/utilCreator";
import { checkSubscription } from "../../../helpers/checkSubcription";

const styles = StyleSheet.create(JudulMenu);


export default function MenuHaji() {

    const [allMenuData, setAllMenuData] = useState([
        {
            title: `Manasik Haji${'\n'} Hari Pertama :`,
            tgl: '8',
            title_detail: "Hari Tarwiyah",
            onPress: () => goToPageOne(),
            imgIndex: 18,
            style: 3
        },
        {
            title: `Manasik Haji${'\n'} Hari Kedua :`,
            tgl: '9',
            title_detail: "Hari Arafah",
            onPress: () => goToPageTwo(),
            imgIndex: 19,
            style: 3
        },
        {
            title: `Manasik Haji${'\n'} Hari Ketiga :`,
            tgl: '10',
            title_detail: "Hari Iduladha",
            onPress: () => goToPageThree(),
            imgIndex: 20,
            style: 3
        },
        {
            title: `Manasik Haji${'\n'} Hari Terakhir :`,
            tgl: '11',
            title_detail: "Hari Tasyriq (11, 12 & 13)",
            onPress: () => goToPageFour(),
            imgIndex: 21,
            style: 3
        },
    ]);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goToDetailMenu = () => {
        dispatch(setDataDetailMenu(allMenuData))
        navigation.navigate("detailMenu")
    }

    const goToPageOne = async () => {
        navigation.navigate("contentHajiOne")
    }

    const goToPageTwo = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentHajiTwo")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageThree = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentHajiThree")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageFour = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentHajiFour")
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
                    <Text color="white" size={15} style={styles.fontJudul}>MENELADANI {'\n'}<Text color="yellow">HAJI</Text> {'\n'}RASULULLAH</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.lihatSemua} onPress={goToDetailMenu}>
                <Text color="yellow">lihat semua</Text>
            </TouchableOpacity>
            <View style={styles.menu}>
                <View style={styles.lineOne}>
                    <TouchableOpacity style={styles.btnMenuThree} onPress={goToPageOne}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu3/h_01.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                        >
                            <Text style={styles.btnText2} color="black">Manasik Haji Hari Pertama :</Text>
                            <Text style={{ fontFamily: "LEMONMILK-Regular", fontWight: "bold", fontSize: 80 }} color="black">8</Text>
                            <Text style={styles.btnText2} color="black"><Text style={{ fontFamily: "LEMONMILK-Regular" }}>Zullhijjah</Text>{'\n'}Hari Tarwiyah</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ width: 10 }}></View>
                    <TouchableOpacity style={styles.btnMenuThree} onPress={goToPageTwo}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu3/h_02.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                        >
                            <Text style={styles.btnText2} color="black">Manasik Haji Hari Kedua :</Text>
                            <Text style={{ fontFamily: "LEMONMILK-Regular", fontWight: "bold", fontSize: 80 }} color="black" h1>9</Text>
                            <Text style={styles.btnText2} color="black"><Text style={{ fontFamily: "LEMONMILK-Regular" }}>Zullhijjah</Text>{'\n'} Hari Arafah</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}