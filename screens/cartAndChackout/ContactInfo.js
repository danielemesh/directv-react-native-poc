import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import LabeledTextInput from '../../components/common/LabeledTextInput';
import LabeledIcon from '../../components/common/LabeledIcon';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    
    this.inputs = {firstName: React.createRef(), lastName: React.createRef()};
    
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: ''
    };
    
    this.onChangeText = this.onChangeText.bind(this);
  }
  
  onChangeText(text, key) {
    console.log(text, key);
  }
  
  render() {
    return (
        <View style={styles.container}>
          <LabeledIcon viewContainerStyle={styles.header}
                       iconType="ionicons"
                       iconName="person"
                       size={20}
                       label="Contact Info"/>
          
          <LabeledTextInput
              setRef={input => this.inputs.firstName = input}
              label="First name"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'name',
                blurOnSubmit: false,
                returnKeyType: 'next',
                onSubmitEditing: () => {
                  this.inputs.lastName.focus();
                }
              }}
              onChangeText={(text) => this.onChangeText(text, 'firstName')}/>
          
          <LabeledTextInput
              setRef={input => this.inputs.lastName = input}
              label="Last name"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'familyName',
                returnKeyType: 'done'
              }}
              onChangeText={(text) => this.onChangeText(text, 'lastName')}/>
          
          {/*<LabeledTextInput*/}
              {/*label="Contact phone number"*/}
              {/*viewContainerStyle={styles.inputContainer}*/}
              {/*inputProps={{*/}
                {/*keyboardType: 'phone-pad',*/}
                {/*textContentType: 'telephoneNumber'*/}
              {/*}}*/}
              {/*onChangeText={(text) => this.onChangeText(text, 'phoneNumber')}/>*/}
          
          {/*<LabeledTextInput*/}
              {/*label="Email"*/}
              {/*viewContainerStyle={styles.inputContainer}*/}
              {/*inputProps={{*/}
                {/*keyboardType: 'email-address',*/}
                {/*textContentType: 'emailAddress'*/}
              {/*}}*/}
              {/*onChangeText={(text) => this.onChangeText(text, 'emailAddress')}/>*/}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginBottom: 30
  },
  inputContainer: {
    marginBottom: theme.panelInnerMargin
  }
});

export default ContactInfo;