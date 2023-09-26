import Purchases from "react-native-purchases"
import { ENTITLEMENT_ID } from "../constants"


const checkSubscription = async () => {
    try {
        
        const customerInfo = await Purchases.getCustomerInfo()
        console.log(customerInfo)
          if(typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined") {
            // Grant user "pro" access
            return "user_pro"
          }

    } catch (error) {
        console.warn(error)
        return "check_subcription_error"
    }
}

export { checkSubscription }