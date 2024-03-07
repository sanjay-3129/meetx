import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useAuth} from '../context/AuthContext';
import CustomButton from '../components/CustomButton';
import UsageTimeline from '../components/UsageTimeline';
import AntDesign from 'react-native-vector-icons/AntDesign';

import OneMeeting from '../components/OneMeeting';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const {url, userToken, logout} = useAuth();
  const {width} = useWindowDimensions();

  const boxWidth = width / 3;

  const [pastMeetings, setPastMeetings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPastMeetings = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.get(`${url}/api/meeting/getPast`, config);
      setPastMeetings(response.data.data);
    } catch (error) {
      console.error('Error:', error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userToken) {
      getPastMeetings();
    }
  }, [userToken]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          paddingVertical: 40,
          justifyContent: 'center',
          minWidth: width,
          borderBottomColor: '#e7e7e7',
          borderBottomWidth: 1,
          paddingHorizontal: 20,
        }}>
        {items.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            onPress={() => {
              item.title === 'Schedule Meeting'
                ? navigation.navigate('CustomNavigator', {
                    screen: 'ScheduleMeetingScreen',
                  })
                : navigation.navigate(item.link);
            }}
            style={{
              // height: 100,
              width: '30%',
              aspectRatio: 1,
              borderRadius: 20,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              gap: 3,
              elevation: 10,
              shadowOffset: {width: 1, height: 1},
              shadowRadius: 3,
              shadowOpacity: 0.5,
              backgroundColor: 'white',
            }}>
            <Image source={item.image} resizeMode="cover" />
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                fontWeight: '800',
                color: '#000',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '100%',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          Meeting history
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyMeetings');
          }}
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#F23611',
              fontSize: 16,
              fontWeight: '500',
            }}>
            See All
          </Text>
          <AntDesign name="arrowright" size={24} color="#F23611" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1, overflow: 'hidden'}}>
        {!isLoading ? (
          <View
            style={{
              paddingHorizontal: 20,
              gap: 10,
              minWidth: '100%',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            {pastMeetings?.map((item, index) => (
              <OneMeeting data={item} key={index} />
            ))}
          </View>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
});

const items = [
  {
    title: 'Start New Meeting',
    image: require('../assets/images/home-1.png'),
    link: 'CreateMeeting',
  },
  {
    title: 'Join the Meeting',
    image: require('../assets/images/home-2.png'),
    link: 'JoinMeeting',
  },
  {
    title: 'Schedule Meeting',
    image: require('../assets/images/home-3.png'),
    link: `{}`,
  },
];
export default HomeScreen;
