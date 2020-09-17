import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  duration,
  StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0a0b1d" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={2000}
          source={require('../assets/msg1.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1200}>
        <Text style={styles.title}>Secret !!!!</Text>
        <Text style={styles.text}>Let's Secure Ourself</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#00f279', '#00fff7']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started </Text>
              <MaterialIcons name="chevron-right" color="#fff" size={23} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b1d',
  },
  header: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#0a0b1d',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderBottomColor: '#0a0b1d',
    borderColor: '#00ff94',
    color: '#00ff94',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#00ff94',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
