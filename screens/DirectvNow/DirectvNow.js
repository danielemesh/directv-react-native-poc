import React from 'react';
import { View } from 'react-native';

import Plans from './Plans';
import Addons from './Addons';
import Dvr from './Dvr';
import Cdvr from './Cdvr';
import StreamingDevices from './StreamingDevices';
import DirectvHeader from './DirectvHeader';

export default class DirectvNow extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <DirectvHeader />
          <Plans/>
          <Addons/>
          <Dvr/>
          <Cdvr/>
          <StreamingDevices/>
        </View>
    );
  }
}