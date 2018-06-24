import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

export default PricePerMonth = ({price, size}) => {
  return (
      <View style={styles.container}>
        <Icon type="font-awesome"
              name="usd"
              color="#1a1a1a"
              size={size / 2}
              containerStyle={[styles.icon, {paddingTop: size / 3}]}
        />
        <Text style={[styles.price, {fontSize: size}]}>
          {price}
          <Text style={[styles.month, {fontSize: size / 2}]}>/mo.</Text>
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'flex-start',
    //paddingTop: size / 3
  },
  price: {
    //fontSize: size,
    fontWeight: 'bold'
  },
  month: {
    //fontSize: size / 2,
    fontWeight: 'normal'
  }
});