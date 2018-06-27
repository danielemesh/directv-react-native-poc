import React from 'react';
import { Header } from 'react-native-elements';

export default MainHeader = () => (
    <Header
        backgroundColor={'#1a1a1a'}
        centerComponent={{
          text: 'AT&T',
          color: '#fff',
          style: {color: '#fff'}
        }}
    />
);