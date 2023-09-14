import { Text } from "galio-framework";
import { StyleSheet, View, Image } from "react-native";


const HeaderDashboardNew = () => {
    return (
        <View style={style.container}>
            <View style={style.judul}>
                <Text style={style.text}>MENELADANI {'\n'}<Text style={{color: "yellow"}}>HAJI & UMRAH</Text> {'\n'}RASULULLAH</Text>
            </View>
            <View style={style.logo}>
                <Image source={require('../assets/icon.png')} style={{width: 80, height: 80}}></Image>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
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
        color: 'white'
    }
})

export default HeaderDashboardNew