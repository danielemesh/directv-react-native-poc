import React from 'react';
import theme from '../../theme';
import { StyleSheet, View } from 'react-native';
import LabeledIcon from '../../components/common/LabeledIcon';
import { Text } from 'react-native-elements';
import ClearButton from '../../components/common/ClearButton';
import ClearCheckbox from '../../components/common/ClearCheckbox';

class TermsAndConditions extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <LabeledIcon
              viewContainerStyle={styles.header}
              iconName="check"
              size={20}
              label="Terms & Conditions"/>
          
          <Text style={{marginBottom: theme.panelInnerMargin}}>
            Read the DIRECTV NOW Subscriber Details, the DIRECTV NOW Terms & Conditions, and the App Privacy Policy.
          </Text>
          
          <ClearCheckbox
              title="I have read and agree to the DIRECTV NOW Subscriber Details,
              the DIRECTV NOW Terms & Conditions, and the App Privacy Policy.
              I also agree to receive promotional emails about DIRECTV NOW."
              size={40}
              textStyle={{fontSize: 15, fontWeight: 'normal'}}
              containerStyle={styles.controlContainer}
              onPress={() => console.log('terms!!!!')}
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
  divider: {
    marginVertical: theme.panelInnerMargin
  }
});

export default TermsAndConditions;