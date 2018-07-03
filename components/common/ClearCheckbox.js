import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import theme from '../../theme';

const ClearCheckbox = ({title, size, containerStyle, textStyle, checked, onPress}) => (
    <CheckBox
        title={title}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        size={size}
        containerStyle={[styles.container, containerStyle]}
        textStyle={textStyle}
        checkedColor={theme.primaryColor}
        checked={true}
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

export default ClearCheckbox;