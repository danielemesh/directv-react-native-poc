import React from 'react';
import { ScrollView, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import theme from './theme';
import PricePerMonth from './components/common/PricePerMonth';

export default class Premiums extends React.Component {
  cards     = [
    {
      id: 1,
      imgSrc: require('./assets/images/hbo-logo.png'),
      content: [
        'Game of Thrones',
        'Insecure',
        'Westworld'
      ],
      backgroundColor: 'linear-gradient(153deg, rgb(24, 55, 192), rgb(206, 73, 105))'
    },
    {
      id: 2,
      imgSrc: require('./assets/images/cinemax-logo.png'),
      content: [
        'The Knick',
        'Banshee',
        'Quarry'
      ],
      backgroundColor: 'linear-gradient(159deg, rgb(17, 38, 119), rgb(47, 145, 208))'
    },
    {
      id: 3,
      imgSrc: require('./assets/images/showtime-logo.png'),
      content: [
        'Dexter',
        'Homeland',
        'Penny Dreadful'
      ],
      backgroundColor: 'linear-gradient(159deg, rgb(24, 55, 192), rgb(43, 176, 119))'
    },
    {
      id: 4,
      imgSrc: require('./assets/images/starz-logo.png'),
      content: [
        'Power',
        'American Gods',
        'Counterpart'
      ],
      backgroundColor: 'linear-gradient(164deg, rgb(23, 55, 192), rgb(171, 27, 168))'
    }
  ];
  lastIndex = this.cards.length - 1;
  
  render() {
    const {width: winWidth} = Dimensions.get('window');
    
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text h4>And even more for 5$/mo.!</Text>
          </View>
          
          <ScrollView horizontal>
            {this.cards.map((card, index) => {
              const isLast = index === this.lastIndex;
              return (
                  <Card
                      key={`card_${card.id}`}
                      containerStyle={[styles.cardContainer,
                        {
                          backgroundColor: card.backgroundColor,
                          width: winWidth / 1.6
                        },
                        isLast ? {marginRight: 0} : {}]}
                      wrapperStyle={styles.cardWrapper}>
                    <Image source={card.imgSrc}
                           style={styles.cardImage} resizeMode={'contain'}/>
                    <View>
                      {card.content.map((text, index) => (
                          <Text key={`text_${index}`}
                                style={styles.cardContent}>{text}</Text>
                      ))}
                    </View>
                    <PricePerMonth price={5} size={30} color="#fff"/>
                    <View>
                      <Button
                          backgroundColor='#fff'
                          color={theme.primaryColor}
                          buttonStyle={styles.button}
                          title='Add'/>
                    </View>
                  </Card>
              );
            })}
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: theme.panelMarginHorizontal,
    marginBottom: theme.panelMarginHorizontal
  },
  titleContainer: {
    marginBottom: 10,
    marginLeft: theme.panelMarginHorizontal,
    marginRight: theme.panelMarginHorizontal
  },
  cardContainer: {
    //width         : 220,
    height: 350,
    //margin        : 15,
    margin: 0,
    marginRight: 30,
    borderWidth: 0,
    padding: 15,
    justifyContent: 'space-evenly'
  },
  cardWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
  cardImage: {
    width: 100
  },
  button: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
    borderRadius: 50,
    width: 150
  },
  cardContent: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#fff'
  }
});
