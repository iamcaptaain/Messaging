import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
// import ToggleSwitch from 'toggle-switch-react-native';
// import {AuthContext} from '../Component/Context';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {
  useTheme,
  Avatar,
  Switch,
  Title,
  Caption,
  Text,
  Paragraph,
  Drawer,
  TouchableRipple,
  Image,
} from 'react-native-paper';

// import SignInScreen from './SignInScreen';
// import {State} from 'react-native-gesture-handler';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const toggleSwitch = () => setIsDarkTheme((previousState) => !previousState);

  // const {signOut, toggleTheme} = React.useContext(AuthContext);
  return (
    <PaperProvider>
      <View style={{...Styles.WholeSideNav, flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={Styles.drawerContent}>
            <View style={Styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Animatable.Image
                  animation="bounceIn"
                  duration={2000}
                  source={require('../assets/Profile/pro1.jpg')}
                  style={{
                    ...Styles.logo,
                    borderRadius: 50,
                    borderColor: '#f514d3',
                    borderBottomWidth: 7,
                  }}
                  // resizeMode="stretch"
                />
                <View style={{marginLeft: 19, flexDirection: 'column'}}>
                  <Title style={Styles.title}>Nick Kubde</Title>
                  <Caption style={Styles.caption}>+91 8827411901</Caption>
                </View>
              </View>
              <View style={Styles.row}>
                <View style={Styles.section}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginLeft: 25,
                      marginTop: -20,
                      color: '#000',
                      borderBottomWidth: 2,
                      borderBottomColor: 'red',
                    }}></Text>
                </View>
              </View>
            </View>
            <Drawer.Section style={Styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="shield-home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />

              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="security" color={color} size={size} />
                )}
                label="Secret Conversation"
                onPress={() => {
                  props.navigation.navigate('Details');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account-group" color={color} size={size} />
                )}
                label="Groups"
                onPress={() => {
                  props.navigation.navigate('Explore');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ion name="settings" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {
                  props.navigation.navigate('SettingsScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="card-account-phone" color={color} size={size} />
                )}
                label="Support"
                onPress={() => {
                  props.navigation.navigate('bottom_bar');
                }}
              />
            </Drawer.Section>
            {/* <Drawer.Section title="Preference">
              <TouchableRipple
              // onPress={() => {
              //   toggleTheme();
              // }}
              >
                <View style={Styles.preference}>
                  <Text>Day Theme </Text>
                  <View pointerEvents="none">
                    <Switch
                      // Alert.alert(
                      //   'Comming Soon!',
                      //   'Light Theme Is comming Soon',
                      //   [{text: 'Okay'}],
                      // );

                      value={paperTheme.dark}
                    />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section> */}
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={Styles.bottomDrawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign-Out"
            onPress={() => {
              signOut();
            }}
          />
        </Drawer.Section>
      </View>
    </PaperProvider>
  );
}

const Styles = StyleSheet.create({
  DrawerContent: {
    flex: 1,
  },
  WholeSideNav: {
    // backgroundColor: '#0a0b1d',
    color: '#6dfff8',
  },

  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    // color: '#6dfff8',
    color: '#000',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#000',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    borderTopWidth: 1,
    borderRadius: 20,
    marginTop: 0,
    borderTopColor: '#7777',
  },
  bottomDrawerSection: {
    marginBottom: 0,
    borderTopColor: '#7777',
    borderTopWidth: 1,
    borderRadius: 20,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logo: {
    width: 55,
    height: 55,
  },
});
