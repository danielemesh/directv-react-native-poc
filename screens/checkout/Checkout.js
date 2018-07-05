import React from 'react';
import { View } from 'react-native';
import { ScreenTitle } from '../../components';
import ContactInfo from '../cartAndChackout/ContactInfo';
import BillingAddress from '../cartAndChackout/BillingAddress';
import AccountAccess from '../cartAndChackout/AccountAccess';
import Payment from '../cartAndChackout/Paymant';
import TermsAndConditions from '../cartAndChackout/TermsAndConditions';

class Checkout extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <ScreenTitle title={'Checkout'}/>
          <ContactInfo/>
          <BillingAddress/>
          <AccountAccess/>
          <Payment/>
          <TermsAndConditions/>
        </View>
    );
  }
}

export default Checkout;