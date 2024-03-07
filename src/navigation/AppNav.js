/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useAuth} from '../context/AuthContext';
import {View, ActivityIndicator} from 'react-native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNav = () => {
  const {loading, userToken} = useAuth();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      // Check if userToken is already available (e.g., stored in AsyncStorage)
      if (userToken !== null) {
        setInitializing(false); // Set initializing state to false since we have userToken
      } else {
        setInitializing(false); // Set initializing state to false since we have userToken
      }
    };

    checkUserLoggedIn();
  }, [userToken]);

  if (loading || initializing) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If userToken exists, render AppStack (home screen)
  // Otherwise, render AuthStack (authentication screens)
  return userToken !== null ? <AppStack /> : <AuthStack />;
  // return <AppStack />;
};

export default AppNav;
