import React from 'react';
import { View } from 'react-native';

import Plans from './Plans';
import Premiums from './Premiums';
import Dvr from './Dvr';
import Cdvr from './Cdvr';
import StreamingDevices from './StreamingDevices';

export default class DirectvNow extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Plans/>
          <Premiums/>
          <Dvr/>
          <Cdvr/>
          <StreamingDevices/>
        </View>
    );
  }
}
