import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HexagonButton from './ButtonHexagon';

const HexagonGrid = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            {item.map((button, buttonIndex) => (
              <View key={buttonIndex} style={styles.hexagon}>
                {button && <HexagonButton title={button.title} onPress={button.onPress} color={button.color}/>}
              </View>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: "white",
    paddingLeft: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hexagon: {
    width: 100, // Sesuaikan ukuran heksagon sesuai kebutuhan
    height: 100, // Sesuaikan ukuran heksagon sesuai kebutuhan
    margin: 6, // Sesuaikan jarak antar tombol sesuai kebutuhan
  },
});

export default HexagonGrid;