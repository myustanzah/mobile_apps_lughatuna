import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function ButtonNormal({ title, onPress, color, size }){

    // Tentukan gaya sesuai dengan properti yang diberikan
    const buttonStyle = {
        backgroundColor: color || 'blue', // Warna latar belakang default adalah biru jika tidak ada warna yang diberikan
        padding: size === 'large' ? 16 : 8, // Ukuran padding berdasarkan properti ukuran
        borderRadius: 8,
    };

    const textStyle = {
        color: 'white', // Warna teks default adalah putih
        textAlign: 'center',
    };


    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
      marginVertical: 10,
    },
    text: {
      fontSize: 16,
    },
  });