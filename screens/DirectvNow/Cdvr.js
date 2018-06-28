import React from 'react';
import { Image, StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import { Badge, CheckBox, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import theme from '../../theme';
import PricePerMonth from '../../components/PricePerMonth';
import { selectCdvr } from '../../redux/actions/products';

class Cdvr extends React.Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(id) {
    this.props.selectCdvr(id);
  }
  
  render() {
    const {cdvrs, selectedCdvrId} = this.props;
    
    return (
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image resizeMode="contain"
                   style={{width: 260, height: 141}}
                   source={require('../../assets/images/IMG_stream.png')}/>
          </View>
          <View>
            <Text h4 style={styles.panelTitle}>
              Stream on more screens at the same time
            </Text>
          </View>
          
          <View style={{flex: 1}}>
            {cdvrs.map(cdvr => {
              const checked = cdvr.id === selectedCdvrId
                  || (selectedCdvrId === '' && cdvr.isIncluded);
              
              return (
                  <CdvrItem
                      key={cdvr.id}
                      cdvr={cdvr}
                      onSelect={this.onChange}
                      checked={checked}
                  />
              );
            })}
          </View>
        </View>
    );
  }
}

const CdvrItem = ({cdvr, onSelect, checked}) => {
  return (
      <TouchableNativeFeedback onPress={() => onSelect(cdvr.id)}>
        <View style={styles.streamOption}>
          <CheckBox
              title=""
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              size={40}
              containerStyle={styles.checkboxContainer}
              textStyle={{fontSize: 10}}
              checkedColor={theme.primaryColor}
              checked={checked}
              onPress={() => onSelect(cdvr.id)}
          />
          <View style={{flex: 1}}>
            <Text style={styles.label}>{cdvr.name}</Text>
            <Badge
                containerStyle={[
                  styles.badgeContainer,
                  {
                    backgroundColor: cdvr.isIncluded ?
                        theme.secondaryColor :
                        '#358026'
                  }]}>
              <Text style={styles.badgeTitle}>
                {cdvr.isIncluded ? 'INCLUDED' : 'UPGRADE'}
              </Text>
            </Badge>
            <PricePerMonth price={cdvr.price} size={30}/>
          </View>
        </View>
      </TouchableNativeFeedback>
  );
};

const mapStateToProps = (state) => ({
  cdvrs: state.products.cdvrs,
  selectedCdvrId: state.products.selectedCdvrId
});

const mapDispatchToProps = (dispatch) => ({
  selectCdvr: (id) => dispatch(selectCdvr(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cdvr);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.panelInnerPadding,
    paddingTop: 0,
    marginTop: theme.panelMarginHorizontal,
    marginBottom: theme.panelMarginHorizontal,
    marginLeft: theme.mainContentPadding,
    marginRight: theme.mainContentPadding,
    backgroundColor: theme.panelBgColor
  },
  panelTitle: {
    marginBottom: 20,
    marginTop: 20
  },
  streamOption: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 30
  },
  checkboxContainer: {
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  badgeContainer: {
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  badgeTitle: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
