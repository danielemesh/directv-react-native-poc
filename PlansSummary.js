import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from './theme';
import { Button, Icon, Text } from 'react-native-elements';
import PricePerMonth from './components/common/PricePerMonth';

export default class PlansSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { changeSelection } = this.props;
    return (
        <View style={styles.container}>
          <Icon type="font-awesome" name="tv" size={40} raised color={theme.primaryColor} reverse/>
          <View style={styles.summary}>
            <View>
              <Text h4>DIRECTV NOW</Text>
              <Text>JUST RIGHT - 80+ live channels</Text>
            </View>
            <View>
              <PricePerMonth price={50} size={30} />
            </View>
          </View>
          <Button title="Change"
                  onPress={() => changeSelection()}
                  color={theme.primaryColor}
                  backgroundColor="transparent"
                  containerViewStyle={{marginLeft: 0, marginRight: 0, alignSelf: 'flex-start'}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});