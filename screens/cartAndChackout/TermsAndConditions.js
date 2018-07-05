import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Panel, PanelHeader, LabeledIcon, ClearCheckbox } from '../../components';
import theme from '../../theme';

class TermsAndConditions extends React.Component {
  render() {
    return (
        <Panel>
          <PanelHeader>
            <LabeledIcon
                iconName="check"
                size={20}
                label="Terms & Conditions"/>
          </PanelHeader>
          
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
        </Panel>
    );
  }
}

const styles = StyleSheet.create({
  controlContainer: {
    marginBottom: theme.panelInnerMargin
  }
});

export default TermsAndConditions;