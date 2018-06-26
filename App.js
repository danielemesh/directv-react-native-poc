import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import StickyFooter from './StickyFooter';
import DirectvNow from './screens/DirectvNow/DirectvNow';
import MainHeader from './components/common/MainHeader';
import Cart from './screens/Cart/Cart';

export default class App extends React.Component {
  state = {
    currentScreen: 'DirectvNow'
  };
  
  render() {
    return (
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
