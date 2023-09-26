import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native"
import { JudulMenu } from "../style/style"

const styles = StyleSheet.create(JudulMenu);

export default function MenuLampiran(){
    return (
        <View style={styles.containerMenu}>
           <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/logo_1.png')} style={{width: 65, height: 75}}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" size={15} style={styles.fontJudul}>Seputar Haji & Umrah</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.lihatSemua}>
                <Text color="yellow">Lihat semua</Text>
            </TouchableOpacity>
            <View style={styles.menu}>
                <View style={styles.lineOne}>
                    <TouchableOpacity style={[styles.btnMenuTwo, {backgroundColor: "red", justifyContent: "center", alignItems: "center"}]}>
                        {/* <ImageBackground
                            source={require('../../../assets/Menu/Menu2/s_01.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         > */}
                            <Text style={styles.btnText1} color="white">LARANGAN IHRAM</Text>
                         {/* </ImageBackground> */}
                    </TouchableOpacity>
                    <View style={{width:10}}></View>
                    <TouchableOpacity style={styles.btnMenuTwo}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu2/s_02.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         >
                            <Text style={styles.btnText1} color="white">MIQAT</Text>
                         </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}