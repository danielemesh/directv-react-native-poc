import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import PricePerMonth from '../../components/PricePerMonth';
import theme from '../../theme';

export default AddonCard = ({width, addon, containerStyle, isSelected, onSelect}) => {
  return (
      <Card
          containerStyle={[
            styles.container,
            {width},
            {backgroundColor: addon.backgroundColor},
            containerStyle]}
          wrapperStyle={styles.cardWrapper}
      >
        <Image source={{uri: addon.image}}
               resizeMode={'contain'}
               style={[
                 styles.image,
                 {width: width - (theme.cardPadding * 2)}]}/>
        <View style={{marginBottom: 20}}>
          {addon.featuredPrograms.map((text, i) => (
              <Text key={i}
                    style={styles.cardContent}>{text}</Text>
          ))}
        </View>
        <PricePerMonth
            price={addon.price}
            size={30}
            color="#fff"
            containerViewStyle={{marginBottom: 20, alignSelf: 'center'}}/>
        <View>
          <Button title={isSelected ? 'Remove' : 'Add'}
                  backgroundColor={isSelected ? 'transparent' : '#fff'}
                  color={isSelected ? '#fff' : theme.primaryColor}
                  borderRadius={theme.btnBorderRadius}
                  buttonStyle={{
                    borderWidth: 2,
                    borderColor: isSelected ? '#fff' : theme.primaryColor
                  }}
                  containerViewStyle={{marginLeft: 0, marginRight: 0}}
                  onPress={() => onSelect(addon)}
          />
        </View>
      </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    marginLeft: 0,
    marginRight: theme.cardMarginRight
  },
  cardWrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  image: {
    height: 50,
    marginBottom: 30
  },
  cardContent: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#fff'
  }
});