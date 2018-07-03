import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../cartAndChackout/Header';
import Panel from '../cartAndChackout/Panel';
import ContactInfo from '../cartAndChackout/ContactInfo';
import BillingAddress from '../cartAndChackout/BillingAddress';
import AccountAccess from '../cartAndChackout/AccountAccess';
import Payment from '../cartAndChackout/Paymant';

class Checkout extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Header title={'Checkout'}/>
          
          <Panel>
            <ContactInfo/>
          </Panel>
          <Panel>
            <BillingAddress/>
          </Panel>
          <Panel>
            <AccountAccess/>
          </Panel>
          <Panel>
            <Payment/>
          </Panel>
        </View>
    );
  }
}

export default Checkout;