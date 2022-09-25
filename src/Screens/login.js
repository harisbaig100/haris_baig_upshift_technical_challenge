import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard,
  Button,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Logo from '../Helper/Logo';
import BackButton from '../Helper/BackButton';

const tempEmail = '123@gmail.com';
const tempPassword = '12345';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLoginPressed() {
    if (email === tempEmail && password === tempPassword) {
      navigation.navigate('main');
    } else {
      alert('wrong credentials');
    }
    return;
  }

  return (
    <View style={styles.mainViewStyles}>
      <Logo />
      <Text style={styles.textStyles}>Login!</Text>
      <TextInput
        style={styles.input}
        label="Email"
        returnKeyType="next"
        placeholder={tempEmail}
        value={email.value}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        label="Password"
        returnKeyType="done"
        placeholder={tempPassword}
        value={password.value}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={onLoginPressed}
        title="LOGIN">
        <Text style={styles.buttonTextStyles}>Login!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#198ace',
  },
  input: {
    height: 40,
    width: 250,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
  },
  buttonStyles: {
    height: 44,
    borderRadius: 23,
    width: 200,
    backgroundColor: '#185FA5',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyles: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  textStyles: {
    fontSize: 30,
    color: '#185FA5',
    marginVertical: 20,
  },
  mainViewStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
