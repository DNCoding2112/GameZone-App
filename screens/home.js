import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const [modal, setModal] = useState(false);
    const [data, setData] = useState([
        { title: 'Super Mario', rating: 5, body: 'Best OG game everyone loves! This one\'s for the Nostalgia', key: '1' },
        { title: 'NES SpiderMan: Return Of The Sinister Six', rating: 4, body: 'Wonderful, easy game because who doesn\'t like Spider-Man!', key: '2' },
        { title: 'Wii Sports: Sword Fighting', rating: 5, body: 'Best Game Of My Life, Personal Favourite, would give it a 10/5!', key: '3' },
    ]);

    // Function to add a new review
    const addReview = (review) => {
        review.key = Math.random().toString();
        setData((currentData) => {
            return [review, ...currentData];
        });
        setModal(false);  // Close the modal after adding the review
    }

    // Function to delete a review
    const delReview = (key) => {
        setData((currentData) => {
            return currentData.filter(item => item.key !== key); // Filter out the review with the given key
        });
        navigation.goBack(); // Navigate back to the previous screen after deletion
    }

    // const pressHandler=()=>{
    //     navigation.navigate('ReviewDetails');
    //     // navigation.push('ReviewDetails'); --same but more explicit
    // }

    return (
        <View style={globalStyles.container}>
            <Modal
                visible={modal}
                animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={() => { setModal(false) }}
                            style={{ ...styles.Icon, ...styles.extraIcon }}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.Icon}
                onPress={() => { setModal(true) }}
            />

            {/* FlatList to display all reviews */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item, delReview })}>
                        <Card>
                            <Text style={styles.text}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'comic-neue-bold',
        fontSize: 18,
        color: 'teal',
    },
    Icon: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'cyan',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    extraIcon: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});
