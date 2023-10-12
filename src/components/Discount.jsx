import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { applyDiscount } from '../features/discount/discountSlice';
import { useDispatch } from 'react-redux';

const Details = () => {
  const dispatch = useDispatch();
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleApplyDiscount = () => {
    dispatch(applyDiscount(0.2)); // Aplica un descuento del 20%
    setDiscountApplied(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Este componente tiene 20% de descuento</Text>
      {!discountApplied ? (
        <Pressable onPress={handleApplyDiscount} style={styles.button}>
          <Text style={styles.buttonText}>Apply</Text>
        </Pressable>
      ) : (
        <Text style={styles.appliedText}>Descuento aplicado correctamente</Text>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  appliedText: {
    fontSize: 16,
    color: 'green',
  },
});
