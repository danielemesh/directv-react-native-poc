import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../cartAndChackout/Header';
import Panel from '../cartAndChackout/Panel';
import ContactInfo from '../cartAndChackout/ContactInfo';

class Checkout extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Header title={'Checkout'}/>
          
          <Panel>
            <View>
              <ContactInfo/>
            </View>
          </Panel>
        </View>
    );
  }
}

export default Checkout;