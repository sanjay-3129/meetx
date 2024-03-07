import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBarHeight} from '../utils/StatusbarHeight';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ScreenHeader = ({title, type, onPress}) => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
    if (navigation.canGoBack()) {
    } else {
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          backgroundColor: '#F55A2E',
          minWidth: '100%',
          height: 90,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: StatusBarHeight,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity activeOpacity={0.6} onPress={handleBackButtonPress}>
            {type === 'screen' && (
              <AntDesign name="arrowleft" size={26} color="white" />
            )}
            {type === 'modal' && (
              <Entypo name="circle-with-cross" size={24} color="white" />
            )}
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Roboto',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScreenHeader;
