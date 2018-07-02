import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import LabeledTextInput from '../../components/common/LabeledTextInput';
import LabeledIcon from '../../components/common/LabeledIcon';

class ContactInfo extends React.Component {
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
                       iconName="person"
                       size={20}
                       label="Contact Info"/>
          
          <LabeledTextInput
              label="First name"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'name',
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Last name"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                textContentType: 'familyName',
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Contact phone number"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                keyboardType: 'phone-pad',
                textContentType: 'telephoneNumber'
              }}
              onChangeText={this.onChangeText}/>
          
          <LabeledTextInput
              label="Email"
              viewContainerStyle={styles.inputContainer}
              inputProps={{
                keyboardType: 'email-address',
                textContentType: 'emailAddress'
              }}
              onChangeText={this.onChangeText}/>
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