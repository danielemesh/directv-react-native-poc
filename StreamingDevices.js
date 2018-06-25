import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

import theme from './theme';
import PricePerMonth from './components/common/PricePerMonth';

export default class StreamingDevices extends React.Component {
  
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.panelHeader}>
            <Text h4>Get a streaming device, on us</Text>
            <Text>Get a streaming device for FREE when you prepay DIRECTV
              NOW.</Text>
          </View>
          
          <ScrollView horizontal>
            <StreamingDeviceCard/>
            <StreamingDeviceCard/>
          </ScrollView>
        </View>
    );
  }
}

const StreamingDeviceCard = (props) => {
  const {width} = Dimensions.get('window');
  const cardWidth = width / 1.6;
  
  return (
      <Card containerStyle={{
        width: cardWidth,
        borderWidth: 0,
        marginLeft: 0,
        marginRight: 30
      }}>
        <Text h4>title</Text>
        <Image source={require('./assets/images/apple-tv.png')}
               resizeMode="contain" style={{width: 150, alignSelf: 'center'}}/>
        <PricePerMonth price={0} size={40}/>
        <View>
          <Text>When you prepay 3 months</Text>
          <Button title="Shipping and offer details"
                  color={theme.primaryColor}
                  backgroundColor="transparent"
                  containerViewStyle={{
                    marginLeft: 0,
                    marginRight: 0,
                    alignSelf: 'flex-start'
                  }}/>
        </View>
      </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  panelHeader: {
    marginBottom: 20,
    paddingLeft: theme.mainContentPadding,
    paddingRight: theme.mainContentPadding,
  }
});
