import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableOpacityComponent,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

// import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
// import StarRating from '../Component/StarRating';

import ChatScreen from './ChatScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {Avatar} from 'react-native-paper';

const HomeStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'light-content'} />

      <ScrollView horizontal={true} style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryBtn]}
          onPress={() => navigation.navigate('ChatScreen', {title: 'NICK'})}>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro1.jpg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>NICK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('ChatScreen', {title: 'Ayushmaan'})
          }>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro6.jpg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Ayushmaan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryBtn]}
          onPress={() => navigation.navigate('ChatScreen', {title: 'Nancy'})}>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro2.jpg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Nancy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryBtn]}
          onPress={() => navigation.navigate('ChatScreen', {title: 'Kunal'})}>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro7.jpeg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Kunal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryBtn]}
          onPress={() => navigation.navigate('ChatScreen', {title: 'Abhinav'})}>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro5.jpg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Abhinav</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('ChatScreen', {title: 'Abhishek'})
          }>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro9.jpg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Abhishek</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryBtn]}
          onPress={() =>
            navigation.navigate('ChatScreen', {title: 'Hrishabh'})
          }>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro3.jpg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Hrishabh</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryBtn]}
          onPress={() => navigation.navigate('ChatScreen', {title: 'Laksh'})}>
          <View style={styles.categoryIcon}>
            <Image
              source={require('../assets/Profile/pro8.jpg')}
              resizeMode="cover"
              size={35}
              style={styles.bubbleImg}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Laksh</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* <View style={styles.categoryContainer}></View> */}

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 15,
            color: '#333',
            fontWeight: 'bold',
          }}>
          Recent Messages
        </Text>
        {/* <View style={styles.card}></View> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen', {title: 'NICK'})}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro1.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Nick</Text>
              <Text style={styles.cardDetails}>
                Hey! Buddy meet me 😋😋😋😋😋
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ChatScreen', {title: 'Ayushmaan'})
          }>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro6.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Ayushmaan</Text>
              <Text style={styles.cardDetails}> Let's Do it boi 😉😉😉😉</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen', {title: 'Nancy'})}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro2.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Nancy</Text>
              <Text style={styles.cardDetails}> Zoo chale kya 🤣😂🤣😂</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen', {title: 'Kunal'})}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro7.jpeg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Kunal</Text>
              <Text style={styles.cardDetails}>
                {' '}
                Movie Download karke lana 😒
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen', {title: 'Abhinav'})}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro5.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Abhinav</Text>
              <Text style={styles.cardDetails}> Nibba 😏 </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ChatScreen', {title: 'Abhishek'})
          }>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro9.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Abhishek</Text>
              <Text style={styles.cardDetails}> U There! 😎 </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ChatScreen', {title: 'Hrishabh'})
          }>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Hrishabh</Text>
              <Text style={styles.cardDetails}> Khelne aaenga 🙄</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen', {title: 'Laksh'})}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/Profile/pro8.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Laksh</Text>
              <Text style={styles.cardDetails}> kaha hai. 🤑🤑🤑</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// export default HomeScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
        // elevation: 0,
        // height: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Messaging',

        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Icon.Button
              name="md-menu"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          </View>
        ),

        headerTintColor: '#333',
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => (
          <View style={{flexDirection: 'row', marginRight: 0}}>
            <Icon.Button
              name="search-sharp"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => {
                {
                }
              }}></Icon.Button>
            <TouchableOpacity
              style={{paddingHorizontal: 8, marginTop: 5}}
              onPress={() => {
                navigation.navigate('ProfileScreen');
              }}>
              <Avatar.Image
                source={require('../assets/Profile/pro1.jpg')}
                size={35}
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <HomeStack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.title,
        headerBackTitleVisible: false,
        headerTintColor: '#333',
        headerTitleStyle: {fontWeight: 'bold'},
      })}
    />

    {/* <HomeStack.Screen
      name="CardItemDetails"
      component={CardItemDetails}
      options={({route}) => ({
        // title: route.params.title,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerTitle: false,
        headerTransparent: true,
      })}
    /> */}
  </HomeStack.Navigator>
);

export default HomeStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  // wrapper: {},

  // slide: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: 'transparent',
  //   borderRadius: 8,
  // },
  // sliderImage: {
  //   height: '100%',
  //   width: '100%',
  //   alignSelf: 'center',
  //   borderRadius: 8,
  // },
  categoryContainer: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '70%',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#76e8b7' /* '#FF6347' */,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#03befc',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#333',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 75,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 50,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 50,
  },
  bubbleImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  cardInfo: {
    flex: 3,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignSelf: 'center',
//   },
// });
