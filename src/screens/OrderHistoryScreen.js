import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, FlatList, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const categoryData = [
    { id: 1, url: require('../assets/Images/DetailImg/dp1.jpg'), title: 'Domyos By Decathlon', subTitle: 'Regular_Fit fitness Shorts', price: '320', description: 'Men Black' },
    { id: 2, url: require('../assets/Images/DetailImg/dp5.jpg'), title: 'Roadster', subTitle: 'Neck T-shirt', price: '299', description: 'Men Maroon Printed Round' },
    { id: 3, url: require('../assets/Images/DetailImg/dp9.jpg'), title: 'ASIAN', subTitle: 'Non-Marking Shoes', price: '598', description: 'Men White Mess Running' },
    { id: 4, url: require('../assets/Images/DetailImg/dp14.jpg'), title: 'INVICTUS', subTitle: 'Single Breasted Slim Fit Smart Casual', price: '2999', description: 'Men Charcoal Grey Solid' },
    { id: 5, url: require('../assets/Images/DetailImg/dp5.jpg'), title: 'Roadster', subTitle: 'Neck T-shirt', price: '299', description: 'Men Maroon Printed Round' },
    { id: 6, url: require('../assets/Images/DetailImg/dp1.jpg'), title: 'Domyos By Decathlon', subTitle: 'Regular_Fit fitness Shorts', price: '320', description: 'Men Black' },
];
const OrderHistoryScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categoryData}
                renderItem={({ item, i }) =>
                    <View>
                        <View style={styles.menuItem} >
                            <View style={styles.touchableOpacityContainer}>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View style={styles.img}>
                                        <Image source={item.url} style={{ width: 120, height: 140 }} />
                                    </View>

                                    <View style={styles.textView}>
                                        <Text style={styles.menuItemText} >{item.title}</Text>
                                        <Text style={[styles.menuItemText, { fontSize: 14, fontWeight: "500" }]} >{item.subTitle}</Text>
                                        <View >
                                            <Text style={{ paddingVertical: "5%" }}>
                                                <Icon name="rupee"
                                                    size={13}
                                                // backgroundColor="#694fad"
                                                // color="#fff" 
                                                />
                                                {""} {1 * item.price}/-</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "30%", alignItems: "center", padding: 10 }}>


                                <View
                                    style={{ alignItems: "center" }}
                                    onPress={() => { }}>

                                    <Text style={{ marginLeft: 5 }}>Delivered</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                } />

        </View>
    )
}

export default OrderHistoryScreen
const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    // },
    image: {
        height: 200,
        width: 200,
        marginTop: 100,
    },
    txt: {
        alignItems: 'center',
        fontSize: 20,
        marginTop: 15,
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        width: '40%',
        alignSelf: 'center',
    },
    booking: {
        width: '100%',
        height: 40,

        justifyContent: 'center',
        //alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#eb008b',
    },
    textBooking: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center"
    },
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    menuItem: {
        backgroundColor: '#ffff',
        height: 140,
        margin: 3,
        //borderRadius: 16,
    },
    touchableOpacityContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    menuItemText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },
    img: {
        flex: 0.4,

        //alignSelf: 'center'
    },
    textView: {
        flex: 0.6,
        //alignItems: "flex-start",
        //justifyContent:'flex-start',
        //paddingHorizontal: "10%",
        marginTop: '5%',
        marginLeft: "-8%"
    },
    btn: {
        alignItems: 'center',
        marginTop: 50,
        width: '60%',
    }

});