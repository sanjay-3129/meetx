import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
// import app from '../config/firebase';
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   query,
//   where,
// } from 'firebase/firestore';
// import {getAuth, PhoneAuthProvider, signInWithCredential} from 'firebase/auth';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  //   const url = "http://10.5.50.101:3000";
  const url = 'https://15dc8e27ac767cecc064a65fe5ec9e7d.serveo.net';
  const navigation = useNavigation();
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationID] = useState('');
  const [confirm, setConfirm] = useState(null);
  const recaptchaVerifier = useRef(null);
  // const auth = getAuth(app);
  // const firestore = getFirestore(app);

  // const firebaseConfig = app ? app.options : undefined;
  const attemptInvisibleVerification = false;

  const handleSendVerificationCode = async () => {
    console.log('handlesend');
    try {
      // const phoneProvider = new PhoneAuthProvider(auth); // initialize the phone provider.
      // const verificationId = await phoneProvider.verifyPhoneNumber(
      //   `+91${phoneNumber}`,
      //   recaptchaVerifier.current,
      // ); // get the verification id
      // setVerificationID(verificationId);
      // console.log(verificationId);

      // setInfo(`OTP Has Been Sent To +91${phoneNumber}`);
      // await AsyncStorage.setItem("userToken", verificationId);
      const confirmation = await auth().signInWithPhoneNumber(
        `+91${phoneNumber}`,
      );
      // console.log('confirmation: ', confirmation, confirmation.verificationId);
      setVerificationID(confirmation.verificationId);
      setConfirm(confirmation);
      navigation.navigate('OtpScreen');
    } catch (error) {
      setInfo(`Error : ${error.message}`);
    }
  };

  const login = async () => {
    try {
      console.log('url', url);
      const response = await axios.post(`${url}/api/user/login`, {
        verificationId,
        phoneNumber,
      });
      // console.log("response: ", response);
      if (response.data.status === 'Success') {
        console.log('Token:', response.data.token);
        await AsyncStorage.setItem('userToken', response.data.token);
        isLoggedIn();
      }
    } catch (error) {
      console.error('Error:', error.response.data.message);
      // Handle error, display error message or perform appropriate action
    }
  };

  const handleVerifyVerificationCode = async otpCode => {
    console.log('otp: ', otpCode);
    try {
      // const credential = PhoneAuthProvider.credential(verificationId, otpCode); // get the credential
      // console.log('cred: ', credential);
      // const check = await signInWithCredential(auth, credential); // verify the credential
      // console.log('signInWithCredential done', check.user);
      const result = await confirm.confirm(otpCode);
      console.log('result: ', result);
      setInfo('Phone authentication successful');
      login();
    } catch (error) {
      setInfo(`Error : ${error.message}`);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Your logout logic here
      // Example:
      // await axios.post(API_URL + '/logout');
      setUserToken(null);
      await AsyncStorage.multiRemove(['userId', 'userInfo', 'userToken']);
      setLoading(false);
    } catch (error) {
      console.error('Error logging out:', error);
      setLoading(false);
    }
  };

  const isLoggedIn = async () => {
    setLoading(true);
    try {
      let userToken = await AsyncStorage.getItem('userToken');
      console.log(userToken);
      if (userToken) {
        setUserToken(userToken);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const addUserToFirestore = async (name, email) => {
    try {
      const res = await addDoc(collection(firestore, 'users'), {
        name: name,
        email: email,
      });
      console.log('User added to Firestore', res);
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
    }
  };

  const getUsersFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'users'));
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.error('Error getting users from Firestore:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        info,
        verificationId,
        recaptchaVerifier,
        handleSendVerificationCode,
        handleVerifyVerificationCode,
        logout,
        loading,
        userToken,
        isLoggedIn,
        addUserToFirestore,
        getUsersFromFirestore,
        url,
        confirm,
        setConfirm,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
