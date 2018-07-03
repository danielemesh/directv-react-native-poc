import React from 'react';
import { Picker, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import LabeledTextInput from '../../components/common/LabeledTextInput';
import LabeledIcon from '../../components/common/LabeledIcon';
import { Divider, Text } from 'react-native-elements';
import LabeledPrice from '../../components/common/LabeledPrice';
import CreditCardExpirationDate from '../../components/common/CreditCardExpirationDate';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeExpirationMonth = this.onChangeExpirationMonth.bind(this);
    this.onChangeExpirationYear = this.onChangeExpirationYear.bind(this);
  }
  
  onChangeText(text) {
    console.log(text);
  }
  
  onChangeExpirationMonth(month) {
    console.log(month);
  }
  
  onChangeExpirationYear(year) {
    console.log(year);
  }
  
  render() {
    return (
        <View style={styles.container}>
          <LabeledIcon viewContainerStyle={styles.header}
                       iconName="dollar"
                       size={20}
                       label="Due today"/>
          
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
              viewContainerStyle={styles.controlContainer}
              inputProps={{
                textContentType: 'creditCardNumber',
                keyboardType: 'numeric'
              }}
              onChangeText={this.onChangeText}/>
          
          <CreditCardExpirationDate
            labelStyle={{fontSize: theme.controlLabelFontSize}}
            onChangeMonth={this.onChangeExpirationMonth}
            onChangeYear={this.onChangeExpirationYear}
          />
          
          <LabeledTextInput
              label="Security code"
              viewContainerStyle={styles.controlContainer}
              inputProps={{
                keyboardType: 'numeric',
                maxLength: 3
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Billing ZIP code"
              viewContainerStyle={styles.controlContainer}
              inputProps={{
                keyboardType: 'numeric'
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Name on card"
              viewContainerStyle={styles.controlContainer}
              inputProps={{
                textContentType: 'name'
              }}
              onChangeText={this.onChangeText}/>
          
          <Text>
            By providing this information, you certify that you are the
            card owner or have authorization to charge on this card.
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginBottom: 20
  },
  headerText: {
    marginBottom: 30,
    fontSize: 15
  },
  controlContainer: {
    marginBottom: theme.panelInnerMargin
  },
  divider: {
    marginVertical: theme.panelInnerMargin
  }
});

export default Payment;