import { Text } from "galio-framework";
import { StyleSheet, View } from "react-native";


export default function PageTwo(){
    return (
        <View style={styles.container}>
            <Text>PageTwo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    }
})