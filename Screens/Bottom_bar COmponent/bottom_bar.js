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

export default class bottomScreen extends React.Component<AppProps> {
  render() {
    return (
      <View style={styles.container}>
        {/* <Tabbar /> */}
        <Text>NICK</Text>
      </View>
    );
  }
}

// export default bottomScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
