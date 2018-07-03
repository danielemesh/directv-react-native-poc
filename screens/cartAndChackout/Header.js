import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const Header = ({title}) => (
    <Text h1 style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginBottom: 30
  }
});

export default Header;