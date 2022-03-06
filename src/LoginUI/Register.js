import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import TextInput from './components/TextInput';
import axios from 'axios';

export default class LoginUI extends Component {
  state = {
    value: {email: '', password: '', name: '', phone: ''},
    error: {email: '', password: '', name: '', phone: ''},
  };

  onChangeText = (key, value) => {
    this.setState({[key]: value});
  };
  validateData = () => {
    const {email, password, name, phone} = this.state;

    if (email.trim() && password.trim() && name.trim() && phone.trim()) {
      console.log('call API');
      return true;
    }
    return false;
  };

  onSubmit = async () => {
    this.validateData();
    // try {
    //   const result = await axios({
    //     method: 'POST',
    //     url: 'http://svcy3.myclass.vn/api/Users/signup',
    //     data: {
    //       email: 'string',
    //       password: 'string',
    //       name: 'string',
    //       gender: true,
    //       phone: 'string',
    //     },
    //   });
    //   console.log(result);
    // } catch (error) {
    //   Alert.alert('Vui lòng nhập liệu');
    //   console.log(error.message);
    // }
  };

  render() {
    const {email, password, name, phone} = this.state;
    console.log(this.state);
    return (
      <SafeAreaView style={styles.container}>
        <AntIcon
          name="left"
          style={{paddingLeft: 20}}
          size={30}
          onPress={this.props.navigate}
        />
        <View style={styles.header}>
          <AntIcon style={styles.logo} name="lock" size={100} color="#6330C2" />
          <Text style={styles.headerText}>Register</Text>
        </View>
        <View style={styles.loginForm}>
          <TextInput
            title="Email"
            placeholder="email@example.com"
            value={email}
            onChangeText={value => this.onChangeText(value, 'email')}
            errorMsg="Email không được bỏ trống"
          />
          <TextInput
            title="Password"
            placeholder="*******"
            secureTextEntry
            password
            onChangeText={value => this.onChangeText(value, 'password')}
            value={password}
          />
          <TextInput
            title="Name"
            placeholder="Nguyen Van A"
            onChangeText={value => this.onChangeText(value, 'name')}
            value={name}
          />
          <TextInput
            title="Phone"
            placeholder="091-xxx-xxx"
            onChangeText={value => this.onChangeText(value, 'phone')}
            value={phone}
          />
          <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    paddingTop: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  loginForm: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
  button: {
    backgroundColor: '#6330C2',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
