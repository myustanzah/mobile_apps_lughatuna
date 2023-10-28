import { Button, Text } from 'galio-framework';
import React, { useState } from 'react';
import { Alert, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const items = [
  { title: 'Introduction' },
  { title: 'Pekerjaan Sebelum Ihram' },
  { title: 'Pekerjaan Saat Mulai Berihram' },
  { title: 'Pekerjaan Setelah Berihram' },
];


const ModalShow = React.forwardRef((props, ref) => {
        const [modalVisible, setModalVisible] = useState(false);

        function showModal(){
            setModalVisible(true)
        }

        React.useImperativeHandle(ref, () => ({
            showModal
        }))
        
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.btnClose}>
                        <Pressable                        
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle} h6>X</Text>
                        </Pressable>
                    </View>
                    <TableOfContents items={items} />
                </View>
            </View>
        </Modal>
        )
    })

export default ModalShow


const TableOfContents = ({ items, onItemClick }) => {
  return (
    <ScrollView contentContainerStyle={styles.containerList}>
      <Text style={styles.title}>DAFTAR ISI</Text>
      {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => onItemClick(index)} style={styles.item}>
          <Text color='white' style={{fontSize: wp(4)}}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        width: '80%',
        height: 'auto',
        margin: 20,
        backgroundColor: "rgba(24, 69, 49, 0.7)",
        borderRadius: 20,
        // borderWidth: 6,
        // borderColor: 'black',
        padding: 20,
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
        alignItems: "flex-end",
      },
      textStyle: {
        color: "white",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 5,
        textAlign: "center"
      },

      containerList: {
        width: "100%",
        alignItems: "flex-start",
        padding: 20,
      },
      title: {
        fontSize: wp(5),
        fontWeight: 'bold',
        marginBottom: 10,
        color: "white"
      },
      item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
})
