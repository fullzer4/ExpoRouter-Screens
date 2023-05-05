import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import Redirect from "../components/redirect";

const app: React.FC = () => {

    return(
        <View style={styles.container}> 
            <Redirect URL="/TelaB" TEXT="Ir para a TelaB" />
        </View>
    )
}

interface Styles {
    container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default app;