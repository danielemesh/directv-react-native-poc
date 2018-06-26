import React from 'react';
import { Image, View } from 'react-native';

export default class DirectvHeader extends React.Component {
  render() {
    return (
        <View>
          <Image style={{flex: 1}}
                 source={require('../../assets/images/header-bg.jpg')}
                 resizeMode="contain"/>
        </View>
    );
  }
}