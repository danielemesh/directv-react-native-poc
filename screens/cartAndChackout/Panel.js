import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';

const Panel = ({children}) => (
    <View style={styles.panel}>
      {children}
    </View>
);

const styles = StyleSheet.create({
  panel: {
    padding: theme.panelInnerPadding,
    backgroundColor: theme.panelBgColor
  }
});

export default Panel;