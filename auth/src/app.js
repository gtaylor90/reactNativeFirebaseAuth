import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
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
    switch (this.state.loggedIn) {
      case true:
        // button still doesn't display text, working on it
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
            label={'log off'}
          />
      );
      case false:
        return <LoginForm />;
      default:
      // add some styling to put spinner in the middle of the page
        return <Spinner size="large" />;
    }
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
