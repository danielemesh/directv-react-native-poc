import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const LabeledPrice = ({price, label = '', size = 30}) => (
    <View style={styles.container}>
      <Icon type="font-awesome"
            name="usd"
            size={size}
      />
      <Text style={styles.wrapper}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.label}>{label}</Text>
      </Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  wrapper: {
    fontSize: 30,
  },
  price: {
    fontWeight: 'bold',
  },
  label: {
    fontSize: 15,
    marginLeft: 10,
  }
});

export default LabeledPrice;