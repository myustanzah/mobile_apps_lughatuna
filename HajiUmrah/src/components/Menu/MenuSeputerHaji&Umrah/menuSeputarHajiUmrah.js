import { Text } from "galio-framework"
import { View, StyleSheet } from "react-native"

export default function MenuSeputarHajiUmrah(){
    return (
        <View style={styles.containerMenu}>
            <View style={styles.menu1}>
                <Text>SEPUTAR HAJI & UMRAH</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMenu: {
        width: "100%",
        height: "auto"
    },
    // menu1: {
    //     width: 150,
    //     height: 150
    // }
})