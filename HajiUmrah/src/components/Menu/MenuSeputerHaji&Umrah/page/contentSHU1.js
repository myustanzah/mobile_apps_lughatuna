import { Text } from "galio-framework";
import { StyleSheet, View } from "react-native";


export default function ContentSHUOne(){
    return (
        <View style={styles.container}>
            <Text color="black">Conten Seputar Haji Umrah 1</Text>
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