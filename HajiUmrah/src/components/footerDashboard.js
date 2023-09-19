import { Text } from "galio-framework"
import { useCallback } from "react";
import { Alert, Image, Linking, StyleSheet, Touchable, TouchableOpacity, View } from "react-native"


const FooterDashboard = () => {
    return (
        <View style={style.container}>
            <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}></Image>
            <OpenURLButton url={'http://islampedia.store'}></OpenURLButton>
        </View>
    )
}

const OpenURLButton = ({url}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
    //   const supported = await Linking.canOpenURL(url);
  
    //   if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    //   } else {
        // Alert.alert(`Don't know how to open this URL: ${url}`);
    //   }
    }, [url]);
  
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text color="white">islampedia.store</Text>
        </TouchableOpacity>
    );
  };

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        padding: 10
    }
})

export default FooterDashboard