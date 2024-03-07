import {useAuth} from '../context/AuthContext';
import {StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

import CustomButton from '../components/CustomButton';
import ScreenHeader from '../components/ScreenHeader';

const OTPInput = ({code, setCode, maximumLength, setIsPinReady}) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    setIsPinReady(code.length === maximumLength);
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const boxDigit = (_, index) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    // const StyledSplitBoxes =
    //   isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
    return (
      <View
        style={{
          borderColor: '#e5e5e5',
          borderWidth: 2,
          borderRadius: 5,
          padding: 12,
          minWidth: 50,
        }}
        key={index}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'black',
          }}>
          {digit}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
        onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        style={{
          width: 300,
          borderColor: '#e5e5e5',
          borderWidth: 1,
          borderRadius: 5,
          padding: 15,
          marginTop: 50,
          color: 'black',
          opacity: 0,
          position: 'absolute',
        }}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="numeric"
      />
    </View>
  );
};

const OtpScreen = ({navigation}) => {
  const {
    info,
    phoneNumber,
    verificationId,
    handleSendVerificationCode,
    handleVerifyVerificationCode,
  } = useAuth();

  const [otpCode, setOTPCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 6;

  const [timer, setTimer] = useState(60);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      setDisabled(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOTP = () => {
    setTimer(60);
    handleSendVerificationCode();
    setDisabled(true);
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <StatusBar />
      <ScreenHeader title="Phone Verification" type="screen" />

      <View
        style={{
          flex: 1,
          minWidth: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingHorizontal: 20,
          gap: 15,
          paddingVertical: 30,
        }}>
        <View>
          <Text
            style={{
              color: '#464646',
              fontSize: 20,
              fontWeight: '900',
              textAlign: 'center',
            }}>
            Enter Your 6 Digit OTP Code
          </Text>
          {info && (
            <Text
              style={{
                color: '#464646',
                fontSize: 14,
                textAlign: 'center',
                marginTop: 5,
                marginBottom: 10,
              }}>{`OTP Has Been Sent To +91${phoneNumber}`}</Text>
          )}
        </View>

        {
          // if verification id exists show the confirm code input field.
          verificationId && (
            <View
              style={{
                gap: 25,
              }}>
              <OTPInput
                code={otpCode}
                setCode={setOTPCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady}
              />

              <TouchableOpacity
                onPress={handleResendOTP}
                disabled={disabled}
                style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: disabled ? '#464646' : '#F23611',
                  }}>
                  {disabled ? `Resend Code in ` : 'Resend Code'}
                </Text>
                {disabled && (
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: '#F23611',
                    }}>{`${timer} seconds`}</Text>
                )}
              </TouchableOpacity>

              <CustomButton
                arrow={true}
                title="Verify"
                disabled={!isPinReady}
                onPress={() => {
                  console.log('M,otpCode: ', otpCode);
                  handleVerifyVerificationCode(otpCode);
                }}
                style={{
                  backgroundColor: !isPinReady ? '#FFBE98' : '#F23611',
                  marginTop: 10,
                }}
              />
            </View>
          )
        }
      </View>
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

export default OtpScreen;
