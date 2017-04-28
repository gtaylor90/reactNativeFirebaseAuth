import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCej4wwo6tswqodzw-ehUja_5MMSqaNGd4',
    authDomain: 'auth-a10c9.firebaseapp.com',
    databaseURL: 'https://auth-a10c9.firebaseio.com',
    projectId: 'auth-a10c9',
    storageBucket: 'auth-a10c9.appspot.com',
    messagingSenderId: '8567717104'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
