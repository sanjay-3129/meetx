import {
  View,
  Text,
  Image,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import React, {useState} from 'react';
import ScreenHeader from '../components/ScreenHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const MeetingLink = ({navigation, route}) => {
  const {meetingId} = route.params;
  console.log(meetingId);

  const organizer = 'John Doe';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(meetingId);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleRecord = () => {
    navigation.navigate('AudioRecord');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader title="Create Meeting" type="screen" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          paddingVertical: 20,
        }}>
        <Image
          source={require('../assets/images/meet-link.png')}
          style={{width: '100%', padding: 20}}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              minHeight: '100%',
              paddingHorizontal: 20,
              paddingVertical: 20,
              minWidth: '100%',
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                color: '#464646',
                fontSize: 20,
                fontWeight: '900',
                textAlign: 'center',
              }}>
              Congratulations
            </Text>
            <Text
              style={{
                color: '#464646',
                fontSize: 14,
                textAlign: 'center',
                marginTop: 5,
                marginBottom: 10,
              }}>
              your meeting have been created and here is your meeting code share
              it with participant
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                marginTop: 4,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: '#464646',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                Meeting ID:
              </Text>
              <Text
                style={{
                  color: '#464646',
                  fontSize: 15,
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                {meetingId}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                marginTop: 4,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: '#F23611',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                Organizer:
              </Text>
              <Text
                style={{
                  color: '#464646',
                  fontSize: 15,
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                {organizer}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 25,
                marginTop: 4,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={copyToClipboard}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                <MaterialIcons name="content-copy" size={24} color="#F23611" />
                <Text
                  style={{
                    color: '#464646',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: '600',
                  }}>
                  Copy Code
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                <Entypo name="share" size={24} color="#F23611" />
                <Text
                  style={{
                    color: '#464646',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: '600',
                  }}>
                  Share The Code
                </Text>
              </TouchableOpacity>
            </View>
            {copied && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '100%',
                }}>
                <Text style={{color: 'green', alignItems: 'center'}}>
                  Copied to clipboard!
                </Text>
              </View>
            )}
            <CustomButton
              arrow={true}
              title="Start Recording"
              onPress={handleRecord}
              style={{
                marginTop: 40,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MeetingLink;
