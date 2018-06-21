import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, PricingCard } from 'react-native-elements';
import Plans from './Plans';

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
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : 'center'
  },
  header: {
    color: '#fff'
  }
  
});
