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
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ScreenHeader from '../components/ScreenHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {useAuth} from '../context/AuthContext';

const CreateMeeting = ({navigation}) => {
  const {url, userToken} = useAuth();
  const [meetId, setMeetId] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

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
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${url}/api/meeting/create`,
        {
          title: title,
          description: desc,
        },
        config,
      );
      console.log(response.data);
      if (response.data.status === 'Success') {
        console.log('Created Meeting:', response.data.data);
        const meetingId = response.data.data._id;
        navigation.navigate('MeetingLink', {meetingId});
      }
    } catch (error) {
      console.error('Error:', error.response.data.error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScreenHeader title="Create Meeting" type="screen" />
        <ScrollView contentContainerStyle={{flexGrow: 1, overflow: 'hidden'}}>
          {!isLoading ? (
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
                keyboardType="text"
                value={title}
                onChange={setTitle}
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
                keyboardType="text"
                value={desc}
                onChange={setDesc}
                bgColor="white"
                style={{
                  borderWidth: 1,
                  borderColor: '#d0d0d0',
                  height: 100,
                }}
                multiline={true}
              />

              {/* <View style={[styles.inputContainer]}>
                            <Text style={styles.title}>Participants</Text>
                            <View style={{
                                flexDirection: 'row',
                                gap: 10
                            }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'placeholder'}
                                    value={name}
                                    onChangeText={text => setName(text)}
                                />
                                <TouchableOpacity
                                    onPress={handleAddName}
                                    activeOpacity={.6}
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
                        </View> */}

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
                title="Create Meeting"
                onPress={handleCreate}
                disabled={!title}
                style={{
                  backgroundColor: !title ? '#FFBE98' : '#F23611',
                  marginTop: 10,
                }}
              />
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" />
            </View>
          )}
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

export default CreateMeeting;
