import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

import CustomInput from '../components/CustomInput';
// import app from '../config/firebase';
import CustomButton from '../components/CustomButton';
import {useAuth} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {phoneNumber, setPhoneNumber, handleSendVerificationCode} = useAuth();

  const isValidPhoneNumber = number => {
    return /^\d{10}$/.test(number);
  };
  const phoneNumberValid = isValidPhoneNumber(phoneNumber);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <StatusBar />
      <ScrollView contentContainerStyle={{flexGrow: 1, overflow: 'hidden'}}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              minWidth: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              gap: 10,
            }}>
            <Image source={require('../assets/images/login.png')} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#F23611',
                  fontFamily: 'Roboto',
                  fontSize: 38,
                  fontWeight: 'bold',
                }}>
                meet
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: 38,
                  fontWeight: 'bold',
                }}>
                X
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              minWidth: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              paddingVertical: 20,
              gap: 10,
              backfaceVisibility: '#FFFFFF',
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderWidth: 2,
              borderColor: '#e7e7e7',
            }}>
            <View>
              {/* <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
              /> */}
              {/* show the phone number input field when verification id is not set. */}
              <View>
                <Text
                  style={{
                    color: '#464646',
                    fontSize: 20,
                    fontWeight: '900',
                    textAlign: 'center',
                  }}>
                  Enter Your Phone Number
                </Text>
                <Text
                  style={{
                    color: '#464646',
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 5,
                    marginBottom: 10,
                  }}>
                  we will send verification code to your phone
                </Text>

                <CustomInput
                  type="text"
                  placeholder="Enter your number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  style={{
                    borderWidth: 1,
                    borderColor: '#d0d0d0',
                  }}
                />

                <CustomButton
                  arrow={true}
                  title="Continue"
                  onPress={() => handleSendVerificationCode()}
                  disabled={!phoneNumberValid}
                  style={{
                    backgroundColor: !phoneNumberValid ? '#FFBE98' : '#F23611',
                  }}
                />
              </View>

              {/* {attemptInvisibleVerification && <FirebaseRecaptchaBanner />} */}

              <Text
                style={{
                  color: '#464646',
                  fontFamily: 'Roboto',
                  fontSize: 11,
                  textAlign: 'center',
                  marginTop: 40,
                }}>
                By creating an account, you agree to our{' '}
              </Text>
              <Text
                style={{
                  color: '#464646',
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Terms of Service and Privacy Policy{' '}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
