import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCej4wwo6tswqodzw-ehUja_5MMSqaNGd4',
    authDomain: 'auth-a10c9.firebaseapp.com',
    databaseURL: 'https://auth-a10c9.firebaseio.com',
    projectId: 'auth-a10c9',
    storageBucket: 'auth-a10c9.appspot.com',
    messagingSenderId: '8567717104'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  onButtonPress() {
    return () => console.log('fuck');
  }
  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button onPress={this.onButtonPress()}>
          Log off
        </Button>
      );
    }
      return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText={'Auth'} />
        {/* <LoginForm /> */}
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
