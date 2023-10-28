import { Text } from "galio-framework";
import { StyleSheet, View, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"


const HeaderDashboardNew = ({headerColor, textColor, centerColor}) => {
    return (
        <View style={[style.container, { backgroundColor: headerColor }]}>
            <View style={style.judul}>
                <Text style={[style.text, { color: textColor }]}>MENELADANI {'\n'}<Text style={{color: centerColor }}>HAJI & UMRAH</Text> {'\n'}RASULULLAH</Text>
            </View>
            <View style={style.logo}>
                <Image source={require('../assets/logo_1.png')} style={{width: 80, height: 95}}></Image>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        padding: 20,
        justifyContent: "center"
    },
    logo: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    judul: {
        width: '60%',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: wp(4),
        fontFamily: "LEMONMILK-Regular"
    }
})

export default HeaderDashboardNew