import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureText={false}
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder={'name@email.com'}
          />
        </CardSection>
        <CardSection>
          <Input
            secureText
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder={'password'}
          />
        </CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
