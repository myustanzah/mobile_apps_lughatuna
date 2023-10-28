import { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { Text } from "galio-framework"
import Purchases from "react-native-purchases";

// constant
import { ENTITLEMENT } from "../../constants";

import RenderPaywall from "./RenderPaywall";
import FooterDashboard from "../footerDashboard";



export default function PaywallScreen(){

    const renderItem = ({item}) => (<RenderPaywall purchasePackage={item} /> )

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

    return (
        <View style={styles.container}>
            <View style={styles.jumbotron}>
                <FlatList 
                    data={packages}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <FooterDashboard />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    jumbotron: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
  });