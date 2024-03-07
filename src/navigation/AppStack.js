/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import CustomHeader from '../components/CustomHeader';
import {StatusBarHeight} from '../utils/StatusbarHeight';
import SideDrawer from '../components/SideDrawer';
import ScheduleMeetingScreen from '../screens/ScheduleMeetingScreen';
import AudioRecord from '../screens/AudioRecord';
import JoinMeeting from '../screens/JoinMeeting';
import CreateMeeting from '../screens/CreateMeeting';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from '../screens/ProfileScreen';
import MakeAppointment from '../screens/MakeAppointment';
import SummaryScreen from '../screens/SummaryScreen';
import MyMeetings from '../screens/tabScreens/MyMeetings';
import PricingScreen from '../screens/PricingScreen';
import MeetingLink from '../screens/MeetingLink';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const FloatingButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        // top: -25,
        zIndex: 1,
        height: 70,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e7e7e7',
        width: 70,
        overflow: 'hidden',
        borderRadius: 100,
        ...styles.shadow,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 40,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: 70, height: 70}}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const CustomNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        style={{
          backgroundColor: 'white',
        }}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 70,
            ...styles.shadow,
            borderWidth: 2,
            borderColor: '#e7e7e7',
          },
        }}>
        <Tab.Screen
          component={HomeDrawerStack}
          name="HomeDrawerStack"
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="home"
                  size={24}
                  color={focused ? icon_colors.focused : icon_colors.default}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? icon_colors.focused
                        : icon_colors.default,
                    },
                  ]}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          component={ScheduleMeetingScreen}
          name="ScheduleMeetingScreen"
          options={{
            title: 'Contact',
            tabBarLabel: 'Contact',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="calendar-month"
                  size={24}
                  color={focused ? icon_colors.focused : icon_colors.default}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? icon_colors.focused
                        : icon_colors.default,
                    },
                  ]}>
                  Schedule
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          component={AudioRecord}
          name="AudioRecord"
          options={{
            title: 'Appointment',
            tabBarLabel: 'Appointment',
            tabBarIcon: () => (
              <MaterialIcons name="mic-none" size={35} color="#F23611" />
            ),
            tabBarButton: props => <FloatingButton {...props}></FloatingButton>,
          }}
        />
        <Tab.Screen
          component={MyMeetings}
          name="MyMeetings"
          options={{
            title: 'Setting',
            tabBarLabel: 'Setting',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign
                  name="wechat"
                  size={24}
                  color={focused ? icon_colors.focused : icon_colors.default}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? icon_colors.focused
                        : icon_colors.default,
                    },
                  ]}>
                  Meetings
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          component={ProfileScreen}
          name="ProfileScreen"
          options={{
            title: 'User',
            tabBarLabel: 'User',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="settings-sharp"
                  size={24}
                  color={focused ? icon_colors.focused : icon_colors.default}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? icon_colors.focused
                        : icon_colors.default,
                    },
                  ]}>
                  Settings
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const icon_colors = {
  default: '#919191',
  focused: '#F23611',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 12,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 35,
  },
});

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const HomeDrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        drawerPosition: 'left',
        drawerStyle: {
          width: '75%',
          marginTop: StatusBarHeight,
        },
        drawerStatusBarAnimation: 'fade',
        gestureEnabled: true,
        gestureHandlerProps: true,
        gestureDirection: 'horizontal',
        swipeEdgeWidth: 300,
      }}
      drawerContent={props => <SideDrawer props={props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          header: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="ScheduleMeetingScreen"
        component={ScheduleMeetingScreen}
        options={({navigation}) => ({
          header: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="AudioRecord"
        component={AudioRecord}
        options={({navigation}) => ({
          header: () => <CustomHeader navigation={navigation} />,
        })}
      />
    </Drawer.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CustomNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="CustomNavigator"
        component={CustomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CreateMeeting"
        component={CreateMeeting}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="JoinMeeting"
        component={JoinMeeting}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PricingScreen"
        component={PricingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MeetingLink"
        component={MeetingLink}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
