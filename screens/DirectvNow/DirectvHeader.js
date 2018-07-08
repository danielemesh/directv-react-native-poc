import React from 'react';
import { View, Dimensions, ImageBackground, Image, StyleSheet } from 'react-native';
import { Divider, Icon, Text } from 'react-native-elements';

import { ClearButton } from '../../components';
import theme from '../../theme';

export default DirectvHeader = () => {
  const {width, height} = Dimensions.get('window');
  return (
      <View>
        <ImageBackground
            style={{width, alignItems: 'center', paddingTop: 70}}
            source={require('../../assets/images/header-bg.jpg')}
            resizeMode="cover">
          
          <Text h4 style={[styles.text]}>DIRECTV NOW</Text>
          
          <Divider style={styles.divider} />
  
          <Text h3 style={[styles.text]}>Streaming TV.</Text>
          <Text h3 style={[styles.text]}>Reimagined.</Text>
          
          <Text style={[styles.text, styles.textMedium]}>Stream live TV on all your favorite devices.</Text>
          
          <View>
            <View style={styles.listItem}>
              <Image source={require('../../assets/images/no-contracts.png')} resizeMode="contain" style={styles.listItemIcon}/>
              <Text style={[styles.text]}>No contracts</Text>
            </View>
  
            <View style={styles.listItem}>
              <Image source={require('../../assets/images/no-equipment.png')}  resizeMode="contain" style={styles.listItemIcon}/>
              <Text style={[styles.text]}>No equipment</Text>
            </View>
  
            <View style={styles.listItem}>
              <Image source={require('../../assets/images/no-hassles.png')}  resizeMode="contain" style={styles.listItemIcon}/>
              <Text style={[styles.text]}>Instant access</Text>
            </View>
          </View>
  
          <Text style={[styles.text, styles.textMedium]}>Take it for a spin FREE for 7 days.</Text>
          
          <Text style={styles.text}>After free trial, auto-billed monthly unless cancelled</Text>
          
          <ClearButton title="See offer details" />
          
          <Text h4 style={[styles.text, {marginTop: 30, marginBottom: 20}]}>Set up your streaming TV</Text>
          
          <Icon name="chevron-down" type="font-awesome" color="#fff" />
        
          <Image source={require('../../assets/images/header-pic.png')} resizeMode="contain" style={[styles.teaserImage, {height: 300, width: width - (theme.mainContentPadding * 2)}]} />
        
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold'
  },
  textMedium: {
    fontSize: 20,
    marginVertical: 30
  },
  divider: {
    width: 40,
    height: 10,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: theme.primaryColor
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemIcon: {
    width: 30,
    marginRight: 25
  },
  teaserImage: {
  }
});