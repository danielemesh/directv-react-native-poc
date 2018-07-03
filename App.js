import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { Provider } from 'react-redux';

import StickyFooter from './StickyFooter';
import DirectvNow from './screens/DirectvNow/DirectvNow';
import MainHeader from './components/MainHeader';
import Cart from './screens/cart/Cart';
import store from './redux/store';
import { fetchProducts } from './redux/actions/products';
import globals from './globals';
import PageNotFound from './screens/404';
import Loading from './screens/Loading';
import Checkout from './screens/checkout/Checkout';
import CartAndCheckout from './screens/cartAndChackout/CartAndCheckout';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.onStickyFooterCtaPress = this.onStickyFooterCtaPress.bind(this);
  }
  state = {
    currentScreen: globals.screens.LOADING
  };
  
  componentDidMount() {
    store.dispatch(fetchProducts());
    
    store.subscribe(() => {
      this.setState({
        //currentScreen: store.getState().ui.currentScreen
        currentScreen: globals.screens.CART_AND_CHECKOUT
      });
    });
  }
  
  onStickyFooterCtaPress() {
    console.log('CTA Clicked!!');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentScreen !== this.state.currentScreen;
  }
  
  render() {
    let mainContent;
    
    if (this.state.currentScreen === globals.screens.LOADING) {
      mainContent = <Loading/>;
    }
    else if (this.state.currentScreen === globals.screens.DIRECTV_NOW) {
      mainContent = <DirectvNow/>;
      
    }
    else if (this.state.currentScreen === globals.screens.CART_AND_CHECKOUT) {
      mainContent = <CartAndCheckout/>;
    }
    //else if (this.state.currentScreen === globals.screens.CART) {
    //  mainContent = <Cart/>;
    //}
    //else if (this.state.currentScreen === globals.screens.CHECKOUT) {
    //  mainContent = <Checkout/>;
    //}
    else {
      mainContent = <PageNotFound/>;
    }
    
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <ScrollView>
              <MainHeader/>
              <View style={styles.mainContentContainer}>
                {mainContent}
              </View>
            </ScrollView>
            <StickyFooter onCtaPress={this.onStickyFooterCtaPress} buttonText={`Let's do this!`}/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  mainContentContainer: {
    flex: 1
  }
});
