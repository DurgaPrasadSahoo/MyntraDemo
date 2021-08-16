import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const categoryData = [
    { id: 1, url: require('../assets/Images/DetailImg/dp1.jpg'), title: 'Domyos By Decathlon', subTitle: 'Regular_Fit fitness Shorts', price: '320', description: 'Men Black' },
    { id: 2, url: require('../assets/Images/DetailImg/dp5.jpg'), title: 'Roadster', subTitle: 'Neck T-shirt', price: '299', description: 'Men Maroon Printed Round' },
    { id: 3, url: require('../assets/Images/DetailImg/dp9.jpg'), title: 'ASIAN', subTitle: 'Non-Marking Shoes', price: '598', description: 'Men White Mess Running' },
    { id: 4, url: require('../assets/Images/DetailImg/dp14.jpg'), title: 'INVICTUS', subTitle: 'Single Breasted Slim Fit Smart Casual', price: '2999', description: 'Men Charcoal Grey Solid' },
    { id: 5, url: require('../assets/Images/DetailImg/dp5.jpg'), title: 'Roadster', subTitle: 'Neck T-shirt', price: '299', description: 'Men Maroon Printed Round' },
    { id: 6, url: require('../assets/Images/DetailImg/dp1.jpg'), title: 'Domyos By Decathlon', subTitle: 'Regular_Fit fitness Shorts', price: '320', description: 'Men Black' },
];
const ProductListScreen = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        let data = route.params && route.params.item ? route.params.item : undefined;
        if (data !== undefined) {
            navigation.setOptions({ title: data.title });
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#eb008b" />
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.cardsWrapper}>

                <FlatList
                    data={categoryData}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <View style={styles.renderContainer} >
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('ProductDetails', { item: item }) }} >
                                <Image source={item.url} style={{ height: H / 3.02, width: W / 2.03, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
                            </TouchableOpacity>
                            <View style={styles.productInfo}>
                                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                <Text style={styles.subTitle} numberOfLines={1}>{item.subTitle}</Text>
                                <Text>₹ {item.price}</Text>
                            </View>
                        </View>
                    } />
            </View>

        </View>
    )
}

export default ProductListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 10,
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
        width: "32%",
    },
    productInfo: {
        marginLeft: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
    subTitle: {
        fontSize: 15,
        opacity: 0.5,
    },
    renderContainer: {
        marginTop: "0.5%",
        flex: 1
    },
    touchableOpacityContainer: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 65,
        height: 65,
        backgroundColor: '#f7bcdf' /* '#FF6347' */,
        borderRadius: 50,
        marginHorizontal: 3
    },
    cardsWrapper: {
        width: '100%',
        alignSelf: 'center',
    },
});