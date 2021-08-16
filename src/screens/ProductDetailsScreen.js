import React, { useEffect, useState } from 'react';
import { View, Text, Button, Dimensions, Image, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const carouselData = [
  [{ id: 1, url: require('../assets/Images/DetailImg/dp1.jpg') },
  { id: 2, url: require('../assets/Images/DetailImg/dp2.jpg') },
  { id: 3, url: require('../assets/Images/DetailImg/dp3.jpg') },
  { id: 4, url: require('../assets/Images/DetailImg/dp4.jpg') }],
  [{ id: 1, url: require('../assets/Images/DetailImg/dp5.jpg') },
  { id: 2, url: require('../assets/Images/DetailImg/dp6.jpg') },
  { id: 3, url: require('../assets/Images/DetailImg/dp7.jpg') },
  { id: 4, url: require('../assets/Images/DetailImg/dp8.jpg') }],
  [{ id: 1, url: require('../assets/Images/DetailImg/dp9.jpg') },
  { id: 2, url: require('../assets/Images/DetailImg/dp10.jpg') },
  { id: 3, url: require('../assets/Images/DetailImg/dp11.jpg') },
  { id: 4, url: require('../assets/Images/DetailImg/dp12.jpg') },
  { id: 4, url: require('../assets/Images/DetailImg/dp13.jpg') }],
  [{ id: 1, url: require('../assets/Images/DetailImg/dp14.jpg') },
  { id: 2, url: require('../assets/Images/DetailImg/dp15.jpg') },
  { id: 3, url: require('../assets/Images/DetailImg/dp16.jpg') },
  { id: 4, url: require('../assets/Images/DetailImg/dp17.jpg') }],
];

const ProductDetailsScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState(undefined);
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    console.log("RouteItem", route.params.item)
    let data = route.params && route.params.item ? route.params.item : undefined;
    if (data !== undefined) {
      setProductData(data);
      navigation.setOptions({ title: data.title });
    }
    setTimeout(() => {
      setIsLoading(false);
      setActiveSliderIndex(0);
    }, 1500);
  }, [])

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.url} style={{ height: H / 1.5, width: SLIDER_WIDTH }} />
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
      <View style={{ flex: 1 }}>
        {productData != undefined ? (
          <View>
            <Carousel
              data={productData.id === 1 ? carouselData[0] :
                productData.id === 2 ? carouselData[1] :
                  productData.id === 3 ? carouselData[2] :
                    productData.id === 4 ? carouselData[3] :
                      productData.id === 5 ? carouselData[1] :
                        productData.id === 6 ? carouselData[0] :
                          carouselData[0]
              }
              renderItem={_renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={SLIDER_WIDTH}
              autoplay={true}
              autoplayDelay={100}
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
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.title1}>{productData.title}</Text>
              <Text style={styles.title2}>{productData.description}</Text>
            </View>
            <Text style={styles.subTitle}>{productData.subTitle}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>₹{productData.price} </Text>
              <Text style={styles.discountedPrice}>₹5000</Text>
            </View>
            <Text style={styles.taxTitle}>inclusive of all taxes</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.wishBtn}>
                <Text style={styles.btnText}>WISHLIST</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { navigation.navigate('Cart', {item:productData}) }}
                style={styles.addToBagBtn}>
                <Text style={styles.btnText}>ADD TO BAG</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </ScrollView>
  )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  title1: {
    fontSize: 17,
    fontWeight: "700",
    marginHorizontal: 10
  },
  title2: {
    fontSize: 17,
    opacity: 0.5
  },
  subTitle: {
    fontSize: 17,
    opacity: 0.5,
    marginHorizontal: 10
  },
  price: {
    fontSize: 17,
    opacity: 0.8,
    marginHorizontal: 10
  },
  discountedPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 17,
    opacity: 0.3,
  },
  taxTitle: {
    fontSize: 11,
    color: '#05a685',
    fontWeight: "700",
    marginHorizontal: 10
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5
  },
  wishBtn: {
    width: "48%",
    height: 40,
    borderRadius: 3,
    backgroundColor: "#d4d3d8"
  },
  addToBagBtn: {
    width: "48%",
    height: 40,
    borderRadius: 3,
    backgroundColor: "#ff406c"
  },
  btnText: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    top: 10
  }
});
