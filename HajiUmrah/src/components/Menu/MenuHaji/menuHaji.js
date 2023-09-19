import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
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
            <View style={styles.menu}>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu2/h1.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu2/h2.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu2/h3.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu2/h4.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu2/h5.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu2/h6.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu2/h7.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}