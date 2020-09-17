import React from 'react';
import {
  View,
  ScrollView,
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
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {ActivityIndicator} from 'react-native-paper';
import app from '../App';
// import Users from '../Model/users';

import {useTheme} from 'react-native-paper';

// import {AuthContext} from '../Component/Context';

const SignInScreen = ({navigation}) => {
  // const [data, setData] = React.useState({
  //   username: '',
  //   password: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   isValidUser: true,
  //   isValidPassword: true,
  // });

  // const {colors} = useTheme();

  // const {signIn} = React.useContext(AuthContext);

  // const textInputChange = (val) => {
  //   if (val.trim().length >= 10) {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_textInputChange: true,
  //       isValidUser: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_textInputChange: false,
  //       isValidUser: false,
  //     });
  //   }
  // };

  // const handelPasswordChange = (val) => {
  //   if (val.trim().length >= 8) {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: true,
  //     });
  //   } else {
  //     setData({...data, password: false, isValidPassword: false});
  //   }
  // };

  // const handelValidUser = (val) => {
  //   if (val.trim().length >= 10) {
  //     setData({
  //       ...data,
  //       isValidUser: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       isValidUser: false,
  //     });
  //   }
  // };

  // const updateSecureTextEntry = () => {
  //   setData({...data, secureTextEntry: !data.secureTextEntry});
  // };

  // const loginHandel = (userName, password) => {
  //   const foundUser = Users.filter((item) => {
  //     return userName == item.username && password == item.password;
  //   });

  //   if (data.username.length == 0 || data.password.length == 0) {
  //     Alert.alert(
  //       'Empty Input!',
  //       'Phone Number or password field cannot be empty.',
  //       [{text: 'Okay'}],
  //     );
  //     return;
  //   }

  //   if (foundUser.length == 0) {
  //     Alert.alert('Invalid User!', 'Phone Number or password is incorrect.', [
  //       {text: 'Okay'},
  //     ]);
  //     return;
  //   }
  //   signIn(foundUser);
  // };

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
        <Text style={styles.text_footer}>Phone Number</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#00ff62" size={20} />
          <TextInput
            placeholder="Enter Number"
            style={styles.textInput}
            autoCapitalize="none"
            keyboardType="number-pad"
            onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e) => handelValidUser(e.nativeEvent.text)}
          />
          {/* {data.check_textInputChange ? ( */}
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#00ff62" size={20} />
          </Animatable.View>
          {/* ) : null} */}
        </View>
        {/* {data.isValidUser ? null : ( */}
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Please Enter Valid Phone Number.</Text>
        </Animatable.View>
        {/* )} */}
        {/* <Text style={[styles.text_footer, {marginTop: 25}]}>Password</Text> */}
        {/* <View style={styles.action}>
          <Feather name="lock" color="#00ff62" size={20} />
          <TextInput
            placeholder="Enter Password"
            // secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handelPasswordChange(val)}
          /> */}
        {/* <TouchableOpacity onPress={updateSecureTextEntry}> */}
        {/* <TouchableOpacity onPress={() => {}}> */}
        {/* {data.secureTextEntry ? ( */}
        {/* <Feather name="eye-off" color="#00ff62" size={20} /> */}
        {/* ) : ( */}
        {/* <Feather name="eye" color="#00ff62" size={20} /> */}
        {/* )} */}
        {/* </TouchableOpacity> */}
        {/* </View> */}
        {/* {data.isValidPassword ? null : ( */}
        {/* <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Please Enter 8 charcters long password.
          </Text>
        </Animatable.View> */}
        {/* )} */}
        {/* <View>
          <TouchableOpacity>
            <Text style={{color: '#17e85d', marginTop: 2}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View> */}

        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#17e85d',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            By signing up you agree to our
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#17e85d',
                flexDirection: 'row',
              }}>
              {' '}
              Terms of service
            </Text>
            <Text style={{color: '#17e85d'}}> and</Text>
            <Text style={{fontWeight: 'bold', color: '#17e85d'}}>
              {' '}
              Privacy policy
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => navigation.navigate('SignUpScreen')}>
              <LinearGradient
                colors={['#00f279', '#00fff7']}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#000'}]}>
                  Enter OTP
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

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
    marginTop: 30,
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
