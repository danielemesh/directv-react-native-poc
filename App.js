import React from 'react';
import { Col, Container, Content, Footer, Grid, Header, Row, Text, Title } from 'native-base';
import { ScrollView } from 'react-native';
import Plans from './Plans';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fontsLoaded: false
    };
  }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto'       : require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    
    this.setState({fontsLoaded: true});
  }
  
  render() {
    return (
        this.state.fontsLoaded &&
        
        <Container>
          <Header>
            <Title>AT&T</Title>
          </Header>
          <Content>
            <ScrollView>
              <Plans/>
            </ScrollView>
          </Content>
          <Footer><Text>This is the footer</Text></Footer>
        </Container>
    );
  }
}