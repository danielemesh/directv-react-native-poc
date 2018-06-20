import React from 'react';
import { Body, Card, CardItem, Col, Container, Content, Footer, Grid, Header, Right, Row, Text, Thumbnail, Title, Icon, Left, Button } from 'native-base';
import { ScrollView, Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default class Plans extends React.Component {
  render() {
    return (
        <Container style={styles.container}>
          <ScrollView horizontal>
            <Card style={{width: 300, height: 400}}>
              <CardItem>
                <Body>
                <Text>Live a little</Text>
                <Title>60+ live channels</Title>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('./assets/images/panel1.png')}
                       style={{flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up"/>
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                <Button transparent>
                  <Icon active name="chatbubbles"/>
                  <Text>4 Comments</Text>
                </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
            <Card style={{width: 300, height: 400}}>
              <CardItem>
                <Body>
                <Text>Live a little</Text>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('./assets/images/panel1.png')}
                       style={{flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up"/>
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                <Button transparent>
                  <Icon active name="chatbubbles"/>
                  <Text>4 Comments</Text>
                </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
            <Card style={{width: 300, height: 400}}>
              <CardItem>
                <Body>
                <Text>Live a little</Text>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('./assets/images/panel1.png')}
                       style={{flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up"/>
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                <Button transparent>
                  <Icon active name="chatbubbles"/>
                  <Text>4 Comments</Text>
                </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
            <Card style={{width: 300, height: 400}}>
              <CardItem>
                <Body>
                <Text>Live a little</Text>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('./assets/images/panel1.png')}
                       style={{flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up"/>
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                <Button transparent>
                  <Icon active name="chatbubbles"/>
                  <Text>4 Comments</Text>
                </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </ScrollView>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});