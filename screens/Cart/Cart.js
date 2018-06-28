import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import theme from '../../theme';
import ClearButton from '../../components/common/ClearButton';
import { connect } from 'react-redux';
import { navigateToScreen } from '../../redux/actions/ui';
import globals from '../../globals';
import PricePerMonth from '../../components/PricePerMonth';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    
    this.onEditCartPress = this.onEditCartPress.bind(this);
  }
  
  onEditCartPress() {
    this.props.navigateToDirectvNow();
  }
  
  render() {
    console.log('products: ', this.props.cart.products);
    return (
        <View style={styles.container}>
          <Text h1 style={styles.title}>My Cart</Text>
          
          <View style={styles.panelContainer}>
            <View style={styles.summaryHeader}>
              <View style={styles.summaryHeaderTitle}>
                <Icon type="font-awesome" name="tv"
                      size={20}
                      raised
                      color={theme.primaryColor} reverse/>
                <Text h4>DIRECTV NOW</Text>
              </View>
              <ClearButton title="Edit" onPress={this.onEditCartPress}/>
            </View>
            <View style={styles.cartItems}>
              {this.props.cart.products.map(product => {
                return (
                    <View key={product.id} style={styles.cartItem}>
                      <Text>{product.name}</Text>
                      <PricePerMonth price={product.price} size={20} />
                    </View>
                );
              })}
            </View>
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  navigateToDirectvNow: () => dispatch(navigateToScreen(globals.screens.DIRECTV_NOW))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 30,
    marginBottom: 30
  },
  panelContainer: {
    padding: theme.panelInnerPadding,
    backgroundColor: theme.panelBgColor
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.panelInnerMargin
  },
  summaryHeaderTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartItems: {},
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.panelInnerMargin
  }
});