import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default Loading = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text h1>Loading...</Text>
    </View>
);