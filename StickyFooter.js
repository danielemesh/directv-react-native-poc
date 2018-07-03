import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import theme from './theme';
import LabeledPrice from './components/common/LabeledPrice';

const StickyFooter = ({dueToday, dueMonthly, onCtaPress, buttonText}) => {
  return (
      <View elevation={3} style={styles.container}>
        <View style={styles.priceBar}>
          <LabeledPrice label="due today" price={dueToday}/>
          <LabeledPrice label="per month" price={dueMonthly}/>
        </View>
        <Button
            title={buttonText}
            backgroundColor={theme.primaryColor}
            containerViewStyle={{marginLeft: 0, marginRight: 0}}
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => onCtaPress()}
        />
      </View>
  );
};

const mapStateToProps = (state) => ({
  dueToday: state.cart.discounts,
  dueMonthly: state.cart.dueMonthly
});

const mapDispatchToProps = (dispatch) => ({
  //navigateToCart: () => dispatch(navigateToScreen(globals.screens.CART))
});

export default connect(mapStateToProps, mapDispatchToProps)(StickyFooter);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#fff'
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 3 },
    //shadowOpacity: 0.8,
    //shadowRadius: 2,
  },
  priceBar: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});