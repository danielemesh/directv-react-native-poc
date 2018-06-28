import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import PricePerMonth from '../../components/PricePerMonth';
import theme from '../../theme';

export default PlanCard = ({width, plan, containerStyle, isSelected, onSelect}) => {
  return (
      <Card containerStyle={[styles.container, {width}, containerStyle]}
            wrapperStyle={{flex: 1, justifyContent: 'space-between'}}
      >
        <View style={styles.header}>
          <Text style={styles.name}>{plan.name}</Text>
          <Text h4>{plan.numberOfChannels}</Text>
        </View>
        <Image source={{uri: plan.image}}
               resizeMode="contain"
               style={{width: width - (theme.cardPadding * 2), height: 50}}
        />
        <Button title="See all channels"
                color={theme.primaryColor}
                backgroundColor="transparent"
                containerViewStyle={{
                  marginLeft: 0,
                  marginRight: 0,
                  alignSelf: 'flex-start'
                }}/>
        <PricePerMonth price={plan.price} size={50}
                       containerViewStyle={{marginBottom: theme.panelInnerMargin}}/>
        <Button title={isSelected ? 'Remove plan' : 'Select plan'}
                backgroundColor={isSelected ? '#fff' : theme.primaryColor}
                color={isSelected ? theme.primaryColor : '#fff'}
                borderRadius={20}
                buttonStyle={{borderWidth: 2, borderColor: theme.primaryColor}}
                containerViewStyle={{marginLeft: 0, marginRight: 0}}
                onPress={() => onSelect(plan)}
        />
      </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    marginLeft: 0,
    marginRight: theme.cardMarginRight,
  },
  header: {
    marginBottom: theme.panelInnerMargin
  },
  name: {
    fontWeight: 'bold'
  }
});