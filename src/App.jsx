import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNav from './navigation/AppNav';
import {StatusBar} from 'react-native';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';

const App = () => {
  useEffect(() => {
    const getPermission = async () => {
      requestMultiple([
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ]).then(statuses => {
        console.log(
          'WRITE_EXTERNAL_STORAGE',
          statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
        );
        console.log(
          'READ_EXTERNAL_STORAGE',
          statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
        );
      });
    };

    getPermission();
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar />
          <AppNav />
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
