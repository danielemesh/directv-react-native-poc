import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import LabeledTextInput from '../../components/common/LabeledTextInput';
import LabeledIcon from '../../components/common/LabeledIcon';
import { Button, Text } from 'react-native-elements';

class BillingAddress extends React.Component {
  constructor(props) {
    super(props);
    
    this.onChangeText = this.onChangeText.bind(this);
  }
  
  onChangeText(text) {
    console.log(text);
  }
  
  render() {
    return (
        <View style={styles.container}>
          <LabeledIcon viewContainerStyle={styles.header}
                       iconType="ionicons"
                       iconName="home"
                       size={20}
                       label="Billing Address"/>
          
          <Text style={styles.headerText}>
            Be sure to provide your debit or credit card's billing address.
          </Text>
          
          <LabeledTextInput
              label="Attention (optional)"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'name',
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Address line 1"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'streetAddressLine1',
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Address line 2"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'streetAddressLine2'
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="City"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'addressCity'
              }}
              onChangeText={this.onChangeText}/>
  
          <LabeledTextInput
              label="State"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'addressState'
              }}
              onChangeText={this.onChangeText}/>
  
          <LabeledTextInput
              label="Zip code"
              viewContainerStyle={styles.inputContainer}
              onChangeText={this.onChangeText}/>
          
          <Button
              title="Add this address"
              backgroundColor={theme.primaryColor}
              color={'#fff'}
              borderRadius={20}
              containerViewStyle={{marginLeft: 0, marginRight: 0}}
          />
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
  inputContainer: {
    marginBottom: theme.panelInnerMargin
  }
});

export default BillingAddress;