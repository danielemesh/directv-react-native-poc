import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../../theme';

export default class Dvr extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={{paddingBottom: 20}}>
            <Text h3>True Cloud DVR</Text>
            <Text>BETA</Text>
          </View>
          <View>
            <Text style={{fontSize: 18, paddingBottom: 20}}>
              Included! Skip through commercials on a whim. Record up to 20
              hours — no bulky cable box required. Save recordings up to 30
              days.
            </Text>
          </View>
          <View>
            <Text>
              Functionality may be limited in beta. Compatible device required.
              Not available on select channels. Data connection required.
              Restrictions apply. See what devices are compatible with True
              Cloud DVR BETA, and learn more by visiting our FAQs.
            </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginLeft: theme.mainContentPadding,
    marginRight: theme.mainContentPadding,
    marginTop: theme.panelMarginHorizontal,
    marginBottom: theme.panelMarginHorizontal,
    backgroundColor: '#fff'
  }
});
