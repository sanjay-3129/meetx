// const ScheduleMeetingScreen = ({ navigation }) => {
//     const [showParticipants, setShowParticipants] = useState();
//     const toggleShowParticipants = () => {
//         setShowParticipants(!showParticipants)
//     }
//     return (
//         <>
//             <ScreenHeader title="Create Meeting" type="screen" />
//             <View style={styles.mainContainer}>
//                 <View style={styles.container}>
//                     <View style={{ gap: 5 }}>
//                         <View style={{ flexDirection: 'row', gap: 5 }}>
//                             <Text style={styles.text}>Meeting ID:</Text>
//                             <Text style={styles.textBold}>2287324893A</Text>
//                         </View>
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Meeting Name"
//                             placeholderTextColor="gray"
//                             // value={value}
//                             // onChangeText={(text) => handleValidation(text)}
//                             multiline={true}
//                         />
//                     </View>
//                     <Text style={styles.textBold}>Tuesday, February 20, 2024, 04:15 PM</Text>

//                     <View style={styles.divider}></View>

//                     <TouchableOpacity
//                         onPress={toggleShowParticipants}
//                         style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
//                         <Text style={styles.textBold}>Participants</Text>
//                         <AntDesign name={showParticipants ? "caretup" : "caretdown"} size={16} color="black" />
//                     </TouchableOpacity>

//                     {showParticipants &&
//                         <View style={{ gap: 20 }}>
//                             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
//                                 <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
//                                     <FontAwesome name="user" size={22} color="black" />
//                                 </View>
//                                 <View style={{ flexDirection: 'row', gap: 5 }}>
//                                     <Text style={styles.text}>Organised by:</Text>
//                                     <Text style={styles.textBold}>Kiran Kumar</Text>
//                                 </View>
//                             </View>
//                             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
//                                 <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
//                                     <FontAwesome name="group" size={18} color="black" />
//                                 </View>
//                                 <Text style={styles.text}>20 Members joined</Text>
//                             </View>
//                         </View>
//                     }

//                     <View style={styles.divider}></View>

//                     <TouchableOpacity
//                         style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
//                         <Text style={styles.textBold}>Advanced</Text>
//                         <AntDesign name={showParticipants ? "caretup" : "caretdown"} size={16} color="black" />
//                     </TouchableOpacity>
//                 </View>

//                 <CustomButton dot={true} title="Start Meeting" onPress={() => { navigation.navigate('ScheduleMeetingScreen') }} />
//             </View>
//         </>

//     )
// }

// const styles = StyleSheet.create({
//     text: {
//         color: "black",
//         fontSize: 16
//     },
//     textBold: {
//         color: "black",
//         fontWeight: '800',
//         fontSize: 16
//     },
//     divider: {
//         height: 1,
//         borderWidth: 1,
//         borderColor: 'black'
//     },
//     mainContainer: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         backgroundColor: '#fff',
//         gap: 60,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//     },
//     container: {
//         flexDirection: 'column',
//         backgroundColor: '#fff',
//         gap: 20,
//     },

//     input: {
//         height: 100,
//         minWidth: '100%',
//         paddingVertical: 10,
//         paddingHorizontal: 16,
//         borderRadius: 8,
//         borderWidth: 2,
//         borderColor: 'black',
//         fontSize: 20
//     }
// });

import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ScreenHeader from '../components/ScreenHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ScheduleMeetingScreen = () => {
  const [meetId, setMeetId] = useState();
  const handleJoinMeeting = () => {
    console.log('Joining meeting....');
  };

  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  const handleAddName = () => {
    if (name.trim() === '') {
      return;
    }
    const id = Math.random().toString(36).substr(2, 9);
    setData([...data, {id, name}]);
    setName('');
  };

  const handleRemoveName = id => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScreenHeader title="Schedule Meeting" type="screen" />
        <ScrollView contentContainerStyle={{flexGrow: 1, overflow: 'hidden'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 40,
            }}>
            <CustomInput
              type="text"
              title="Title"
              placeholder="Give name to your meeting"
              value={meetId}
              onChange={setMeetId}
              bgColor="white"
              style={{
                borderWidth: 1,
                borderColor: '#d0d0d0',
              }}
            />

            <CustomInput
              type="text"
              title="Description"
              placeholder="Enter meeting description"
              value={meetId}
              onChange={setMeetId}
              bgColor="white"
              style={{
                borderWidth: 1,
                borderColor: '#d0d0d0',
                height: 100,
              }}
              multiline={true}
            />

            <View style={[styles.inputContainer]}>
              <Text style={styles.title}>Participants</Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <TextInput
                  style={styles.input}
                  placeholder={'placeholder'}
                  value={name}
                  onChangeText={text => setName(text)}
                />
                <TouchableOpacity
                  onPress={handleAddName}
                  activeOpacity={0.6}
                  style={{
                    height: 45,
                    width: 45,
                    borderWidth: 1,
                    borderColor: '#d0d0d0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                  }}>
                  <Entypo name="plus" size={28} color="#F23611" />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                minWidth: '100%',
                gap: 15,
                flexWrap: 'wrap',
                marginBottom: 20,
              }}>
              {data.map(item => (
                <View
                  key={item.id}
                  style={{
                    height: 45,
                    width: 'fit-content',
                    borderWidth: 1,
                    borderColor: '#d0d0d0',
                    alignItems: 'center',
                    borderRadius: 8,
                    padding: 10,
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 100,
                      backgroundColor: 'white',
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
                  <Text>{item.name}</Text>
                  <TouchableOpacity onPress={() => handleRemoveName(item.id)}>
                    <MaterialIcons name="close" size={24} color="#d0d0d0" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <CustomButton
              arrow={true}
              title="Start Meeting"
              onPress={() => {
                navigation.navigate('AudioRecord');
              }}
              disabled={!meetId}
              style={{
                backgroundColor: !meetId ? '#FFBE98' : '#F23611',
                marginTop: 10,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 17,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minWidth: '100%',
    gap: 4,
  },
  title: {
    color: '#0B0513',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '700',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: 'black',
    fontSize: 13,
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
});

export default ScheduleMeetingScreen;
