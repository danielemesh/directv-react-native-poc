import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import Plans from './Plans';
import Premiums from './Premiums';
import Dvr from './Dvr';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <Header
                backgroundColor={'#1a1a1a'}
                centerComponent={{text: 'AT&T', color: '#fff', style: styles.header}}
            />
            <Plans/>
            <Premiums/>
            <Dvr />
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#eee',
    alignItems     : 'center',
    justifyContent : 'center'
  },
  header: {
    color: '#fff'
  }
  
});
