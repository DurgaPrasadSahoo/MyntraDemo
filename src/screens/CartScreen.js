import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, FlatList, ImageBackground, ScrollView,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import AsyncStorage from '@react-native-community/async-storage';
//import { EventRegister } from 'react-native-event-listeners';
const categoryData = [
    { id: 1, url: require('../assets/Images/DetailImg/dp1.jpg'), title: 'Domyos By Decathlon', subTitle: 'Regular_Fit fitness Shorts', price: '320', description: 'Men Black' },
    { id: 2, url: require('../assets/Images/DetailImg/dp5.jpg'), title: 'Roadster', subTitle: 'Neck T-shirt', price: '299', description: 'Men Maroon Printed Round' },
    { id: 3, url: require('../assets/Images/DetailImg/dp9.jpg'), title: 'ASIAN', subTitle: 'Non-Marking Shoes', price: '598', description: 'Men White Mess Running' },
    { id: 4, url: require('../assets/Images/DetailImg/dp14.jpg'), title: 'INVICTUS', subTitle: 'Single Breasted Slim Fit Smart Casual', price: '2999', description: 'Men Charcoal Grey Solid' },
    { id: 5, url: require('../assets/Images/DetailImg/dp5.jpg'), title: 'Roadster', subTitle: 'Neck T-shirt', price: '299', description: 'Men Maroon Printed Round' },
    { id: 6, url: require('../assets/Images/DetailImg/dp1.jpg'), title: 'Domyos By Decathlon', subTitle: 'Regular_Fit fitness Shorts', price: '320', description: 'Men Black' },
];


const CartScreen = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [cartData, setCartData] = useState(undefined);

    useEffect(() => {
        setIsLoading(true);
       // console.log("RouteItem", route.params.item)
        let data = route.params && route.params.item ? route.params.item : undefined;
        if (data !== undefined) {
          setCartData(data);
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
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
            {cartData != undefined ? (
                        <View style={styles.menuItem} >
                            <View style={styles.touchableOpacityContainer}>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View style={styles.img}>
                                        <Image source={cartData.url} style={{ width: 120, height: 140, borderRadius:3 }} />
                                    </View>

                                    <View style={styles.textView}>
                                        <Text style={styles.menuItemText} >{cartData.title}</Text>
                                        <Text style={[styles.menuItemText, { fontSize: 14, fontWeight: "500" }]} >{cartData.subTitle}</Text>
                                        <View >
                                            <Text style={{ paddingVertical: "5%" }}>
                                                ₹{1 * cartData.price}/-</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "30%", alignItems: "center", padding: 10 }}>
                                <TouchableOpacity
                                    style={{ flexDirection: "row", left: 10 }}
                                    onPress={() => { }}>
                                    <Icon name="toggle-down" size={20} color="green" />
                                    <Text style={{ marginLeft: 5 }}>Save for Later</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { }}
                                    style={{ flexDirection: "row", paddingHorizontal: 45, alignItems: "center" }}
                                    onPress={() => { }}>
                                    <Icon name="trash" size={20} color="#694fad" />
                                    <Text style={{ marginLeft: 5 }}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>):(
                             <FlatList
                             data={categoryData}
                             renderItem={({ item, i }) =>
                                 <View>
                                     <View style={styles.menuItem} >
                                         <View style={styles.touchableOpacityContainer}>
                                             <View style={{ flex: 1, flexDirection: "row" }}>
                                                 <View style={styles.img}>
                                                     <Image source={item.url} style={{ width: 120, height: 140, borderRadius:3 }} />
                                                 </View>
             
                                                 <View style={styles.textView}>
                                                     <Text style={styles.menuItemText} >{item.title}</Text>
                                                     <Text style={[styles.menuItemText, { fontSize: 14, fontWeight: "500" }]} >{item.subTitle}</Text>
                                                     <View >
                                                         <Text style={{ paddingVertical: "5%" }}>
                                                             ₹ {1 * item.price}/-</Text>
                                                     </View>
                                                 </View>
             
                                             </View>
             
                                         </View>
                                         <View style={{ flexDirection: "row", marginLeft: "30%", alignItems: "center", padding: 10 }}>
                                             <TouchableOpacity
                                                 style={{ flexDirection: "row",left: 10 }}
                                                 onPress={() => { }}>
                                                 <Icon name="toggle-down" size={20} color="green" />
                                                 <Text style={{ marginLeft: 5 }}>Save for Later</Text>
                                             </TouchableOpacity>
             
                                             <TouchableOpacity onPress={() => { }}
                                                 style={{ flexDirection: "row", paddingHorizontal: 45, alignItems: "center" }}
                                                 onPress={() => { }}>
                                                 <Icon name="trash" size={20} color="#694fad" />
                                                 <Text style={{ marginLeft: 5 }}>Remove</Text>
                                             </TouchableOpacity>
                                         </View>
                                     </View>
                                 </View>
                             } />
                        )}
                        {cartData != undefined ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={[styles.textBooking, { color: "black" }]}>Total Amount : ₹{cartData.price}/-</Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.booking}
                        onPress={() => {navigation.navigate('OrderHistory')}}
                    >
                        <Text style={[styles.textBookingBtn, { color: '#fff' }]}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
                        ):null}
        </View>
    )
}

export default CartScreen
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
        marginBottom: 5,
        backgroundColor: '#ff406c',
    },
    textBooking: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        top:5
    },
    textBookingBtn: {
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