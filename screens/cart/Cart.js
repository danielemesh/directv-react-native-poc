import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../../theme';
import ClearButton from '../../components/common/ClearButton';
import { connect } from 'react-redux';
import { navigateToScreen } from '../../redux/actions/ui';
import globals from '../../globals';
import PricePerMonth from '../../components/PricePerMonth';
import { ScreenTitle } from '../../components';
import Panel from '../../components/Panel/Panel';
import LabeledIcon from '../../components/common/LabeledIcon';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    
    this.onEditCartPress = this.onEditCartPress.bind(this);
    this.getCartItems    = this.getCartItems.bind(this);
  }
  
  onEditCartPress() {
    this.props.navigateToDirectvNow();
  }
  
  getCartItems() {
    const {products} = this.props.cart;
    let ids          = [];
    let result       = [];
    
    Object.keys(products).forEach(key => {
      if (typeof products[key] === 'string' && products[key] !== '') {
        ids.push(products[key]);
      }
      else if (Array.isArray(products[key])) {
        ids.push(...products[key]);
      }
    });
    
    ids.forEach(id => {
      Object.keys(this.props.products).forEach(category => {
        const categoryProducts = this.props.products[category];
        const cartItem         = categoryProducts.find(p => p.id === id);
        
        if (cartItem) {
          result.push(cartItem);
        }
      });
    });
    
    return result;
  }
  
  render() {
    const cartItems = this.getCartItems();
    
    return (
        <View style={styles.container}>
          <ScreenTitle title={'My Cart'}/>
          
          <Panel>
            <View style={styles.summaryHeader}>
              <LabeledIcon iconName="tv" size={20} label="DIRECTV NOW"/>
              <ClearButton title="Edit" onPress={this.onEditCartPress}/>
            </View>
            <View style={styles.cartItems}>
              {cartItems.map(product => {
                return (
                    <View key={product.id} style={styles.cartItem}>
                      <Text>{product.name}</Text>
                      <PricePerMonth price={product.price} size={20}/>
                    </View>
                );
              })}
            </View>
          </Panel>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
  navigateToDirectvNow: () => dispatch(navigateToScreen(globals.screens.DIRECTV_NOW))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1
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