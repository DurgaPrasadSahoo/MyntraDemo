import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
//import { dummyData } from '../Components/Data';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const ProductData = [
  { id: 1, src: require('../assets/Images/men.jpeg'), title: 'MEN', description: 'bar' },
  { id: 2, src: require('../assets/Images/women.jpg'), title: 'WOMEN', description: 'bar' },
  { id: 3, src: require('../assets/Images/kids.jpg'), title: 'KIDS', description: 'bar' },
  { id: 4, src: require('../assets/Images/salon.jpg'), title: 'LUXURY', description: 'bar' },
  { id: 5, src: require('../assets/Images/shoes/shoes_1.jpg'), title: 'FOOTWEAR', description: 'bar' },
  { id: 6, src: require('../assets/Images/men.jpeg'), title: 'MEN', description: 'bar' },
  { id: 7, src: require('../assets/Images/women.jpg'), title: 'WOMEN', description: 'bar' },
  { id: 8, src: require('../assets/Images/kids.jpg'), title: 'KIDS', description: 'bar' },
];

const carouselData= [
  { id: 1, url: require('../assets/Images/Banner/bg1.jpg'),title: 'Footwear'},
  { id: 2, url: require('../assets/Images/Banner/bg2.jpg'),title: 'Topwear'},
  { id: 3, url: require('../assets/Images/Banner/bg3.jpg'),title: 'Bottomwear'},
  { id: 4, url: require('../assets/Images/Banner/bg4.jpg'),title: 'Casual shoes'},
  { id: 5, url: require('../assets/Images/Banner/bg5.jpg'),title: 'Jeans'},
  { id: 6, url: require('../assets/Images/Banner/bg6.jpg'),title: 'T-Shirts'},
];

const categoryData= [
  { id: 1, url: require('../assets/Images/Category/ct1.jpg'),title: 'Footwear'},
  { id: 2, url: require('../assets/Images/Category/ct2.jpg'),title: 'Topwear'},
  { id: 3, url: require('../assets/Images/Category/ct3.jpg'),title: 'Bottomwear'},
  { id: 4, url: require('../assets/Images/Category/ct4.jpg'),title: 'Casual shoes'},
  { id: 5, url: require('../assets/Images/Category/ct2.jpg'),title: 'Jeans'},
  { id: 6, url: require('../assets/Images/Category/ct1.jpg'),title: 'T-Shirts'},
];

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setActiveSliderIndex(0);
    }, 2000);

  }, [])

  const _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
          <TouchableOpacity style={styles.slide}
             onPress={() => {navigation.navigate('Products',{item:item}) }}>
           <Image source={item.url} style={{height:H/2.5, width: SLIDER_WIDTH}}/>
           </TouchableOpacity>
        </View>
    );
}

const handleIndexChange = (index) => {
  //console.log(index)
  setActiveSliderIndex(index);
};

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#eb008b" />
      </View>
    );
  }



  return (
    <ScrollView style={styles.container}>

      <StatusBar backgroundColor='#fff' hidden = {false} translucent = {true} barStyle='dark-content' />
            <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={ProductData}
          renderItem={({ item }) =>
            <View style={styles.renderContainer} >
              <TouchableOpacity style={styles.touchableOpacityContainer}
                onPress={() => {navigation.navigate('Products',{item:item}) }} >
                <Image source={ item.src } style={{ width: 62, height: 62, borderRadius: 62/2 }} />
              </TouchableOpacity>
              <Text style={{fontSize:11}}>{item.title}</Text>
            </View>
          } />
       <Carousel
              data={carouselData}
              renderItem={_renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={SLIDER_WIDTH}
              autoplay={true}
              autoplayDelay={1500}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              loop={true}
              onBeforeSnapToItem={handleIndexChange}
            />
            <Pagination
              dotsLength={carouselData.length}
              activeDotIndex={activeSliderIndex}
              dotStyle={{
                  backgroundColor: '#eb008b'
              }}
              inactiveDotStyle={{
                backgroundColor: '#f7bcdf'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
            <TouchableOpacity style={{ height: H/2.5 , width: W}} onPress= {() => {navigation.navigate('Products') }}>
              <Image source={require('../assets/Images/Offer/offer1.jpg')} style={{ height: H/2.5 , width: W}}/>
            </TouchableOpacity>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Top Picks
        </Text>
        <FlatList
          data={categoryData}
          numColumns={2}
          renderItem={({ item }) =>
            <View style={styles.renderContainer} >
              <TouchableOpacity
                onPress={() => {navigation.navigate('Products',{item:item}) }} >
                <Image source={ item.url } style={{ height: H/3.5, width: W/2.4, borderRadius: 5 }} />
              </TouchableOpacity>
            </View>
          } />
      </View>
      <TouchableOpacity style={{ height: H/2.8 , width: W, marginVertical:3}} onPress={() => {navigation.navigate('Products') }}>
              <Image source={require('../assets/Images/Offer/offer2.jpg')} style={{ height: H/2.8 , width: W}}/>
            </TouchableOpacity>
    </ScrollView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffffff"
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
  renderContainer: {
    //flexDirection: 'column',
    marginTop: "5%",
    //width: "33%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  touchableOpacityContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 65,
    height: 65,
    backgroundColor: '#f7bcdf' /* '#FF6347' */,
    borderRadius: 50,
    marginHorizontal:3
  },
  cardsWrapper: {
  //  marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
});