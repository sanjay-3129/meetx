import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  StatusBar,
  Pressable,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OneMeeting = ({data}) => {
  const [openModal, setOpenModal] = useState(false);
  const onDotClick = () => {
    setOpenModal(!openModal);
  };

  const dateTime = new Date(data.createdAt);

  // Format date as "26 Aug 2023"
  const options = {day: '2-digit', month: 'short', year: 'numeric'};
  const dateFormatted = dateTime.toLocaleDateString('en-US', options);

  // Format time as "08:12 PM" (assuming 12-hour time format)
  const timeOptions = {hour: '2-digit', minute: '2-digit', hour12: true};
  const timeFormatted = dateTime.toLocaleTimeString('en-US', timeOptions);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.smallButton}>
        <MaterialIcons name="play-arrow" size={25} color="red" />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: '#464646',
            fontSize: 12,
            fontWeight: '900',
          }}>
          {data.title}
        </Text>
        <Text
          style={{
            color: '#464646',
            fontSize: 12,
          }}>
          {data?.description?.slice(0, 100)}
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <View>
          <Text
            style={{
              color: '#464646',
              fontSize: 10,
            }}>
            {dateFormatted}
          </Text>
          <Text
            style={{
              color: '#464646',
              fontSize: 10,
            }}>
            {timeFormatted}
          </Text>
        </View>
        <TouchableOpacity style={styles.dots} onPress={onDotClick}>
          <Entypo name="dots-three-vertical" size={14} color="#464646" />
        </TouchableOpacity>
      </View>

      <Modal visible={openModal} transparent>
        <StatusBar backgroundColor={openModal && 'rgba(225, 225, 225, .8)'} />
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(225, 225, 225, .8)',
            position: 'relative',
          }}
          onPress={onDotClick}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              minHeight: 200,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: 'white',
              overflow: 'hidden',
              padding: 30,
            }}>
            <View
              style={{
                width: '100%',
                boxWidth: 2,
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
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Feather name="download" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                    }}>
                    Download
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
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="microphone-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                    }}>
                    Transcribe
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
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Entypo name="share" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                    }}>
                    Share
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
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                    }}>
                    Delete
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
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 14,
    paddingRight: 8,
    paddingVertical: 15,
    elevation: 10,
    borderRadius: 5,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 0.5,
    gap: 10,
    alignItems: 'center',
  },
  smallButton: {
    backgroundColor: '#FCD6CB',
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OneMeeting;
