import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native"
import { JudulMenu } from "../style/style"

const styles = StyleSheet.create(JudulMenu);

export default function MenuHaji(){
    return (
        <View style={styles.containerMenu}>
            <View style={styles.judul}>
                <View style={styles.judulLogo}>
                    <Image source={require('../../../assets/logo_1.png')} style={{width: 65, height: 75}}></Image>
                </View>
                <View style={styles.judulText}>
                    <Text color="white" size={15} style={styles.fontJudul}>MENELADANI {'\n'}<Text color="yellow">HAJI</Text> {'\n'}RASULULLAH</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.lihatSemua}>
                <Text color="yellow">lihat semua</Text>
            </TouchableOpacity>
            <View style={styles.menu}>
                <View style={styles.lineOne}>
                    <TouchableOpacity style={styles.btnMenuThree}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu3/h_01.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         >
                            <Text style={styles.btnText2} color="black">Manasik Haji Hari Pertama :</Text>
                            <Text style={{fontFamily: "LEMONMILK-Regular", fontWight: "bold", fontSize: 80}} color="black">8</Text>
                            <Text style={styles.btnText2} color="black"><Text style={{fontFamily: "LEMONMILK-Regular"}}>Zullhijjah</Text>{'\n'}Hari Tarwiyah</Text>
                         </ImageBackground>
                    </TouchableOpacity>
                    <View style={{width:10}}></View>
                    <TouchableOpacity style={styles.btnMenuThree}>
                        <ImageBackground
                            source={require('../../../assets/Menu/Menu3/h_02.png')}
                            resizeMode="cover"
                            style={styles.imgBg}
                         >
                            <Text style={styles.btnText2} color="black">Manasik Haji Hari Kedua :</Text>
                            <Text style={{fontFamily: "LEMONMILK-Regular", fontWight: "bold", fontSize: 80}} color="black" h1>9</Text>
                            <Text style={styles.btnText2} color="black"><Text style={{fontFamily: "LEMONMILK-Regular"}}>Zullhijjah</Text>{'\n'} Hari Arafah</Text>
                         </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}