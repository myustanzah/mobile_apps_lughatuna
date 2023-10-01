import { Text } from "galio-framework";
import { StyleSheet, View, Image } from "react-native";


const HeaderDashboardNew = () => {
    return (
        <View style={style.container}>
            <View style={style.judul}>
                <Text style={style.text}>MENELADANI {'\n'}<Text style={{color: "yellow"}}>HAJI & UMRAH</Text> {'\n'}RASULULLAH</Text>
            </View>
            <View style={style.logo}>
                <Image source={require('../assets/logo_1.png')} style={{width: 80, height: 95}}></Image>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
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
        fontSize: 20
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontFamily: "LEMONMILK-Regular"
    }
})

export default HeaderDashboardNew