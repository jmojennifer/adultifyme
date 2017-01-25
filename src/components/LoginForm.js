import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        borderWidth={0}
      >
          Sign In
      </Button>
    );
  }

  render() {
    return (
      <View>
      <Card style={styles.customCardStyle}>
        <CardSection style={styles.loginFormCardSection1}>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection style={styles.loginFormCardSection2}>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection style={styles.loginCardSection}>
          {this.renderButton()}
        </CardSection>

        <CardSection style={styles.loginCardSection}>
          <Text style={styles.textStyle}>
            You will be logged in if your account has been created,
            and an account will be created if not.
            (Provided valid credentials are entered.)
          </Text>
        </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {
  customCardStyle: {
    backgroundColor: '#D5C2AD',
    borderWidth: 0,
    elevation: 0
  },
  errorTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#A5281A',
    marginTop: 8,
    marginBottom: 3
  },
  textStyle: {
    backgroundColor: '#D5C2AD',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 18,
    paddingBottom: 5
  },
  loginCardSection: {
    backgroundColor: '#D5C2AD',
    borderColor: '#D5C2AD',
  },
  loginFormCardSection1: {
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  loginFormCardSection2: {
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
 })(LoginForm);
