import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About(){
    return(
        <View style={styles.container}>
            <Text>My Second React Native App, where I've applied most of all of my knowledge of this framework, with two routing methods, Stack and Drawer</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:24,
    }
})