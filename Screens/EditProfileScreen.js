import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  StatusBar,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const EditStack = createStackNavigator();

const EditProfileScreen = ({navigation}) => {
  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>

      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bst.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  bst = React.createRef();
  fall = new Animated.Value(1);

  return (
    <ScrollView style={styles.container}>
      <BottomSheet
        ref={this.bst}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />

      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.2, Animated.multiply(this.fall, 1.0)),
        }}>
        <View style={{alignContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bst.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={require('../assets/Profile/pro1.jpg')}
                size={80}
                style={{height: 120, width: 120}}
                imageStyle={{borderRadius: 60}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.6,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 50,
                      padding: 5,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Nick Kubde
          </Text>
        </View>

        <View style={{color: '#000'}}>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#000"
              // color="#000"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>

          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#000"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcon name="phone-outline" size={20} />
            <TextInput
              placeholder="Phone"
              keyboardType="number-pad"
              placeholderTextColor="#000"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcon name="email-edit-outline" size={20} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#000"
              keyboardType="email-address"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcon name="map-marker-check-outline" size={20} />
            <TextInput
              placeholder="Address"
              placeholderTextColor="#000"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.panelButtonTitle}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const EditStackScreen = ({navigation}) => (
  <EditStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <EditStack.Screen
      name="Edit-Profile"
      component={EditProfileScreen}
      options={{
        title: 'Edit Profile',

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
          <View style={{flexDirection: 'row', marginRight: 7}}>
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
              style={{paddingHorizontal: 4, marginTop: 5}}
              onPress={() => {
                navigation.navigate('Profile');
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
  </EditStack.Navigator>
);

export default EditStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',

    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    // color: '#000',
    backgroundColor: '#fff',
    color: '#333',
  },
});
