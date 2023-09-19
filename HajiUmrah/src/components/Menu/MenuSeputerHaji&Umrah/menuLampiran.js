import { Text } from "galio-framework"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
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
                    <Text color="white" size={15} style={styles.fontJudul}>LAMPIRAN</Text>
                </View>
            </View>
            <View style={styles.menu}>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu3/l1.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu3/l2.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu3/l3.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu3/l4.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu3/l5.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lineOne}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu3/l6.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Menu/Menu3/l7.png')} style={{width: 80, height: 80}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}