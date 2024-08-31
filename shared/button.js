import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FlatButton({title, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.btntext}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:15,
        backgroundColor:'lightpink',
    },
    btntext:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center',
    },
})