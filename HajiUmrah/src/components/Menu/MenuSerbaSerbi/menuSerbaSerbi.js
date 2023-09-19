import { Text } from "galio-framework"
import { View, StyleSheet, Image } from "react-native"

import { JudulMenu } from "../style/style"

const styles = StyleSheet.create(JudulMenu);


export default function MenuSerbaSerbi(){
    return (
        <View style={styles.containerMenu}>
            <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/icon.png')} style={{width: 65, height: 65}}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" bold size={17}>SERBA & SERBI</Text>
                </View>
            </View>
        </View>
    )
}