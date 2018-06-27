import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import { Button, Icon, Text } from 'react-native-elements';
import PricePerMonth from '../../components/PricePerMonth';

export default PlansSummary = ({data, onChangeHandler}) => {
  return (
      <View style={styles.container}>
        <Icon type="font-awesome" name="tv" size={40} raised
              color={theme.primaryColor} reverse/>
        <View style={styles.summary}>
          <View>
            <Text h4>DIRECTV NOW</Text>
            <Text>{`${data.name} - ${data.numberOfChannels}`}</Text>
          </View>
          <View>
            <PricePerMonth price={data.price} size={30}/>
          </View>
        </View>
        <Button title="Change"
                onPress={() => onChangeHandler()}
                color={theme.primaryColor}
                backgroundColor="transparent"
                containerViewStyle={{
                  marginLeft: 0,
                  marginRight: 0,
                  alignSelf: 'flex-start'
                }}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: theme.panelInnerPadding
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});