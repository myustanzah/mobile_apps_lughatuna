import React from "react";
import { useSelector } from "react-redux"
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View, ImageBackground } from "react-native";
import { JudulMenu } from "./style/style";
import { Text } from "galio-framework";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import HeaderDashboardNew from "../headerDashboardNew";
import FooterDashboard from "../footerDashboard";
import { API_IMAGES } from "../../constants";


const styles = StyleSheet.create(JudulMenu)
const menuIconUri = API_IMAGES + "/Menu";

export default function DetailMenu() {
    const dataMenu = useSelector(state => state.UtilReducer.utilMenuData)

    const renderItem = ({ item }) => {


        const path_image = [
            {uri : menuIconUri + '/Menu1/u_01.png'},
            {uri : menuIconUri + '/Menu1/u_02.png'},
            {uri : menuIconUri + '/Menu1/u_03.png'},
            {uri : menuIconUri + '/Menu1/u_04.png'},

            {uri : menuIconUri + '/Menu2/s_01.png'},
            {uri : menuIconUri + '/Menu2/s_02.png'},
            {uri : menuIconUri + '/Menu2/s_03.png'},
            {uri : menuIconUri + '/Menu2/s_04.png'},
            {uri : menuIconUri + '/Menu2/s_05.png'},
            {uri : menuIconUri + '/Menu2/s_06.png'},
            {uri : menuIconUri + '/Menu2/s_07.png'},
            {uri : menuIconUri + '/Menu2/s_08.png'},
            {uri : menuIconUri + '/Menu2/s_09.png'},
            {uri : menuIconUri + '/Menu2/s_10.png'},
            {uri : menuIconUri + '/Menu2/s_11.png'},
            {uri : menuIconUri + '/Menu2/s_12.png'},
            {uri : menuIconUri + '/Menu2/s_13.png'},
            {uri : menuIconUri + '/Menu2/s_14.png'},

            {uri : menuIconUri + '/Menu3/h_01.png'},
            {uri : menuIconUri + '/Menu3/h_02.png'},
            {uri : menuIconUri + '/Menu3/h_03.png'},
            {uri : menuIconUri + '/Menu3/h_04.png'},
        ];


        if (item.style === 1) {
            return (
                <TouchableOpacity style={styles.btnMenuDetail} onPress={item.onPress}>
                    <ImageBackground
                        source={{uri : path_image[item.imgIndex].uri}}
                        resizeMode="cover"
                        style={[styles.imgBg, { padding: 20 }]}
                    >
                        <Text style={styles.btnText} size={wp(4)} color="black">{item.title}<Text bold h3>{item.title_detail}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        } else if (item.style === 2) {
            return (
                <TouchableOpacity style={[styles.btnMenuTwo, { margin: 10, height: hp(30) }]} onPress={item.onPress}>
                    <ImageBackground
                        source={{uri : path_image[item.imgIndex].uri}}
                        resizeMode="cover"
                        style={[styles.imgBg, { width: "100%", height: "100%" }]}
                    >
                        <Text style={styles.btnText1} size={wp(5)} color="black"><Text bold h8>{item.title}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={[styles.btnMenuThree3, { margin: 10 }]} onPress={item.onPress}>
                    <ImageBackground
                        source={{uri : path_image[item.imgIndex].uri}}
                        resizeMode="cover"
                        style={[styles.imgBg, { width: "100%", height: "100%" }]}
                    >
                        <Text style={styles.btnText2} size={wp(3)} color="black">{item.title}</Text>
                        <Text style={{ fontFamily: "LEMONMILK-Regular", fontWight: "bold", fontSize: 80 }} color="black" h1>{item.tgl}</Text>
                        <Text style={styles.btnText2} size={wp(3)} color="black"><Text style={{ fontFamily: "LEMONMILK-Regular" }} size={wp(5)} >Zullhijjah</Text>{'\n'} {item.title_detail}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        }

    }


    return (
        <View style={{ flex: 1 }}>
            <HeaderDashboardNew headerColor={"white"} textColor={"black"} centerColor={"black"} />
            <FlatList
                data={dataMenu}
                numColumns={dataMenu[0].style === 1 ? 1 : 2}
                renderItem={renderItem}
                keyExtractor={(i, index) => index.toString()}
            />
            <FooterDashboard colorText={"black"} />
        </View>
    )
}

