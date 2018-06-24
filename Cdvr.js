import React from 'react';
import { Image, StyleSheet, View, Alert, TouchableWithoutFeedback } from 'react-native';
import { Badge, CheckBox, Text } from 'react-native-elements';

import theme from './theme';
import PricePerMonth from './components/common/PricePerMonth';

export default class Cdvr extends React.Component {
  state = {
    selected: 'included'
  };
  
  onChange = (type) => {
    this.setState({selected: type});
  };
  
  render() {
    return (
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image resizeMode="contain"
                   style={{width: 260, height: 141}}
                   source={{uri: 'https://www.att.com/buy/images/IMG_stream.png'}}/>
          </View>
          <View>
            <Text h4 style={styles.panelTitle}>
              Stream on more screens at the same time
            </Text>
            
            <TouchableWithoutFeedback onPress={() => this.onChange('included')}>
              <View style={styles.streamOption}>
                <CheckBox
                    title=""
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    size={40}
                    containerStyle={styles.checkboxContainer}
                    textStyle={{fontSize: 20}}
                    checkedColor={theme.primaryColor}
                    checked={this.state.selected === 'included'}
                />
                <View>
                  <Text style={styles.label}>
                    2 devices at once
                  </Text>
                  <Badge
                      containerStyle={StyleSheet.flatten([
                        styles.badgeContainer,
                        {backgroundColor: '#1a1a1a'}])}>
                    <Text style={styles.badgeTitle}>INCLUDED</Text>
                  </Badge>
                  <Text>Watch 2 shows on 2 devices—all at the same time.</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => this.onChange('upgrade')}>
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                    title=""
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    size={40}
                    containerStyle={styles.checkboxContainer}
                    textStyle={{fontSize: 20}}
                    checkedColor={theme.primaryColor}
                    checked={this.state.selected === 'upgrade'}
                />
                <View>
                  <Text
                      style={styles.label}>
                    Watch live TV on up to three devices at the same time.
                  </Text>
                  <Badge
                      containerStyle={StyleSheet.flatten([
                        styles.badgeContainer,
                        {backgroundColor: '#358026'}])}>
                    <Text style={styles.badgeTitle}>UPGRADE</Text>
                  </Badge>
                  <PricePerMonth price={'5'} size={30}/>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container        : {
    flex           : 1,
    margin         : 10,
    padding        : 20,
    backgroundColor: '#fff'
  },
  panelTitle       : {
    marginBottom: 20,
    marginTop   : 20
  },
  streamOption     : {
    flexDirection: 'row',
    marginBottom : 30
  },
  checkboxContainer: {
    margin         : 0,
    padding        : 0,
    marginLeft     : 0,
    marginRight    : 0,
    backgroundColor: 'transparent',
    borderWidth    : 0
  },
  label            : {
    fontSize    : 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  badgeContainer   : {
    borderRadius: 5,
    alignSelf   : 'flex-start',
    marginBottom: 10
  },
  badgeTitle       : {
    color: '#fff',
    fontWeight: 'bold'
  }
});
