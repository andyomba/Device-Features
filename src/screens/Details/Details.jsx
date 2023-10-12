import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text, View, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { applyDiscount } from '../../features/discount/discountSlice';
import styles from './Details.style';


const Details = ({ route }) => {
  const { product } = route.params;
  const { discountApplied, discountPercentage } = useSelector(state => state.discount);
  const dispatch = useDispatch();


  const discountedPrice = discountApplied
    ? product.price * (1 - discountPercentage)
    : product.price;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.images[0] }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`$ ${discountedPrice.toFixed(2)}`}</Text>
      {discountApplied && (
        <Text style={styles.discountText}>{`Descuento del ${discountPercentage * 100}% aplicado`}</Text>
      )}
      {!discountApplied && (
        <Pressable onPress={() => dispatch(applyDiscount(0.2))} style={styles.button}>
          <Text style={styles.buttonText}>Apply Discount</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default Details;
