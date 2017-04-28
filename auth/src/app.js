import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
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
          <CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}
              label={'log off'}
            />
          </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
      // add some styling to put spinner in the middle of the page
        return (
          <View style={styles.spinnerContStyle}>
            <Spinner size="large" />
          </View>

        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Auth'} />
          {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50
  }
};

export default App;
