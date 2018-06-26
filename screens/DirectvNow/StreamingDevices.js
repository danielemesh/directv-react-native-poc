import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

import theme from '../../theme';
import PricePerMonth from '../../components/common/PricePerMonth';
import StreamingDeviceCard from './StreamDeviceCard';
import { generateGuid } from '../../utils';

export default class StreamingDevices extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSelectDevice = this.onSelectDevice.bind(this);
    
    this.state = {
      devices: [
        {
          id: generateGuid(),
          name: 'Apple TV 4K',
          image: require('../../assets/images/apple-tv.png'),
          price: 0,
          details: 'When you prepay 3 months',
        },
        {
          id: generateGuid(),
          name: 'Roku Streaming Stick',
          image: require('../../assets/images/roku.png'),
          price: 0,
          details: 'When you prepay 1 months',
        }
      ],
      selectedDeviceId: ''
    };
  }
  
  onSelectDevice(id) {
    this.setState({selectedDeviceId: id});
  }
  
  render() {
    const {width} = Dimensions.get('window');
    return (
        <View style={styles.container}>
          <View style={styles.panelHeader}>
            <Text h4>Get a streaming device, on us</Text>
            <Text>Get a streaming device for FREE when you prepay DIRECTV
              NOW.</Text>
          </View>
          
          <ScrollView horizontal>
            {this.state.devices.map((device, index) => {
              const isLast = index === this.state.devices.length - 1;
              return (
                  <StreamingDeviceCard
                      key={device.id}
                      data={device}
                      isSelected={this.state.selectedDeviceId === device.id}
                      onSelect={this.onSelectDevice}
                      width={width / 1.6}
                      containerStyle={isLast ? {marginRight: 0} : {}}/>
              )
            })}
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  panelHeader: {
    marginBottom: 20,
    paddingLeft: theme.mainContentPadding,
    paddingRight: theme.mainContentPadding
  }
});
