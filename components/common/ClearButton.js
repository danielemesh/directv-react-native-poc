import React from 'react';
import { Button } from 'react-native-elements';
import theme from '../../theme';

export default ClearButton = ({title, containerViewStyle, onPress, color = theme.primaryColor}) => (
    <Button title={title}
            onPress={() => onPress()}
            color={color}
            backgroundColor="transparent"
            containerViewStyle={{
              marginLeft: 0,
              marginRight: 0
            }}/>
);