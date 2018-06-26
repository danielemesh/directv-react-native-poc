import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import PricePerMonth from '../../components/common/PricePerMonth';
import theme from '../../theme';

export default StreamingDeviceCard = ({width, data, containerStyle, isSelected, onSelect}) => {
  return (
      <Card containerStyle={[styles.container, {width}, containerStyle]}
            wrapperStyle={{flex: 1, justifyContent: 'space-between'}}>
        <Text h4>{data.name}</Text>
        <Image source={data.image}
               resizeMode="contain"
               style={{width: width - (theme.cardPadding * 2)}}/>
        <PricePerMonth price={data.price} size={40}/>
        <View>
          <Text style={{color: '#14741f'}}>{data.details}</Text>
          <Button title="Shipping and offer details"
                  color={theme.primaryColor}
                  backgroundColor="transparent"
                  containerViewStyle={{
                    marginLeft: 0,
                    marginRight: 0,
                    alignSelf: 'flex-start'
                  }}/>
        </View>
        <Button title={isSelected ? 'Remove' : 'Add'}
                backgroundColor={isSelected ? 'transparent' : theme.primaryColor}
                color={isSelected ? theme.primaryColor : '#fff'}
                borderRadius={20}
                buttonStyle={{borderWidth: 2, borderColor: isSelected ? theme.primaryColor : '#fff'}}
                containerViewStyle={{marginLeft: 0, marginRight: 0}}
                onPress={() => onSelect(data.id)}
        />
      </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 30
  }
});