import React from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { Button, PricingCard, Text } from 'react-native-elements';
import theme from './theme';

export default class Plans extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { changeSelection } = this.props;
    return (
        <View style={styles.container}>
          <View style={{marginBottom: 20}}>
            <Text h4>We’ve got you covered</Text>
            <Text>Not sure which plan is for you?</Text>
          </View>
          <View>
            <Button
                containerViewStyle={{marginLeft: 0, marginRight: 0}}
                buttonStyle={styles.button}
                title={'Compare channel lineups'}
                color={theme.primaryColor}
                onPress={() => {
                  Alert.alert('Compare Channels', 'Hi there!');
                }}
            />
            <Button
                containerViewStyle={{marginLeft: 0, marginRight: 0}}
                buttonStyle={styles.button}
                title={'Find your local and sports networks'}
                color={theme.primaryColor}
                onPress={() => {
                  Alert.alert('Local & Sports', 'Hi there!');
                }}
            />
          </View>
          
          <ScrollView horizontal>
            <PricingCard
                color={theme.primaryColor}
                title='Live a Little'
                price='$35/mo'
                info={['60+ live channels']}
                button={{title: 'Select Plan'}}
                onButtonPress={() => changeSelection()}
            />
            <PricingCard
                color={theme.primaryColor}
                title='Just Right'
                price='$50/mo'
                info={['80+ live channels']}
                button={{title: 'Select Plan'}}
                onButtonPress={() => changeSelection()}
            />
            <PricingCard
                color={theme.primaryColor}
                title='Go Big'
                price='$60/mo'
                info={['100+ live channels']}
                button={{title: 'Select Plan'}}
                onButtonPress={() => changeSelection()}
            />
            <PricingCard
                color={theme.primaryColor}
                title='Gotta Have It'
                price='$70/mo'
                info={['120+ live channels']}
                button={{title: 'Select Plan'}}
                onButtonPress={() => changeSelection()}
            />
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex        : 1,
    marginTop: 20,
    marginBottom: 20
  },
  button   : {
    marginBottom   : 20,
    backgroundColor: 'transparent',
    borderColor    : theme.primaryColor,
    borderWidth    : 2,
    borderRadius   : 20
  }
});
