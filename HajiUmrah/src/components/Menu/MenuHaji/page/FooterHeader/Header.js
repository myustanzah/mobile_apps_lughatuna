import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Text } from 'galio-framework';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window")

export default function HeaderHaji({logoUri}){
    return (
        <View style={styles.headerBox}>
            <View style={styles.judul}>
                <Image source={require('../../../../../assets/logo_1.png')} style={{width: 70, height: 85, marginRight: 15, resizeMode: "cover"}}></Image>
                <Text style={styles.text}>MENELADANI {'\n'}<Text style={{color: "yellow"}}>HAJI</Text> {'\n'}RASULULLAH</Text>
            </View>
            <View style={styles.logo}>
                    <Image source={{uri: logoUri}} style={styles.imgLogo}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: '#222222',
        width: "100%",
        height: "auto",
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        position: "absolute",
        zIndex: 2
    },
    logo: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    judul: {
        width: '70%',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        color: 'white',
        fontSize: wp(4),
        fontFamily: "LEMONMILK-Regular"
    },
    imgLogo: {
        top: '30%',
        position: 'absolute',
        width: width > 400 ? wp(30) : wp(29), 
        height: width > 400 ? hp(23) : hp(18),
        resizeMode: "cover",
    }
})