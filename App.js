import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { fetchProducts } from './redux/actions/products';
import { navigateToScreen } from './redux/actions/ui';
import store from './redux/store';

import StickyFooter from './StickyFooter';
import DirectvNow from './screens/DirectvNow/DirectvNow';
import MainHeader from './components/MainHeader';
import globals from './globals';
import PageNotFound from './screens/404';
import Loading from './screens/Loading';
import CartAndCheckout from './screens/cartAndChackout/CartAndCheckout';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.scroll = React.createRef();
    
    this.onStickyFooterCtaPress = this.onStickyFooterCtaPress.bind(this);
  }
  
  state = {
    currentScreen: globals.screens.LOADING
  };
  
  componentDidMount() {
    store.dispatch(fetchProducts());
    
    store.subscribe(() => {
      this.setState({
        currentScreen: store.getState().ui.currentScreen
      });
    });
  }
  
  componentDidUpdate() {
    this.scroll.scrollTo({x: 0, y: 0, animated: false});
  }
  
  onStickyFooterCtaPress() {
    store.dispatch(navigateToScreen(globals.screens.CART_AND_CHECKOUT));
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
    else {
      mainContent = <PageNotFound/>;
    }
    
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <ScrollView ref={scroll => this.scroll = scroll}>
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
