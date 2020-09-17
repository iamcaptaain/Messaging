import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  duration,
  StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handelPasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({...data, secureTextEntry: !data.secureTextEntry});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0a0b1d" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="fadeInUpBig"
          duration={1500}
          source={require('../assets/msg1.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1500}>
        {/* <Text style={styles.text_footer}>Phone Number</Text> */}

        {/* <View style={styles.action}>
          <FontAwesome name="user-o" color="#00ff62" size={20} />
          <TextInput
            placeholder="Enter Number"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#00ff62" size={20} />
            </Animatable.View>
          ) : null}
        </View> */}
        <Text style={[styles.text_footer, {marginTop: 25}]}>Enter OTP</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#00ff62" size={20} />
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handelPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#00ff62" size={20} />
            ) : (
              <Feather name="eye" color="#00ff62" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            // alignContent: 'center',
            // justifyContent: 'center',
            marginTop: 15,
            marginBottom: 15,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            // style={[
            //   styles.signIn,
            //   {borderColor: '#fff', borderWidth: 1, marginTop: 10},
            // ]}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: '#17e85d',
                flexDirection: 'row',
              }}>
              Edit Number
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => navigation.navigate('HomeScreen')}>
              <LinearGradient
                colors={['#00f279', '#00fff7']}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#fff'}]}>Get In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.23;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b1d',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
    paddingTop: 0,
  },
  footer: {
    flex: 1,
    backgroundColor: '#0a0b1d',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderWidth: 1,
    borderBottomColor: '#0a0b1d',
    borderColor: '#00ff94',
    color: '#00ff94',
  },
  text_header: {
    color: '#00ff62',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_footer: {
    color: '#00ff62',
    fontSize: 18,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00ff62',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00ff62',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#00ff62',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 7,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  textwel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 0,
    marginBottom: 15,
  },
});
