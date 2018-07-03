import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import theme from '../../theme';
import LabeledTextInput from '../../components/common/LabeledTextInput';
import LabeledIcon from '../../components/common/LabeledIcon';
import { Button, CheckBox, Text } from 'react-native-elements';
import RadioButton from '../../components/common/RadioButton';
import ClearButton from '../../components/common/ClearButton';
import ClearCheckbox from '../../components/common/ClearCheckbox';

class AccountAccess extends React.Component {
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
                       iconType="materialicons"
                       iconName="security"
                       size={20}
                       label="Account access"/>
          
          <Text style={styles.headerText}>
            Can't wait to stream? With an AT&T Access ID, you can start streaming as soon as you've placed your order!
          </Text>
          
          <RadioButton
              title="I need to create an Access ID"
              containerStyle={styles.controlContainer}
              textStyle={styles.radioText}
              size={40}
              checked={true}
              onPress={() => console.log('create access id')}
          />
          
          <LabeledTextInput
              label="Access ID"
              viewContainerStyle={styles.controlContainer}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Password"
              viewContainerStyle={styles.controlContainer}
              inputProps={{
                textContentType: 'password',
                secureTextEntry: true
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Re-enter password"
              viewContainerStyle={styles.controlContainer}
              inputProps={{
                textContentType: 'password',
                secureTextEntry: true
              }}
              onChangeText={this.onChangeText}/>
          
          <ClearButton
              title="Read the AT&T Access ID Terms of Service"
              containerViewStyle={styles.controlContainer}
              onPress={() => Alert.alert('These are the terms of service')}/>
          
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
              checked={false}
              onPress={() => console.log('already have access id')}
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
  controlContainer: {
    marginBottom: theme.panelInnerMargin
  },
  radioText: {
    fontSize: 20,
    fontWeight: 'normal'
  }
});

export default AccountAccess;