import React from 'react';
import { View } from 'react-native';
import Cart from '../cart/Cart';
import Checkout from '../checkout/Checkout';

class CartAndCheckout extends React.Component {
  render() {
    return (
        <View style={{flex: 1, paddingBottom: 20}}>
          {/*<Cart />*/}
          <Checkout />
        </View>
    );
  }
}

export default CartAndCheckout;