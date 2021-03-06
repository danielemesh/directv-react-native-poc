import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import theme from '../theme';

export default PricePerMonth = ({price, size, color, containerViewStyle}) => {
  return (
      <View style={[styles.container, containerViewStyle]}>
        <Icon type="font-awesome"
              name="usd"
              color={color || theme.secondaryColor}
              size={size / 2}
              containerStyle={[styles.icon, {paddingTop: size / 3}]}
        />
        <Text
            style={[styles.price, {fontSize: size, color: color || theme.secondaryColor}]}>
          {price}
          <Text style={[styles.month, {fontSize: size / 2}]}>/mo.</Text>
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  icon: {
    alignSelf: 'flex-start'
  },
  price: {
    fontWeight: 'bold'
  },
  month: {
    fontWeight: 'normal'
  }
});