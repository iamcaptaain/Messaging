import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import SplashScreen from './Screens/SplashScreen';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ProfileScreen from './Screens/ProfileScreen';
import bottom_bar from './Screens/Bottom_bar COmponent/bottom_bar';

import EditProfileScreen from './Screens/EditProfileScreen';
import {NavigationContainer} from '@react-navigation/native';

import {DrawerContent} from './Screens/DrawerContent';

const AppStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const AppStackScreen = ({Navigation}) => (
  <NavigationContainer>
    {/* <AppStack.Navigator headerMode="none"> */}
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name="SplashScreen" component={SplashScreen} />
      <Drawer.Screen name="SignInScreen" component={SignInScreen} />
      <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      <Drawer.Screen name="bottom_bar" component={bottom_bar} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
    {/* <AppStack.Navigator
      headerMode="none"
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <AppStack.Screen name="SplashScreen" component={SplashScreen} />
      <AppStack.Screen name="SignInScreen" component={SignInScreen} />
      <AppStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <AppStack.Screen name="ChatScreen" component={ChatScreen} />
    </AppStack.Navigator> */}
    {/* </AppStack.Navigator> */}
  </NavigationContainer>
);
export default AppStackScreen;
