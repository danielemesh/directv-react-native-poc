import React from 'react';
import { Picker, View } from 'react-native';
import { Text } from 'react-native-elements';

class CreditCardExpirationDate extends React.Component {
  constructor(props) {
    super(props);
    
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    
    this.state = {
      month: '',
      year: ''
    };
    
    this.months = [
      {label: '01 (Jan)', value: 1},
      {label: '02 (Feb)', value: 2},
      {label: '03 (Mar)', value: 3},
      {label: '04 (Apr)', value: 4},
      {label: '05 (May)', value: 5},
      {label: '06 (Jun)', value: 6},
      {label: '07 (Jul)', value: 7},
      {label: '08 (Aug)', value: 8},
      {label: '09 (Sep)', value: 9},
      {label: '10 (Oct)', value: 10},
      {label: '11 (Nov)', value: 11},
      {label: '12 (Dec)', value: 12},
    ];
    
    const currYear = new Date().getFullYear();
    this.years     = Array.from(Array(10)).map((item, index) => index + currYear);
  }
  
  onChangeMonth(value, index) {
    this.setState({
      month: value
    }, () => this.props.onChangeMonth(value));
  }
  
  onChangeYear(value, index) {
    this.setState({
      year: value
    }, () => this.props.onChangeYear(value));
  }
  
  render() {
    return (
        <View>
          <Text style={this.props.labelStyle}>Expiration date</Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Picker
                selectedValue={this.state.month}
                style={{flex: 1}}
                onValueChange={this.onChangeMonth}>
              {this.months.map(month => (
                  <Picker.Item key={month.value} label={month.label} value={month.value}/>
              ))}
            </Picker>
            
            <Picker
                style={{flex: 1}}
                selectedValue={this.state.year}
                onValueChange={this.onChangeYear}>
              {this.years.map(year => (
                  <Picker.Item key={year} label={year.toString()} value={year}/>
              ))}
            </Picker>
          </View>
        </View>
    );
  }
}

export default CreditCardExpirationDate;