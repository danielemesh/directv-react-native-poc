import React from 'react';

import { LabeledTextInput, LabeledIcon, Panel, PanelHeader } from '../../components';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    
    this.controls = {
      firstName: React.createRef(),
      lastName: React.createRef(),
      phoneNumber: React.createRef(),
      emailAddress: React.createRef()
    };
    
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: ''
    };
    
    this.onChangeText     = this.onChangeText.bind(this);
    this.focusNextControl = this.focusNextControl.bind(this);
  }
  
  focusNextControl(key) {
    this.controls[key].focus();
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
                iconType="ionicons"
                iconName="person"
                size={20}
                label="Contact Info"/>
          </PanelHeader>
          
          <LabeledTextInput
              label="First name"
              setRef={input => this.controls.firstName = input}
              inputProps={{
                textContentType: 'name',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('lastName')
              }}
              onChangeText={(text) => this.onChangeText(text, 'firstName')}/>
          
          <LabeledTextInput
              label="Last name"
              setRef={input => this.controls.lastName = input}
              inputProps={{
                textContentType: 'familyName',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('phoneNumber')
              }}
              onChangeText={(text) => this.onChangeText(text, 'lastName')}/>
          
          <LabeledTextInput
              label="Contact phone number"
              setRef={input => this.controls.phoneNumber = input}
              inputProps={{
                keyboardType: 'phone-pad',
                textContentType: 'telephoneNumber',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('emailAddress')
              }}
              onChangeText={(text) => this.onChangeText(text, 'phoneNumber')}/>
          
          <LabeledTextInput
              label="Email"
              setRef={input => this.controls.emailAddress = input}
              inputProps={{
                keyboardType: 'email-address',
                textContentType: 'emailAddress',
                blurOnSubmit: true,
                returnKeyType: 'done'
              }}
              onChangeText={(text) => this.onChangeText(text, 'emailAddress')}/>
        </Panel>
    );
  }
}

export default ContactInfo;