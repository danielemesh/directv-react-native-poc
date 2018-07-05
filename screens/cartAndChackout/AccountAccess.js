import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { LabeledTextInput, LabeledIcon, RadioButton, ClearButton, ClearCheckbox, Panel, PanelHeader } from '../../components';
import theme from '../../theme';

class AccountAccess extends React.Component {
  constructor(props) {
    super(props);
    
    this.controls = {
      accessId: React.createRef(),
      password1: React.createRef(),
      password2: React.createRef()
    };
    
    this.state = {
      accessId: '',
      password1: '',
      password2: '',
      isCreateAccessId: true
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
                iconType="materialicons"
                iconName="security"
                size={20}
                label="Account access"/>
          </PanelHeader>
          
          <Text style={styles.headerText}>
            Can't wait to stream? With an AT&T Access ID, you can start streaming as soon as you've placed your order!
          </Text>
          
          <RadioButton
              title="I need to create an Access ID"
              containerStyle={styles.controlContainer}
              textStyle={styles.radioText}
              size={40}
              checked={this.state.isCreateAccessId}
              onPress={() => console.log('create access id')}
          />
          
          <LabeledTextInput
              label="Access ID"
              setRef={input => this.controls.accessId = input}
              inputProps={{
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('password1')
              }}
              onChangeText={text => this.onChangeText(text, 'accessId')}/>
          
          <LabeledTextInput
              label="Password"
              setRef={input => this.controls.password1 = input}
              inputProps={{
                textContentType: 'password',
                secureTextEntry: true,
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.focusNextControl('password2')
              }}
              onChangeText={text => this.onChangeText(text, 'password1')}/>
          
          <LabeledTextInput
              label="Re-enter password"
              setRef={input => this.controls.password2 = input}
              inputProps={{
                textContentType: 'password',
                secureTextEntry: true,
                returnKeyType: 'done'
              }}
              onChangeText={text => this.onChangeText(text, 'password2')}/>
          
          <ClearButton
              title="Read the AT&T Access ID Terms of Service"
              containerViewStyle={styles.controlContainer}
              onPress={() => Alert.alert('Terms of Service', 'These are the terms of service')}/>
          
          <ClearCheckbox
              title="I have read and agree to the AT&T Access ID Terms of Service"
              size={40}
              textStyle={{fontSize: 15, fontWeight: 'normal'}}
              containerStyle={styles.controlContainer}
              onPress={() => console.log('agree!')}
          />
          
          <Button
              title="Create my Access ID"
              disabled={true}
              disabledStyle={{backgroundColor: theme.btnDisabledBgColor}}
              backgroundColor={theme.primaryColor}
              color={'#fff'}
              borderRadius={theme.btnBorderRadius}
              containerViewStyle={[{marginLeft: 0, marginRight: 0}, styles.controlContainer]}
          />
          
          <RadioButton
              title="I already have an Access ID"
              containerStyle={styles.controlContainer}
              textStyle={styles.radioText}
              size={40}
              checked={!this.state.isCreateAccessId}
              onPress={() => console.log('already have access id')}
          />
        </Panel>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 30,
    fontSize: 15
  },
  controlContainer: {
    marginBottom: theme.panelInnerMargin
  },
  radioText: {
    fontSize: 20,
    fontWeight: 'normal'
  }
});

export default AccountAccess;