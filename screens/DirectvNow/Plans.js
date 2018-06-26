import React from 'react';
import { ScrollView, StyleSheet, View, Alert, Dimensions } from 'react-native';
import { Button, Text } from 'react-native-elements';
import theme from '../../theme';
import PlanCard from './PlanCard';
import { generateGuid } from '../../utils';
import PlansSummary from './PlansSummary';

export default class Plans extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSelectPlan = this.onSelectPlan.bind(this);
    this.onPlanChange = this.onPlanChange.bind(this);
    
    this.state = {
      isSummaryView: false,
      selectedPlanId: '',
      plans: [
        {
          id: generateGuid(),
          name: 'LIVE A LITTLE',
          details: '60+ live channels',
          image: require('../../assets/images/logos-live-a-little.png'),
          price: 35
        }, {
          id: generateGuid(),
          name: 'JUST RIGHT',
          details: '80+ live channels',
          image: require('../../assets/images/logos-just-right.png'),
          price: 50
        }, {
          id: generateGuid(),
          name: 'GO BIG',
          details: '100+ live channels',
          image: require('../../assets/images/logos-go-big.png'),
          price: 60
        }, {
          id: generateGuid(),
          name: 'GOTTA HAVE IT',
          details: '120+ live channels',
          image: require('../../assets/images/logos-gotta-have-it.png'),
          price: 70
        }
      ]
    };
  }
  
  onSelectPlan(id) {
    const currentSelectedPlanId = this.state.selectedPlanId;
    
    if (currentSelectedPlanId === id) {
      this.setState({selectedPlanId: '', isSummaryView: false});
    }
    else {
      this.setState({selectedPlanId: id, isSummaryView: true});
    }
  }
  
  onPlanChange() {
    this.setState({isSummaryView: false});
  }
  
  render() {
    const {width} = Dimensions.get('window');
    if (this.state.isSummaryView) {
      const selectedPlan = this.state.plans.find(p => p.id === this.state.selectedPlanId);
      
      return <PlansSummary data={selectedPlan} onChangeHandler={this.onPlanChange}/>
    }
    
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={{marginBottom: theme.panelInnerMargin}}>
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
          </View>
          
          <ScrollView horizontal>
            {this.state.plans.map((plan, index) => {
              const isLast = index === this.state.plans.length - 1;
              return (
                  <PlanCard
                      key={plan.id}
                      isSelected={this.state.selectedPlanId === plan.id}
                      onSelect={this.onSelectPlan}
                      plan={plan}
                      width={width / 1.6}
                      containerStyle={isLast ? {marginRight: 0} : {}}
                  />
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
  headerContainer: {
    marginBottom: theme.panelInnerMargin,
    paddingLeft: theme.panelInnerPadding,
    paddingRight: theme.panelInnerPadding
  },
  button: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderColor: theme.primaryColor,
    borderWidth: 2,
    borderRadius: 20
  }
});
