import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import theme from '../../theme';

const RadioButton = ({title, size, containerStyle, textStyle, checked, onPress}) => (
    <CheckBox
        title={title}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        size={size}
        containerStyle={[styles.container, containerStyle]}
        textStyle={textStyle}
        checkedColor={theme.primaryColor}
        checked={checked}
        onPress={onPress}
    />
);

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'transparent',
    borderWidth: 0
  }
});

export default RadioButton;