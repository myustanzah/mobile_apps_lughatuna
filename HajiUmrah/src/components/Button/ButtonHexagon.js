import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const HexagonButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.hexagon, { backgroundColor: color }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hexagon: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 10,
    padding: 7
  },
  buttonText: {
    color: 'white', // Warna teks pada tombol
  },
});

export default HexagonButton;
