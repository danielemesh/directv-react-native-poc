import React from 'react';
import { Header } from 'react-native-elements';
import theme from '../theme';

export default MainHeader = () => (
    <Header
        backgroundColor={theme.secondaryColor}
        centerComponent={{
          text: 'AT&T',
          color: '#fff',
          style: {color: '#fff'}
        }}
    />
);