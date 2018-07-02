import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import theme from './theme';
import { navigateToScreen } from './redux/actions/ui';
import globals from './globals';

const StickyFooter = ({dueToday, dueMonthly, onCtaPress, buttonText}) => {
  return (
      <View elevation={3} style={styles.container}>
        <View style={styles.priceBar}>
          <PriceItem title="due today" price={dueToday} />
          <PriceItem title="per month" price={dueMonthly} />
        </View>
        <Button
          title={buttonText}
          backgroundColor={theme.primaryColor}
          containerViewStyle={{marginLeft: 0, marginRight: 0}}
          titleStyle={{fontWeight: 'bold'}}
          onPress={() => onCtaPress()}
        />
      </View>
  );
};

const PriceItem = ({title, price}) => (
    <View style={styles.priceContainer}>
      <Icon type="font-awesome"
            name="usd"
            size={30}
      />
      <Text style={styles.price}>
        <Text style={styles.priceValue}>{price}</Text>
        <Text style={styles.priceTitle}>{title}</Text>
      </Text>
    </View>
);


const mapStateToProps = (state) => ({
  dueToday: state.cart.discounts,
  dueMonthly: state.cart.dueMonthly
});

const mapDispatchToProps = (dispatch) => ({
  //navigateToCart: () => dispatch(navigateToScreen(globals.screens.CART))
});

export default connect(mapStateToProps, mapDispatchToProps)(StickyFooter);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 3 },
    //shadowOpacity: 0.8,
    //shadowRadius: 2,
  },
  priceBar: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 30,
  },
  priceValue: {
    fontWeight: 'bold',
  },
  priceTitle: {
    fontSize: 15,
    marginLeft: 10,
  }
});