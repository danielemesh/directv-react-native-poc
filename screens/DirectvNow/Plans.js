import React from 'react';
import { ScrollView, StyleSheet, View, Alert, Dimensions } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { connect } from 'react-redux';

import theme from '../../theme';
import PlanCard from './PlanCard';
import PlansSummary from './PlansSummary';
import { addBasePlanToCart, removeBasePlanFromCart } from '../../redux/actions/cart';
import { changeBasePlan } from '../../redux/actions/ui';

class Plans extends React.Component {
  constructor(props) {
    super(props);
    
    this.onBasePlanCtaPress = this.onBasePlanCtaPress.bind(this);
    this.onBasePlanChange   = this.onBasePlanChange.bind(this);
  }
  
  onBasePlanCtaPress(product) {
    const {selectedBasePlanId} = this.props;
    
    // Remove current selected base plan
    if (selectedBasePlanId === product.id) {
      this.props.removeBasePlanFromCart(product);
    }
    // Change current selected base plan
    else if (selectedBasePlanId !== '') {
      const currBasePlan = this.props.basePlans.find(b => b.id === selectedBasePlanId);
      this.props.removeBasePlanFromCart(currBasePlan);
      this.props.addBasePlanToCart(product);
    }
    // Select a new base plan
    else {
      this.props.addBasePlanToCart(product);
    }
  }
  
  onBasePlanChange() {
    this.props.changeBasePlan();
  }
  
  render() {
    const {width}     = Dimensions.get('window');
    const {basePlans} = this.props;
    
    if (this.props.isBasePlansCollapsed) {
      const selectedPlan = basePlans
          .find(p => p.id === this.props.selectedBasePlanId);
      
      return <PlansSummary
          data={selectedPlan}
          onChangeHandler={this.onBasePlanChange}
      />;
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
            {basePlans.map((plan, index) => {
              const isLast = index === basePlans.length - 1;
              return (
                  <PlanCard
                      key={plan.id}
                      isSelected={this.props.selectedBasePlanId === plan.id}
                      onSelect={this.onBasePlanCtaPress}
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

const mapStateToProps = (state) => ({
  basePlans: state.products.basePlans,
  selectedBasePlanId: state.cart.products.basePlanId,
  isBasePlansCollapsed: state.ui.isBasePlansCollapsed
});

const mapDispatchToProps = (dispatch) => ({
  addBasePlanToCart: (product) => dispatch(addBasePlanToCart(product)),
  removeBasePlanFromCart: (product) => dispatch(removeBasePlanFromCart(product)),
  changeBasePlan: () => dispatch(changeBasePlan())
});

export default connect(mapStateToProps, mapDispatchToProps)(Plans);

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
