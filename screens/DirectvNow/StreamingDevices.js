import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import theme from '../../theme';
import StreamingDeviceCard from './StreamDeviceCard';
import { connect } from 'react-redux';
import { removeStreamingDevice, selectStreamingDevice } from '../../redux/actions/products';

class StreamingDevices extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSelectDevice = this.onSelectDevice.bind(this);
  }
  
  onSelectDevice(id) {
    this.props.selectedStreamingDeviceId === id
        ? this.props.removeStreamingDevice()
        : this.props.selectStreamingDevice(id);
  }
  
  render() {
    const {width}   = Dimensions.get('window');
    const {devices} = this.props;
    
    return (
        <View style={styles.container}>
          <View style={styles.panelHeader}>
            <Text h4>Get a streaming device, on us</Text>
            <Text>Get a streaming device for FREE when you prepay DIRECTV
              NOW.</Text>
          </View>
          
          <ScrollView horizontal>
            {devices.map((device, index) => {
              const isLast = index === devices.length - 1;
              return (
                  <StreamingDeviceCard
                      key={device.id}
                      data={device}
                      isSelected={this.props.selectedStreamingDeviceId ===
                      device.id}
                      onSelect={this.onSelectDevice}
                      width={width / 1.6}
                      containerStyle={isLast ? {marginRight: 0} : {}}/>
              );
            })}
          </ScrollView>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  devices: state.products.streamingDevices,
  selectedStreamingDeviceId: state.products.selectedStreamingDeviceId
});

const mapDispatchToProps = (dispatch) => ({
  selectStreamingDevice: (id) => dispatch(selectStreamingDevice(id)),
  removeStreamingDevice: () => dispatch(removeStreamingDevice())
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamingDevices);

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
