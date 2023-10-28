import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions, FlatList } from "react-native"
import { JudulMenu } from "../style/style"
import { setDataDetailMenu } from "../../../store/UtilStore/utilCreator";
import { checkSubscription } from "../../../helpers/checkSubcription";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { API_IMAGES } from "../../../constants";

const styles = StyleSheet.create(JudulMenu);
const { height } = Dimensions.get('window');
const menuIconUri = API_IMAGES + "/Menu/Menu3/";


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

    const [imgRender, setImgRender] = useState([
        {uri: menuIconUri + 'h_01.png'},
        {uri: menuIconUri + 'h_02.png'},
        {uri: menuIconUri + 'h_03.png'},
        {uri: menuIconUri + 'h_04.png'},
    ])

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

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity 
                style={[styles.btnMenuThree, 
                { 
                    height: hp(43),
                    width: wp(39), 
                }]} 
                    onPress={item.onPress}>
                <ImageBackground
                    source={{uri: imgRender[item.imgIndex - 18].uri}}
                    resizeMode="cover"
                    style={[styles.imgBg, { width: '100%', height: '100%' }]}
                >
                    <Text style={styles.btnText2} size={wp(3)} color="black">{item.title}</Text>
                    <Text style={{ fontFamily: "LEMONMILK-Regular", fontWight: "bold", fontSize: 80 }} color="black" h1>{item.tgl}</Text>
                    <Text style={styles.btnText2} size={wp(3)} color="black"><Text size={wp(5)} style={{ fontFamily: "LEMONMILK-Regular" }}>Zullhijjah</Text>{'\n'} {item.title_detail}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.containerMenu}>
            <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/logo_1.png')} style={{ width: wp(18), height: hp(11.5), resizeMode: "cover" }}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" size={wp(4)} style={styles.fontJudul}>MENELADANI {'\n'}<Text color="yellow">HAJI</Text> {'\n'}RASULULLAH</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.lihatSemua} onPress={goToDetailMenu}>
                <Text color="yellow" size={wp(3)}>LIHAT SEMUA</Text>
            </TouchableOpacity>
            <View style={styles.menu}>
                <FlatList
                    horizontal 
                    data={allMenuData}
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={styles.lineOne} 
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}