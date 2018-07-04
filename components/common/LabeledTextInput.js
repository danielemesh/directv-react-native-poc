import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-elements';

//const LabeledTextInput = ({label, height = 40, viewContainerStyle, labelStyle, inputStyle, onChangeText, setRef, inputProps}) => (
//    <View style={[styles.container, viewContainerStyle]}>
//      <Text style={[styles.label, labelStyle]}>{label}</Text>
//      <TextInput
//          style={[styles.input, inputStyle]}
//          height={height}
//          onChangeText={(text) => onChangeText(text)}
//          {...inputProps}
//      />
//    </View>
//);

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
  container: {},
  label: {
    fontSize: 20
  },
  input: {
    fontSize: 20
  }
});

export default LabeledTextInput;