import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import {useAuth} from '../context/AuthContext';
import CustomButton from './CustomButton';
import UsageTimeline from './UsageTimeline';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Divider = () => {
  return (
    <View
      style={{
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        borderTopColor: '#e7e7e7',
        borderTopWidth: 1,
      }}></View>
  );
};

const SideDrawer = ({props}) => {
  const {state, navigation, descriptors} = props;
  const {userToken} = useAuth();
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const goTo = link => {
    navigation.navigate(link);
  };
  const {logout} = useAuth();

  return (
    <View style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 15,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          height: 40,
        }}>
        <TouchableOpacity activeOpacity={0.6} onPress={closeDrawer}>
          <AntDesign name="arrowright" size={24} color="#F23611" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{
            padding: 18,
            gap: 30,
            marginBottom: 40,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                backgroundColor: 'white',
                marginBottom: 5,
              }}>
              <Image
                source={{
                  uri: 'https://res.cloudinary.com/dsguoq6ad/image/upload/v1703828413/userImage/tl1fmeabrgextecwwolk.jpg',
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderRadius: 100,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Akshay Jangra
            </Text>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
              }}>
              akshayjangra225@gmail.com
            </Text>
          </View>

          <View
            style={{
              width: '100%',
            }}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 14,
                paddingVertical: 14,
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="home" size={26} color="black" />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  Home
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FCD6CB',
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={18}
                  color="#F23611"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 14,
                paddingVertical: 14,
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome name="bell" size={24} color="black" />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  Notifications
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FCD6CB',
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={18}
                  color="#F23611"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 14,
                paddingVertical: 14,
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="shield-checkmark" size={24} color="black" />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  Privacy Policy
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FCD6CB',
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={18}
                  color="#F23611"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 14,
                paddingVertical: 14,
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="wechat" size={24} color="black" />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  My Meetings
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FCD6CB',
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={18}
                  color="#F23611"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 14,
                paddingVertical: 14,
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="text-box-check"
                  size={24}
                  color="black"
                />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  Legal Information
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FCD6CB',
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={18}
                  color="#F23611"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#F55A2E',
              minWidth: '100%',
              borderRadius: 15,
              paddingVertical: 20,
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
            }}>
            <UsageTimeline usageData={10} totalHours={100} />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                goTo('PricingScreen');
              }}
              style={{
                borderWidth: 2,
                borderColor: '#d0d0d0',
                alignItems: 'center',
                borderRadius: 5,
                padding: 10,
                flexDirection: 'row',
                gap: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '800',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Upgrade My Plan
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton title="Log Out" onPress={logout} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    height: 40,
    borderRadius: 15,
  },
});

export default SideDrawer;
