import { Text } from "galio-framework"
import { Image, StyleSheet, View } from "react-native"


const FooterDashboard = () => {
    return (
        <View style={style.container}>
            <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}></Image>
            <Text color="black">Aplikasi Haji Umrah</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default FooterDashboard