import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons for the delete icon
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../shared/card';
import { images } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    // destructuring the route params to get title, body, and rating
    const { title, body, rating } = route.params.item;  
    const delReview = route.params.delReview; // getting the delete function from params

    return (
        <View style={styles.container}>
            {/* Card component to display the review details */}
            <Card>
                <Text style={styles.reviewText}>{title}</Text>
                <Text style={styles.reviewText}>{body}</Text>
                <View style={styles.rating}>
                    <Text style={styles.reviewText}>GameZone Rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
                {/* Replaced Button with TouchableOpacity and MaterialIcons for delete functionality */}
                <TouchableOpacity onPress={() => delReview(route.params.item.key)}>
                    <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginBottom: 10,
    },
    reviewText: {
        fontSize: 18,
        color: 'teal',
    },
    rating: {
        padding: 24,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 16,
        borderTopWidth: 3,
        borderColor: '#FDDFDD',
    }
});
