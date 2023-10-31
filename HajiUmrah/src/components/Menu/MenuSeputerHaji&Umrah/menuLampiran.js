import { useState } from "react";
import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions, FlatList } from "react-native"
import { JudulMenu } from "../style/style"
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDataDetailMenu, setHeaderLabel } from "../../../store/UtilStore/utilCreator";
import { checkSubscription } from "../../../helpers/checkSubcription";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { API_IMAGES } from "../../../constants";

const styles = StyleSheet.create(JudulMenu);
const { height } = Dimensions.get('window');
const menuIconUri = API_IMAGES + "/Menu/Menu2/";

export default function MenuLampiran() {

    const [allMenuData, setAllMenuData] = useState([
        {
            title: 'Larangan Ihram',
            title_detail: "IHRAM",
            onPress: () => goToPageOne(),
            imgIndex: 4,
            style: 2
        },
        {
            title: `Miqat`,
            title_detail: "Tawaf",
            onPress: () => goToPageTwo(),
            imgIndex: 5,
            style: 2
        },
        {
            title: `Fatwa Haji Umrah`,
            title_detail: "SAI",
            onPress: () => goToPageThree(),
            imgIndex: 6,
            style: 2
        },
        {
            title: `Zikir & Doa`,
            title_detail: "Tahallul",
            onPress: () => goToPageFour(),
            imgIndex: 7,
            style: 2
        },
        {
            title: `Masjid Haram`,
            title_detail: "Tahallul",
            onPress: () => goToPageFive(),
            imgIndex: 8,
            style: 2
        },
        {
            title: `Kabah`,
            title_detail: "Tahallul",
            onPress: () => goToPageSix(),
            imgIndex: 9,
            style: 2
        },
        {
            title: `Maqam Ibrahim`,
            title_detail: "Tahallul",
            onPress: () => goToPageSeven(),
            imgIndex: 10,
            style: 2
        },
        {
            title: `Zamzam`,
            title_detail: "Tahallul",
            onPress: () => goToPageEight(),
            imgIndex: 11,
            style: 2
        },
        {
            title: `Masjid Nabawi`,
            title_detail: "Tahallul",
            onPress: () => goToPageNine(),
            imgIndex: 12,
            style: 2
        },
        {
            title: `RAUDAH`,
            title_detail: "Tahallul",
            onPress: () => goToPageTen(),
            imgIndex: 13,
            style: 2
        },
        {
            title: `Masjid Quba`,
            title_detail: "Tahallul",
            onPress: () => goToPageEleven(),
            imgIndex: 14,
            style: 2
        },
        {
            title: `MUKADIMAH`,
            title_detail: "Tahallul",
            onPress: () => goToPageTwelve(),
            imgIndex: 15,
            style: 2
        },
        {
            title: `SIMULASI UMRAH`,
            title_detail: "Tahallul",
            onPress: () => goToPageThirteen(),
            imgIndex: 16,
            style: 2
        },
        {
            title: `SIMULASI HAJI`,
            title_detail: "Tahallul",
            onPress: () => goToPageFourteen(),
            imgIndex: 17,
            style: 2
        },
    ]);

    const [imgRender, setImgRender] = useState([
        {uri: menuIconUri + 's_01.png'},
        {uri: menuIconUri + 's_02.png'},
        {uri: menuIconUri + 's_03.png'},
        {uri: menuIconUri + 's_04.png'},
        {uri: menuIconUri + 's_05.png'},
        {uri: menuIconUri + 's_06.png'},
        {uri: menuIconUri + 's_07.png'},
        {uri: menuIconUri + 's_08.png'},
        {uri: menuIconUri + 's_09.png'},
        {uri: menuIconUri + 's_10.png'},
        {uri: menuIconUri + 's_11.png'},
        {uri: menuIconUri + 's_12.png'},
        {uri: menuIconUri + 's_13.png'},
        {uri: menuIconUri + 's_14.png'},
    ])

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goToDetailMenu = () => {
        dispatch(setDataDetailMenu(allMenuData))
        dispatch(setHeaderLabel("HAJI & UMRAH"))
        navigation.navigate("detailMenu")
    }

    const goToPageOne = async () => {
        navigation.navigate("contentSHUOne")
    }

    const goToPageTwo = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUTwo")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageThree = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUThree")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageFour = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUFour")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageFive = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUFive")
        } else {
            navigation.navigate("paywal")
        }
    }

    const goToPageSix = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUSix")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageSeven = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUSeven")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageEight = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUEight")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageNine = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUNine")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageTen = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUTen")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageEleven = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUEleven")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageTwelve = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUTwelve")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageThirteen = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUThirteen")
        } else {
            navigation.navigate("paywal")
        }
    }
    const goToPageFourteen = async () => {
        const resultCheck = await checkSubscription();
        if (resultCheck === "user_pro") {
            navigation.navigate("contentSHUFourteen")
        } else {
            navigation.navigate("paywal")
        }
    }

    const renderItem = ({item}) => {
        if(item.title === "Larangan Ihram"){
            return (
                <TouchableOpacity 
                    onPress={goToPageOne} 
                    style={[styles.btnMenuTwo2, 
                        { backgroundColor: "red", 
                          justifyContent: "center", 
                          alignItems: "center", 
                          height: hp(25),
                          width: wp(37.5) 
                          }]}>
                        <Text style={styles.btnText1} size={wp(5)} color="white">LARANGAN IHRAM</Text>
                </TouchableOpacity>
                ) 
            } else {
                return (
                    <TouchableOpacity 
                        onPress={item.onPress} 
                        style={[styles.btnMenuTwo2, 
                        { 
                            height: hp(25),
                            width: wp(36),
                        }]}>
                        <ImageBackground
                            source={{uri: imgRender[item.imgIndex - 4].uri}}
                            resizeMode="cover"
                            style={[styles.imgBg, { width: "100%", height: "100%" }]}
                        >
                            <Text style={styles.btnText1} size={wp(5)} color="black">{item.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )
        }
    }


    return (
        <View style={styles.containerMenu}>
            <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/logo_1.png')} style={{ width: wp(18), height: hp(11.5), resizeMode: "cover" }}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" size={wp(4)} style={styles.fontJudul}>Seputar Haji & Umrah</Text>
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