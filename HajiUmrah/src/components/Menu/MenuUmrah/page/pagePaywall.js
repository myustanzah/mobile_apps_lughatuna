import { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Text } from "galio-framework"
import LinearGradient from "react-native-linear-gradient";
import Purchases from "react-native-purchases";
import FooterDashboard from "../../../footerDashboard";



export default function Paywall(){

    const [packages, setPackage] = useState([]);
    const [isPurchasing, setIsPurchasing] = useState(false);

    useEffect(()=>{
        const getPackages = async () => {
            try {
                const offerings = await Purchases.getOfferings();
                if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
                    
                    setPackage(offerings.current.availablePackages)
                }
              } catch (e) {
                  console.log(e)
              }
        }

        getPackages();
    },[])

    console.log("ini paketnya", packages[0])
    const header = () => <Text>Islampedia Store Premium</Text>
    const footer = () => {
        console.warn(
            "Modify this value to reflect your app's Privacy Policy"
        );

        return (
        <Text>
            Don't forget to add your Subscription term and conditions
            https://www.revenuecat.com/blog
        </Text>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.jumbotron}>
                {
                    packages.map((e, i) => {
                        return (
                            <TouchableOpacity key={i} style={styles.pamplate}>
                                <View style={styles.judul}>
                                    <Text color="orange" h4 bold>{e.offeringIdentifier.toUpperCase()}</Text>
                                    <Text bold>Premium</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text color="black">Package Type :  {e.packageType}</Text>
                                    <Text color="black">Price : {e.product.priceString}</Text>
                                    <Text color="black">Description : { e.product.description }</Text>
                                    <View style={styles.saleLogo}>
                                        <Image source={require("../../../../assets/sale.png")} style={{width: 90, height: 90}}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
            <FooterDashboard />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    jumbotron: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
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
  });