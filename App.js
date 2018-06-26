import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';

import StickyFooter from './StickyFooter';
import DirectvNow from './screens/DirectvNow/DirectvNow';
import MainHeader from './components/common/MainHeader';
import Cart from './screens/Cart/Cart';
import store from './redux/store';

export default class App extends React.Component {
  state = {
    currentScreen: 'DirectvNow'
  };
  
  componentDidMount() {
    setTimeout(() => {
      console.log('dispatch');
      store.dispatch({type: 'INC_PRICE', payload: {price: 5}});
    }, 3000);
  }
  
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <ScrollView>
              <MainHeader/>
              <View style={styles.mainContentContainer}>
                {this.state.currentScreen === 'DirectvNow'
                    ? (<DirectvNow/>)
                    : (<Cart/>)}
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
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContentContainer: {
    flex: 1
  }
});
