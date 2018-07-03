import React from 'react';
import theme from '../../theme';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const LabeledIcon = ({viewContainerStyle, iconName, size, label, raised = true, reverse = true, iconColor = theme.primaryColor, iconType = 'font-awesome'}) => (
    <View style={[styles.container, viewContainerStyle]}>
      <Icon type={iconType}
            name={iconName}
            size={size}
            raised={raised}
            color={iconColor}
            reverse={reverse}/>
      <Text h4>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default LabeledIcon;