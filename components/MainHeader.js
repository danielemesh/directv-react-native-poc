import React from 'react';
import { Header } from 'react-native-elements';
import theme from '../theme';
import { Image } from 'react-native';

export default MainHeader = () => (
    <Header
        innerContainerStyles={{alignItems: 'center'}}
        backgroundColor={theme.secondaryColor}
        centerComponent={<Image resizeMode="contain" source={require('../assets/images/logo.png')} style={{height: 50}} />}
    />
);