import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { Provider } from 'react-redux';

import StickyFooter from './StickyFooter';
import DirectvNow from './screens/DirectvNow/DirectvNow';
import MainHeader from './components/MainHeader';
import Cart from './screens/Cart/Cart';
import store from './redux/store';
import { fetchProducts } from './redux/actions/products';
import globals from './globals';
import PageNotFound from './screens/404';

export default class App extends React.Component {
  state = {
    currentScreen: ''
  };
  
  componentDidMount() {
    store.dispatch(fetchProducts());
    
    store.subscribe(() => {
      this.setState({
        currentScreen: store.getState().ui.currentScreen
      });
    });
  }
  
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <ScrollView>
              <MainHeader/>
              <View style={styles.mainContentContainer}>
                {this.state.currentScreen === globals.screens.DIRECTV_NOW
                    ? (<DirectvNow/>)
                    : this.state.currentScreen === globals.screens.CART
                        ? (<Cart/>)
                        : (<PageNotFound/>)}
              </View>
            </ScrollView>
            <StickyFooter/>
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
