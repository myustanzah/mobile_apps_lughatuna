import { Button, Text } from 'galio-framework';
import React, { useState } from 'react';
import { Alert, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const ModalHajiShow = React.forwardRef((props, ref) => {
        const [modalHajiVisible, setModalHajiVisible] = useState(false);
        const { dataDaftarIsi, onItemClick } = props;

        function showModalHaji(){
            setModalHajiVisible(true)
        }

        React.useImperativeHandle(ref, () => ({
            showModalHaji
        }))
        
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalHajiVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                  setModalHajiVisible(!modalHajiVisible);
                }}
                >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.btnClose}>
                        <Pressable                        
                            onPress={() => setModalHajiVisible(!modalHajiVisible)}
                            >
                            <Text style={styles.textStyle} h6>X</Text>
                        </Pressable>
                    </View>
                    <TableOfContents onItemClick={onItemClick} items={dataDaftarIsi} />
                </View>
            </View>
        </Modal>
        )
    })

export default ModalHajiShow


const TableOfContents = ({ items, onItemClick }) => {
  return (
    <ScrollView contentContainerStyle={styles.containerList}>
      <Text style={styles.title}>DAFTAR ISI</Text>
      {items.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => onItemClick(item.id)} 
          style={[styles.item, { backgroundColor: item.styles.bgColor }]}
          disabled={item.onFungsi}
        >
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
