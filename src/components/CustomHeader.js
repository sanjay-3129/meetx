import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBarHeight} from '../utils/StatusbarHeight';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

const CustomHeader = ({title}) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
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
        <TouchableOpacity activeOpacity={0.6} onPress={openDrawer}>
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Roboto',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            meet
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Roboto',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            X
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 25,
            height: 35,
            width: 35,
            backgroundColor: 'rgba(225,225,225,.5)',
            justifyContent: 'center',
            borderRadius: 100,
            position: 'relative',
          }}>
          <FontAwesome name="bell-o" size={18} color="white" />
          {/* <View
                        style={{
                            width: 38,
                            height: 38,
                            borderRadius: 100,
                            backgroundColor: 'white',
                        }}>
                        <Image
                            source={{ uri: 'https://res.cloudinary.com/dsguoq6ad/image/upload/v1703828413/userImage/tl1fmeabrgextecwwolk.jpg' }}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover',
                                borderRadius: 100,
                            }}
                        />
                    </View> */}
          <View
            style={{
              position: 'absolute',
              top: 8,
              right: 10,
              height: 6,
              width: 6,
              borderRadius: 100,
              backgroundColor: 'red',
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
