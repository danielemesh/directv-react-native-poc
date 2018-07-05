import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../theme';

import { Divider, Text } from 'react-native-elements';
import { LabeledTextInput, LabeledIcon, LabeledPrice, CreditCardExpirationDate, Panel, PanelHeader } from '../../components';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cardNumber: '',
      expirationMonth: '',
      expirationYear: '',
      securityCode: '',
      billingZipCode: '',
      nameOnCard: ''
    };
    
    this.onChangeText = this.onChangeText.bind(this);
  }
  
  onChangeText(text, key) {
    this.setState({
      [key]: text
    });
  }
  
  render() {
    return (
        <Panel>
          <PanelHeader>
            <LabeledIcon
                iconName="dollar"
                size={20}
                label="Due today"/>
          </PanelHeader>
          
          <LabeledPrice price={0}/>
          
          <Divider style={styles.divider}/>
          
          <Text h4>Payment</Text>
          
          <Text>
            After your FREE trial, your card will be charged the regular monthly payment of $35.00,
            plus taxes & surcharges, on Jul 10, 2018 at 7 p.m. ET. Change or cancel your plan at
            any time before that to avoid being charged.
          </Text>
          
          <Divider style={styles.divider}/>
          
          <LabeledTextInput
              label="Card number"
              inputProps={{
                textContentType: 'creditCardNumber',
                keyboardType: 'numeric'
              }}
              onChangeText={text => this.onChangeText(text, 'cardNumber')}/>
          
          <CreditCardExpirationDate
              labelStyle={{fontSize: theme.controlLabelFontSize}}
              onChangeMonth={value => this.onChangeText(value, 'expirationMonth')}
              onChangeYear={value => this.onChangeText(value, 'expirationYear')}
          />
          
          <LabeledTextInput
              label="Security code"
              inputProps={{
                keyboardType: 'numeric',
                maxLength: 3
              }}
              onChangeText={text => this.onChangeText(text, 'securityCode')}/>
          
          <LabeledTextInput
              label="Billing ZIP code"
              inputProps={{
                keyboardType: 'numeric'
              }}
              onChangeText={text => this.onChangeText(text, 'billingZipCode')}/>
          
          <LabeledTextInput
              label="Name on card"
              inputProps={{
                textContentType: 'name'
              }}
              onChangeText={text => this.onChangeText(text, 'nameOnCard')}/>
          
          <Text>
            By providing this information, you certify that you are the
            card owner or have authorization to charge on this card.
          </Text>
        </Panel>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: theme.panelInnerMargin
  }
});

export default Payment;