import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles';
import {validateEmail} from '../../utils';
import {CommonActions} from '@react-navigation/native';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import TitleComponent from '../../components/TitleComponent';

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onPressResetPassword = () => {
    // Implement email reset system
  };

  onPressRegister = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Register',
      }),
    );
  };

  onPressHelp = () => {};

  onChangeEmail(email) {
    this.setState({
      email: email.toLowerCase(),
    });
  }

  render() {
    let validInputs = validateEmail(this.state.email);
    return (
      <ContainerComponent>
        <TitleComponent/>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <Text style={styles.descriptionText}>
          Enter your email below and we will send you a link to reset your
          password
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter your email'}
          placeholderTextColor={colors.opaqueBlack}
          autoCapitalize="none"
          onChangeText={email => this.onChangeEmail(email)}
          value={this.state.email}
        />
        <ButtonComponent
          enabled={validInputs}
          onPress={this.onPressResetPassword}
          text='Reset Password'/>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.bottomContentContainer}>
          <Text style={styles.bottomText}>Don't have an account? </Text>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={this.onPressRegister}>
            <Text style={styles.bottomButtonText}>Register for free</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContentContainer}>
          <Text style={styles.bottomText}>Having trouble? </Text>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={this.onPressHelp}>
            <Text style={styles.bottomButtonText}>Get help</Text>
          </TouchableOpacity>
        </View>
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  forgotPasswordText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
    color: colors.black,
    paddingLeft: 10,
    marginVertical: 10,
  },
  descriptionText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
    paddingLeft: 10,
  },
  textInput: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
  },
  bottomContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    color: colors.black,
  },
  bottomButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    fontSize: 16,
    color: colors.mintGreen,
  },
});