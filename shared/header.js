import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Header({ title, val }) {
    const navigation = useNavigation();

    const openMenu = () => {
        navigation.openDrawer();
    };

    // Determine the image source based on the `val` prop
    const iconSource = val === 'home'
        ? require('../assets/images/heart_logo.png')
        : val === 'game'
        ? require('../assets/images/info.png')
        : null; // Handle cases where `val` is neither 'head' nor 'game'

    return (
        <ImageBackground
            source={require('../assets/images/headerbgimg.jpg')}
            style={styles.header}
        >
            <MaterialIcons
                name='menu'
                size={28}
                onPress={openMenu}
                style={styles.icon}
            />
            <View style={styles.container}>
                {iconSource && (
                    <Image
                        source={iconSource}
                        style={styles.img}
                    />
                )}
                <Text style={styles.text}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '110%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'purple',
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    img: {
        width: 26,
        height: 26,
        marginHorizontal: 20,
    },
    container: {
        flexDirection: 'row',
    },
});
