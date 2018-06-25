import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import Plans from './Plans';
import Premiums from './Premiums';
import Dvr from './Dvr';
import Cdvr from './Cdvr';
import DirectvHeader from './DirectvHeader';
import PlansSummary from './PlansSummary';
import StreamingDevices from './StreamingDevices';

export default class App extends React.Component {
  state = {
    isSelected: false
  };
  
  changeSelection = () => {
    this.setState({isSelected: !this.state.isSelected});
  };
  
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
            {/*<DirectvHeader/>*/}
            <View style={styles.mainContentContainer}>
              {this.state.isSelected ? (
                  <PlansSummary changeSelection={this.changeSelection}/>
              ) : (
                  <Plans changeSelection={this.changeSelection}/>
              )}
              <Premiums/>
              <Dvr/>
              <Cdvr/>
              <StreamingDevices/>
            </View>
          </ScrollView>
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
