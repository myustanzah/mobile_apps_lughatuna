import { useNavigation } from "@react-navigation/native";
import { Text } from "galio-framework"
import { useCallback, useState } from "react";
import { Pressable ,Modal , Alert, Image, Linking, StyleSheet, Touchable, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { setHeaderLabel } from "../store/UtilStore/utilCreator";

const FooterDashboard = ({ colorText }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const ModalShow = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.btnClose}>
                        <Pressable                        
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle} size={wp(5)}>Tutup</Text>
                        </Pressable>
                    </View>
                    <Image source={require('../assets/icon.png')} style={{width: 50, height: 50, marginBottom: 10}}></Image>
                    <OpenURLButton colorText={colorText} url={'http://islampedia.store'}></OpenURLButton>
                </View>
            </View>
        </Modal>
        )
    }

    function gotoMenu(){
        dispatch(setHeaderLabel("HAJI & UMRAH"))
        navigation.navigate("NavDashboard", { screen: "dashboard" })
    }

    return (
        <View style={styles.container}>
            <ModalShow></ModalShow>
            <TouchableOpacity onPress={gotoMenu}>
                <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}></Image>
            </TouchableOpacity>
            <Pressable
                onPress={() => setModalVisible(true)}
            >
                <Text style={[styles.textStyle, { color: colorText }]}>islampedia.store</Text>
            </Pressable>
        </View>
    )
}

const OpenURLButton = ({url, colorText}) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text color={colorText} size={wp(4)} style={{fontFamily: "LEMONMILK-Regular"}}>islampedia.store</Text>
        </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        padding: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width: '80%',
        height: 'auto',
        margin: 20,
        backgroundColor: "#184531",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      btnClose: {
        width: "100%",
        justifyContent: "flex-end",
        backgroundColor: "black",
        marginBottom: 20,
        borderRadius: 30
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "LEMONMILK-Regular"
      },
      modalText: {
        marginBottom: 5,
        textAlign: "center"
      }
})

export default FooterDashboard