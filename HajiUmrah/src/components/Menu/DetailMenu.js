import React from "react";
import { useSelector } from "react-redux"
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View, ImageBackground } from "react-native";
import { JudulMenu } from "./style/style";
import { Text } from "galio-framework";

const styles = StyleSheet.create(JudulMenu)

export default function DetailMenu() {
    const dataMenu = useSelector(state => state.UtilReducer.utilMenuData)

    const renderItem = ({ item }) => {


        const path_image = [
            require('../../assets/Menu/Menu1/u_01.png'),
            require('../../assets/Menu/Menu1/u_02.png'),
            require('../../assets/Menu/Menu1/u_03.png'),
            require('../../assets/Menu/Menu1/u_04.png'),

            require('../../assets/Menu/Menu2/s_01.png'),
            require('../../assets/Menu/Menu2/s_02.png'),
            require('../../assets/Menu/Menu2/s_03.png'),
            require('../../assets/Menu/Menu2/s_04.png'),
            require('../../assets/Menu/Menu2/s_05.png'),
            require('../../assets/Menu/Menu2/s_06.png'),
            require('../../assets/Menu/Menu2/s_07.png'),
            require('../../assets/Menu/Menu2/s_08.png'),
            require('../../assets/Menu/Menu2/s_09.png'),
            require('../../assets/Menu/Menu2/s_10.png'),
            require('../../assets/Menu/Menu2/s_11.png'),
            require('../../assets/Menu/Menu2/s_12.png'),
            require('../../assets/Menu/Menu2/s_13.png'),
            require('../../assets/Menu/Menu2/s_14.png'),

            require('../../assets/Menu/Menu3/h_01.png'),
            require('../../assets/Menu/Menu3/h_02.png'),
            require('../../assets/Menu/Menu3/h_03.png'),
            require('../../assets/Menu/Menu3/h_04.png'),
        ];


        if (item.style === 1) {
            return (
                <TouchableOpacity style={styles.btnMenuDetail} onPress={item.onPress}>
                    <ImageBackground
                        source={path_image[item.imgIndex]}
                        resizeMode="cover"
                        style={styles.imgBg}
                    >
                        <Text style={styles.btnText} color="black">{item.title}<Text bold h3>{item.title_detail}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        } else if (item.style === 2) {
            return (
                <TouchableOpacity style={[styles.btnMenuTwo, { margin: 10 }]} onPress={item.onPress}>
                    <ImageBackground
                        source={path_image[item.imgIndex]}
                        resizeMode="cover"
                        style={styles.imgBg}
                    >
                        <Text style={styles.btnText1} color="black"><Text bold h8>{item.title}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={[styles.btnMenuThree3, { margin: 10 }]} onPress={item.onPress}>
                    <ImageBackground
                        source={path_image[item.imgIndex]}
                        resizeMode="cover"
                        style={styles.imgBg}
                    >
                        <Text style={styles.btnText2} color="black">{item.title}</Text>
                        <Text style={{ fontFamily: "LEMONMILK-Regular", fontWight: "bold", fontSize: 80 }} color="black" h1>{item.tgl}</Text>
                        <Text style={styles.btnText2} color="black"><Text style={{ fontFamily: "LEMONMILK-Regular" }}>Zullhijjah</Text>{'\n'} {item.title_detail}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        }

    }


    return (
        <View style={{ padding: 15 }}>
            <FlatList
                data={dataMenu}
                numColumns={dataMenu[0].style === 1 ? 1 : 2}
                renderItem={renderItem}
                keyExtractor={(i, index) => index.toString()}
            />
        </View>
    )
}

