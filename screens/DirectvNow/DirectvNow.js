import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Plans from './Plans';
import Premiums from './Premiums';
import Dvr from './Dvr';
import Cdvr from './Cdvr';
import StreamingDevices from './StreamingDevices';
import { Button, Text } from 'react-native-elements';

class DirectvNow extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Text>{this.props.cart.price}</Text>
          <Button title="Click!" onPress={this.props.incrementPrice} />
          <Plans/>
          <Premiums/>
          <Dvr/>
          <Cdvr/>
          <StreamingDevices/>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

const mapDispatchToProps = (dispatch) => ({
  incrementPrice: () => dispatch({type: 'INC_PRICE', payload: {price: 30}})
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectvNow);