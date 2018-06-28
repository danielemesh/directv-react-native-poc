import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../../theme';
import { connect } from 'react-redux';

import AddonCard from './AddonCard';
import { selectAddon } from '../../redux/actions/products';

class Addons extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSelectAddon = this.onSelectAddon.bind(this);
  }
  
  onSelectAddon(product) {
    this.props.selectAddon(product);
  }
  
  render() {
    const {width} = Dimensions.get('window');
    const { addons } = this.props;
    
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text h4>Add even more fun from $5/mo.!</Text>
          </View>
          
          <ScrollView horizontal>
            {addons.map((addon, index) => {
              const isLast = index === addons.length - 1;
              
              return (
                  <AddonCard
                      key={addon.id}
                      isSelected={addon.isSelected}
                      onSelect={this.onSelectAddon}
                      addon={addon}
                      width={width / 1.6}
                      containerStyle={isLast ? {marginRight: 0} : {}}/>
              );
            })}
          </ScrollView>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  addons: state.products.addons
});

const mapDispatchToProps = (dispatch) => ({
  selectAddon: (product) => dispatch(selectAddon(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Addons);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: theme.panelMarginHorizontal,
    marginBottom: theme.panelMarginHorizontal
  },
  titleContainer: {
    marginBottom: theme.panelInnerMargin,
    marginLeft: theme.panelMarginHorizontal,
    marginRight: theme.panelMarginHorizontal
  },
  button: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
    borderRadius: 50,
    width: 150
  }
});
