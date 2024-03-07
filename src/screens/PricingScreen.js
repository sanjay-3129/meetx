import {
  View,
  Text,
  Image,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScreenHeader from '../components/ScreenHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';

const PriceItem = ({data}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        minWidth: '100%',
        minHeight: 50,
        borderRadius: 8,
        shadowColor: 'black',
        elevation: 10,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 3,
        shadowOpacity: 0.5,
        gap: 10,
        position: 'relative',
        paddingHorizontal: 30,
        paddingVertical: 22,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 9,
            borderRadius: 15,
            backgroundColor: '#F23611',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '900',
              fontSize: 16,
            }}>
            {data.type}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: 16,
            }}>
            {data.price}
          </Text>
          <View
            style={{
              borderWidth: 4,
              borderColor: '#F23611',
              height: 18,
              width: 18,
              borderRadius: 100,
            }}></View>
        </View>
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: '800',
          fontSize: 16,
          marginBottom: 10,
        }}>
        {data.title}
      </Text>
      <View
        style={{
          gap: 5,
        }}>
        {data.list.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <Octicons name="dot-fill" size={8} color="black" />
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 14,
              }}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const PricingScreen = ({navigation}) => {
  const [meetId, setMeetId] = useState();
  const handleJoinMeeting = () => {
    console.log('Joining meeting....');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader title="Plans & Pricing" type="screen" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={require('../assets/images/paid.png')}
          style={{width: '100%', padding: 20}}
        />

        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              gap: 20,
              minWidth: '100%',
            }}>
            {data.map(item => (
              <PriceItem data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const data = [
  {
    id: 1,
    type: 'Basic',
    title: 'The easiest way to try meetX',
    price: 'Free',
    list: [
      '30 minutes recording',
      'Unlimted Meeting members',
      'Prevent natural disasters',
      'Facial Recognition and Chatbots',
    ],
  },
  {
    id: 2,
    type: 'Standard',
    title: 'The easiest way to try meetX',
    price: '₹99',
    list: [
      '80 minutes recording',
      'Unlimted Meeting members',
      'Prevent natural disasters',
      'Facial Recognition and Chatbots',
    ],
  },
  {
    id: 3,
    type: 'Premium',
    title: 'Great productivity for team',
    price: '₹299',
    list: [
      '350 minutes recording',
      'Unlimted Meeting members',
      'Prevent natural disasters',
      'Facial Recognition and Chatbots',
    ],
  },
  {
    id: 4,
    type: 'Enterprise',
    title: 'Advance Control & Support for organisation',
    price: '₹999',
    list: [
      '700 minutes recording',
      'Unlimted Meeting members',
      'Prevent natural disasters',
      'Facial Recognition and Chatbots',
    ],
  },
];
export default PricingScreen;
