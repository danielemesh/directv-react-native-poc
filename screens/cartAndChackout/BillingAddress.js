import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { LabeledTextInput, LabeledIcon, LabeledPicker, Panel, PanelHeader } from '../../components';
import theme from '../../theme';

class BillingAddress extends React.Component {
  constructor(props) {
    super(props);
    
    this.controls = {
      attention: React.createRef(),
      addressLine1: React.createRef(),
      addressLine2: React.createRef(),
      city: React.createRef(),
      state: React.createRef(),
      zipCode: React.createRef()
    };
    
    this.state = {
      attention: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: ''
    };
    
    //this.state = {
    //  selectedState: ''
    //};
    
    this.onChangeText    = this.onChangeText.bind(this);
    this.focusNextControl = this.focusNextControl.bind(this);
    //this.onStateSelected = this.onStateSelected.bind(this);
  }
  
  focusNextControl(key) {
    this.controls[key].focus();
  }
  
  onChangeText(text, key) {
    this.setState({
      [key]: text
    })
  }
  
  //onStateSelected(itemValue, itemIndex) {
  //  console.log(itemValue);
  //  this.setState({selectedState: itemValue});
  //
  //}
  
  render() {
    return (
        <Panel>
          <PanelHeader>
            <LabeledIcon
                iconType="ionicons"
                iconName="home"
                size={20}
                label="Billing Address"/>
          </PanelHeader>
          
          <Text style={styles.headerText}>
            Be sure to provide your debit or credit card's billing address.
          </Text>
          
          <LabeledTextInput
              label="Attention (optional)"
              setRef={input => this.controls.attention = input}
              inputProps={{
                textContentType: 'name',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('addressLine1')
              }}
              onChangeText={(text) => this.onChangeText(text, 'attention')}/>
          
          <LabeledTextInput
              label="Address line 1"
              setRef={input => this.controls.addressLine1 = input}
              inputProps={{
                textContentType: 'streetAddressLine1',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('addressLine2')
              }}
              onChangeText={(text) => this.onChangeText(text, 'addressLine1')}/>
          
          <LabeledTextInput
              label="Address line 2 (required if applicable)"
              setRef={input => this.controls.addressLine2 = input}
              inputProps={{
                textContentType: 'streetAddressLine2',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('city')
              }}
              onChangeText={(text) => this.onChangeText(text, 'addressLine2')}/>
          
          <LabeledTextInput
              label="City"
              setRef={input => this.controls.city = input}
              inputProps={{
                textContentType: 'addressCity',
              }}
              onChangeText={(text) => this.onChangeText(text, 'city')}/>
          
          <LabeledPicker
              label="State"
              setRef={input => this.controls.state = input}
              selectedValue={this.state.state}
              items={[
                {label: 'Alabama', value: 'AL'},
                {label: 'Alaska', value: 'AK'},
                {label: 'Arizona', value: 'AZ'}
              ]}
              onValueChange={(value, index) => this.onChangeText(value, 'state')}/>
          
          <LabeledTextInput
              label="Zip code"
              setRef={input => this.controls.zipCode = input}
              inputProps={{
                returnKeyType: 'done',
              }}
              onChangeText={(text) => this.onChangeText(text, 'zipCode')}/>
          
          <Button
              title="Add this address"
              backgroundColor={theme.primaryColor}
              color={'#fff'}
              borderRadius={theme.btnBorderRadius}
              containerViewStyle={{marginLeft: 0, marginRight: 0}}
          />
        </Panel>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 30,
    fontSize: 15
  }
});

export default BillingAddress;