import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
// import Share from 'react-native-share';
// import files from '../assets/fileBase64';

const ProfileStack = createStackNavigator();

const ProfileScreen = ({navigation}) => {
  const myCustomShare = async () => {
    const shareOptions = {
      message:
        'Betul Store App Only For Betul, Share this App and use, I am currently Using it is reall most usefull App and it helps and make our work easy',
      url: files.appLogo,
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Avatar.Image
            source={require('../assets/Profile/pro1.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {marginTop: 15, marginBottom: 5}]}>
              Nick Kubde
            </Title>
            <Caption style={styles.caption}>+91 8827411901</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialIcons name="home-map-marker" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Betul, India</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="email-check" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            nikhilkubde21@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#3333', borderRightWidth: 1},
          ]}>
          <Title style={{color: '#000'}}> 121 $</Title>
          <Caption style={{color: '#777777'}}>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={{color: '#000'}}>3</Title>
          <Caption style={{color: '#777777'}}>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        {/* <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialIcons
              name="heart-pulse"
              color="#ed2136"
              size={25}></MaterialIcons>
            <Text style={styles.menuItemText}>Cart</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialIcons
              name="credit-card"
              color="#ed2136"
              size={25}></MaterialIcons>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <MaterialIcons
              name="share-all-outline"
              color="#ed2136"
              size={25}></MaterialIcons>
            <Text style={styles.menuItemText}>Invite Friend</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialIcons
              name="card-account-phone"
              color="#ed2136"
              size={25}></MaterialIcons>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings" color="#ed2136" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',

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
          <MaterialIcons.Button
            name="account-edit"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => {
              navigation.navigate('EditProfileScreen');
            }}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    color: '#000',
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
