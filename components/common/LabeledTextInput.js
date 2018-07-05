import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../../theme';

class LabeledTextInput extends React.Component {
  render() {
    const {label, height = 40, viewContainerStyle, labelStyle, inputStyle, onChangeText, setRef, inputProps} = this.props;
    return (
        <View style={[styles.container, viewContainerStyle]}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          <TextInput
              ref={setRef}
              style={[styles.input, inputStyle]}
              height={height}
              onChangeText={(text) => onChangeText(text)}
              {...inputProps}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.panelInnerMargin
  },
  label: {
    fontSize: 20
  },
  input: {
    fontSize: 20
  }
});

export default LabeledTextInput;