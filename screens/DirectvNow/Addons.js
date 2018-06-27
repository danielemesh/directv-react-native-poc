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
    
    //this.state = {
    //  addons: [
    //    {
    //      id: generateGuid(),
    //      price: 5,
    //      isSelected: false,
    //      image: require('../../assets/images/hbo-logo.png'),
    //      featuredPrograms: [
    //        'Game of Thrones',
    //        'Insecure',
    //        'Westworld'
    //      ],
    //      backgroundColor: 'linear-gradient(153deg, rgb(24, 55, 192), rgb(206, 73, 105))'
    //    },
    //    {
    //      id: generateGuid(),
    //      price: 5,
    //      isSelected: false,
    //      image: require('../../assets/images/cinemax-logo.png'),
    //      featuredPrograms: [
    //        'The Knick',
    //        'Banshee',
    //        'Quarry'
    //      ],
    //      backgroundColor: 'linear-gradient(159deg, rgb(17, 38, 119), rgb(47, 145, 208))'
    //    },
    //    {
    //      id: generateGuid(),
    //      price: 8,
    //      isSelected: false,
    //      image: require('../../assets/images/showtime-logo.png'),
    //      featuredPrograms: [
    //        'Dexter',
    //        'Homeland',
    //        'Penny Dreadful'
    //      ],
    //      backgroundColor: 'linear-gradient(159deg, rgb(24, 55, 192), rgb(43, 176, 119))'
    //    },
    //    {
    //      id: generateGuid(),
    //      price: 8,
    //      isSelected: false,
    //      image: require('../../assets/images/starz-logo.png'),
    //      featuredPrograms: [
    //        'Power',
    //        'American Gods',
    //        'Counterpart'
    //      ],
    //      backgroundColor: 'linear-gradient(164deg, rgb(23, 55, 192), rgb(171, 27, 168))'
    //    }
    //  ]
    //};
  }
  
  onSelectAddon(id) {
    this.props.selectAddon(id);
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
  selectAddon: (id) => dispatch(selectAddon(id))
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
