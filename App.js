import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import Plans from './Plans';
import Premiums from './Premiums';
import Dvr from './Dvr';
import Cdvr from './Cdvr';
import StreamingDevices from './StreamingDevices';
import StickyFooter from './StickyFooter';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <Header
                backgroundColor={'#1a1a1a'}
                centerComponent={{
                  text: 'AT&T',
                  color: '#fff',
                  style: styles.header
                }}
            />
            <View style={styles.mainContentContainer}>
              <Plans />
              <Premiums/>
              <Dvr/>
              <Cdvr/>
              <StreamingDevices/>
            </View>
          </ScrollView>
          <StickyFooter />
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
  header: {
    color: '#fff'
  },
  mainContentContainer: {
    flex: 1
  }
});
