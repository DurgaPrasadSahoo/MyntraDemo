import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import ProductListScreen from './ProductListScreen';
import CategoryScreen from './CategoryScreen';
import StudioScreen from './StudioScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import CartScreen from './CartScreen';
import OrderHistoryScreen from './OrderHistoryScreen';


const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const ProductListStack = createStackNavigator();
const ProductDetailsStack = createStackNavigator();
const CartStack = createStackNavigator();
const OrderHistoryStack = createStackNavigator();


const MainTabScreen = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#eb008b',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={CategoryScreen}
                options={{
                    tabBarLabel: 'Categories',
                    tabBarColor: '#eb008b',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="grid" color={color} size={28} />
                    ),
                }}
            />


            <Tab.Screen
                name="Studio"
                component={StudioScreen}
                options={{
                    tabBarLabel: 'Studio',
                    tabBarColor: '#eb008b',
                    tabBarIcon: ({ color }) => (
                        <Feather name="tv" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: '#eb008b',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="modx" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#eb008b',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabScreen;

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 110, height: 36, tintColor: "#eb008b", right: 10 }}
            source={require('../assets/Images/myntraLogo.png')}
        />
    );
}

const HomeStackScreen = ({ navigation }) => {

    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffff',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: '500',
                },
            }}>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            color="black"
                            backgroundColor="#fff"
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                            <Icon.Button
                                name="ios-search"
                                size={25}
                                color="black"
                                backgroundColor="#fff"
                                onPress={() => { }}
                            />
                            <TouchableOpacity
                                style={{ paddingHorizontal: 8, marginTop: 7 }}
                                onPress={() => { }}>
                                <MaterialCommunityIcons name="heart-outline"
                                    size={25}
                                    backgroundColor="#ffff"
                                    color="black"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ paddingHorizontal: 10, marginTop: 7 }}
                                onPress={() => { navigation.navigate('Cart') }}>

                                <MaterialCommunityIcons name="cart-outline"
                                    size={28}
                                    backgroundColor="#ffff"
                                    color="black"
                                />

                                <Badge
                                    status="success"
                                    value="3"
                                    containerStyle={{ position: 'absolute', top: -6, right: 0 }}
                                />
                            </TouchableOpacity>

                        </View>

                    ),

                }} />



            <ProductListStack.Screen
                name="Products"
                component={ProductListScreen}
                options={{
                    title: 'Product List',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                            <Icon.Button
                                name="ios-search"
                                size={25}
                                color="black"
                                backgroundColor="#fff"
                                onPress={() => { }}
                            />
                            <TouchableOpacity
                                style={{ paddingHorizontal: 10, marginTop: 7 }}
                                onPress={() => { navigation.navigate('Cart') }}>
                                <MaterialCommunityIcons name="cart-outline"
                                    size={28}
                                    backgroundColor="#fff"
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}>
            </ProductListStack.Screen>

            <ProductDetailsStack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    title: 'Product Details',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                            <TouchableOpacity
                                style={{ paddingHorizontal: 10, marginTop: 7 }}
                                onPress={() => { navigation.navigate('Cart') }}>
                                <MaterialCommunityIcons name="cart-outline"
                                    size={28}
                                    backgroundColor="#ffff"
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}>
            </ProductDetailsStack.Screen>

            <CartStack.Screen
                name="Cart"
                options={{
                    title: 'My Cart'
                }}
                component={CartScreen}
            />
            <OrderHistoryStack.Screen
                name="OrderHistory"
                options={{
                    title: 'Order History'
                }}
                component={OrderHistoryScreen}
            />

        </HomeStack.Navigator>
    );
};
// const BookingStackScreen = ({ navigation }) => (
//     <BookingStack.Navigator
//         screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#694fad',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontweight: 'bold'
//             }
//         }}>
//         <BookingStack.Screen
//             name="Bookings"
//             component={BookingScreen}
//             options={{
//                 title: 'My Bookings',
//                 headerLeft: () => (
//                     <Icon.Button
//                         name="ios-menu"
//                         size={25}
//                         backgroundColor="#694fad"
//                         onPress={() => navigation.openDrawer()}
//                     />
//                 ),
//                 headerRight: () => (
//                     <View style={{ flexDirection: 'row', marginRight: 10 }}>
//                         <Icon.Button
//                             name="ios-search"
//                             size={25}
//                             color="#fff"
//                             backgroundColor="#694fad"
//                             onPress={() => { navigation.navigate('SearchBar') }}
//                         />
//                         <MaterialCommunityIcons.Button name="bell-ring"
//                             size={25}
//                             backgroundColor="#694fad"
//                             color="#fff"
//                             onPress={() => { navigation.navigate('Notification') }}>
//                         </MaterialCommunityIcons.Button>

//                     </View>
//                 ),
//             }} />
//     </BookingStack.Navigator>
// );
// const EssentialStackScreen = ({ navigation }) => (
//     <EssentialStack.Navigator
//         screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#694fad',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontweight: 'bold'
//             }
//         }}>
//         <EssentialStack.Screen
//             name="Essentials"
//             component={EssentialScreen}
//             options={{
//                 title: 'Safety Measures',
//                 headerLeft: () => (
//                     <Icon.Button
//                         name="ios-menu"
//                         size={25}
//                         backgroundColor="#694fad"
//                         onPress={() => navigation.openDrawer()}
//                     />
//                 ),
//                 headerRight: () => (
//                     <View style={{ flexDirection: 'row', marginRight: 10 }}>
//                         {/* <Icon.Button
//                             name="ios-search"
//                             size={25}
//                             color="#fff"
//                             backgroundColor="#694fad"
//                             onPress={() => { }}
//                         /> */}
//                         <MaterialCommunityIcons.Button name="bell-ring"
//                             size={25}
//                             backgroundColor="#694fad"
//                             color="#fff"
//                             onPress={() => { navigation.navigate('Notification') }}>
//                         </MaterialCommunityIcons.Button>

//                     </View>
//                 ),
//             }} />
//     </EssentialStack.Navigator>
// );
// const RewardStackScreen = ({ navigation }) => (
//     <RewardStack.Navigator
//         screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#694fad',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontweight: 'bold'
//             }
//         }}>
//         <RewardStack.Screen
//             name="Rewards"
//             component={RewardScreen}
//             options={{
//                 title: 'Refer & Earn',
//                 headerLeft: () => (
//                     <Icon.Button
//                         name="ios-menu"
//                         size={25}
//                         backgroundColor="#694fad"
//                         onPress={() => navigation.openDrawer()}
//                     />
//                 ),
//                 headerRight: () => (
//                     <View style={{ flexDirection: 'row', marginRight: 10 }}>
//                         <Icon.Button
//                             name="ios-search"
//                             size={25}
//                             color="#fff"
//                             backgroundColor="#694fad"
//                             onPress={() => { navigation.navigate('SearchBar') }}
//                         />
//                         <MaterialCommunityIcons.Button name="bell-ring"
//                             size={25}
//                             backgroundColor="#694fad"
//                             color="#fff"
//                             onPress={() => { navigation.navigate('Notification') }}>
//                         </MaterialCommunityIcons.Button>

//                     </View>
//                 ),
//             }} />
//     </RewardStack.Navigator>
// );

// const ProfileStackScreen = ({ navigation }) => {
//     return (
//         <ProfileStack.Navigator
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#694fad',
//                     shadowColor: '#694fad',
//                     elevation: 0,
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontweight: 'bold'
//                 }
//             }}>
//             <ProfileStack.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     title: 'My Profile',
//                     headerLeft: () => (
//                         <Icon.Button
//                             name="ios-menu"
//                             size={25}
//                             backgroundColor="#694fad"
//                             color="#fff"
//                             onPress={() => navigation.openDrawer()}
//                         />
//                     ),
//                     headerRight: () => (
//                         <View style={{ marginRight: 10 }}>
//                             <MaterialCommunityIcons.Button
//                                 name="account-edit"
//                                 size={25}
//                                 backgroundColor="#694fad"
//                                 color="#fff"
//                                 onPress={() => { navigation.navigate('EditProfile') }}>
//                             </MaterialCommunityIcons.Button>
//                         </View>
//                     ),
//                 }}
//             />
//             <EditProfileStack.Screen
//                 name="EditProfile"
//                 options={{
//                     title: 'Edit Profile',
//                 }}
//                 component={EditProfileScreen}
//             />
//             <ContactUsStack.Screen
//                 name="Contact Us"
//                 options={{
//                     headerShown: false
//                 }}
//                 component={SupportScreen}
//             />
//             <AboutStack.Screen
//                 name="About"
//                 options={{
//                     title: 'About Us'
//                 }}
//                 component={AboutScreen}
//             />
//             <WalletStack.Screen
//                 name="MyWallet"
//                 options={{
//                     title: 'My Wallet'
//                 }}
//                 component={MyWalletScreen}
//             />
//             <ProfileStack.Screen
//                 name="MyAddress"
//                 options={{
//                     title: 'My Addresses'
//                 }}
//                 component={MyAddressScreen}
//             />
//             <ProfileStack.Screen
//                 name="AddNewAddress"
//                 options={{
//                     title: 'Add service address'
//                 }}
//                 component={AddNewAddressScreen}
//             />
//         </ProfileStack.Navigator>
//     )
// };

