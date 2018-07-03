import React from 'react';
import { Picker, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { generateGuid } from '../../utils';
import theme from '../../theme';

const LabeledPicker = ({label, items, viewContainerStyle, labelStyle, pickerStyle, selectedValue, onValueChange}) => (
    <View style={[styles.container, viewContainerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <Picker
          style={[styles.picker, pickerStyle]}
          selectedValue={selectedValue}
          onValueChange={onValueChange}>
        {items.map(item => (
            <Picker.Item key={generateGuid()} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
);

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: theme.controlLabelFontSize
  },
  picker: {}
});

export default LabeledPicker;