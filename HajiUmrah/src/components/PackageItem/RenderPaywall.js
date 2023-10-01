import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Text } from "galio-framework";
import { ENTITLEMENT } from "../../constants";
import Purchases from "react-native-purchases";
import { useNavigation } from "@react-navigation/native";



export default function RenderPaywall({purchasePackage, setIsPurchasing}){

    const navigation = useNavigation()
    const { offeringIdentifier, packageType, priceString, product } = purchasePackage

    async function onSelection(){

        try {
            const purchaseMade = await Purchases.purchasePackage(purchasePackage);
            console.log(purchaseMade)
            if (typeof purchaseMade.customerInfo.entitlements.active["pro"] !== "undefined") {
              // Unlock that great "pro" content
              navigation.goBack();
            }
          } catch (e) {
            if (!e.userCancelled) {
                console.warn(e)
                // showError(e);
            }
          }
          
          // Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this
          {/* await Purchases.purchaseProduct(<product_id>, null, Purchases.PURCHASE_TYPE.INAPP); */}
    }

    return (
        <TouchableOpacity onPress={onSelection} style={styles.pamplate}>
            <View style={styles.judul}>
                <Text color="orange" h4 bold>{offeringIdentifier.toUpperCase()}</Text>
                <Text bold>Premium</Text>
            </View>
            <View style={styles.description}>
                <Text color="black">Package Type :  {packageType}</Text>
                <Text color="black">Price : {product.priceString}</Text>
                <Text color="black">Description : { product.description }</Text>
                <View style={styles.saleLogo}>
                    <Image source={require("../../assets/sale.png")} style={{width: 90, height: 90}}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pamplate: {
        width: 300,
        height: 300,
        marginTop: 30,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 3
    },
    judul: {
        width: "100%",
        height: "auto",
        backgroundColor: "black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    description: {
        padding: 10
    },
    saleLogo: {
        width: "100%",
        height: "60%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    }
})