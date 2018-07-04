import React from 'react';
import { View } from 'react-native';
import theme from '../../theme';

const PanelHeader = ({children, viewContainerStyle}) => (
    <View style={[{marginBottom: theme.panelInnerMargin}, viewContainerStyle]}>
      {children}
    </View>
);

export default PanelHeader;