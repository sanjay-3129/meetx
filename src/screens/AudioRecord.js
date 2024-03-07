/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Button,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Buffer} from 'buffer';
import socketIOClient from 'socket.io-client';
import {TranscriptionBox} from '../components/TranscriptionBox';

import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVModeIOSOption,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
} from 'react-native-audio-recorder-player';

import LiveAudioStream from 'react-native-live-audio-stream';
import AudioRecord1 from 'react-native-audio-record';
import {FileSystem, Dirs, ExternalDir} from 'react-native-file-access';

const ENDPOINT = 'https://15dc8e27ac767cecc064a65fe5ec9e7d.serveo.net';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';

const AudioRecord = ({navigation}) => {
  const [recording, setRecording] = useState(null);
  const [recordings, setRecordings] = useState([]);
  const [roomId, setRoomId] = useState('');
  // const [transcriptions, setTranscriptions] = useState(null);
  const [transcriptions, setTranscriptions] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [fileUri, setFileUri] = useState('');

  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);

  const socket = socketIOClient(ENDPOINT, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: Infinity,
  });

  useEffect(() => {
    let interval;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setDuration(prevDuration => prevDuration + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecording, isPaused]);

  useEffect(() => {
    return () => {
      if (recording) {
        stopRecording();
        setDuration(0); // Reset duration when recording completes
      }
    };
  }, []);

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    socket.on('connect', () => {
      setSocketConnected(true);
      console.log(socketConnected);
    });

    // Handle transcription updates
    socket.on('trans', newtrans => {
      console.log('android trans: ', newtrans);
      setTranscriptions(newtrans);
    });

    // Cleanup on component unmount
  }, [socket]); // Add socket as a dependency here

  // Use this effect to observe changes in transcriptions
  useEffect(() => {
    if (transcriptions) {
      console.log(transcriptions);
    }
  }, [transcriptions]);

  useEffect(() => {
    const getPermissions = async () => {
      if (Platform.OS === 'android') {
        console.log('yes');
        try {
          const grants = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          ]);

          console.log('write external stroage', grants);

          if (
            grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants['android.permission.READ_EXTERNAL_STORAGE'] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants['android.permission.RECORD_AUDIO'] ===
              PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log('Permissions granted');
          } else {
            console.log('All required permissions not granted');
            const permission =
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

            const hasPermission = await PermissionsAndroid.check(permission);
            if (hasPermission) {
              return true;
            } else {
              const status = await PermissionsAndroid.request(permission);
              return status === 'granted';
            }
            // return;
          }
        } catch (err) {
          console.warn(err);
          return;
        }
      }
    };

    getPermissions();
  }, []);

  // useEffect(() => {
  //   socket.emit('start-live', true);
  // }, []);

  const startRecording = async () => {
    // const audioRecorderPlayer = new AudioRecorderPlayer();
    // try {
    //   const path = `recording_${Date.now()}.aac`;
    //   const audioSet = {
    //     AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    //     AudioSourceAndroid: AudioSourceAndroidType.MIC,
    //     AVModeIOS: AVModeIOSOption.measurement,
    //     AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    //     AVNumberOfChannelsKeyIOS: 2,
    //     AVFormatIDKeyIOS: AVEncodingOption.aac,
    //   };
    //   const meteringEnabled = false;
    //   try {
    //     const uri = await audioRecorderPlayer?.startRecorder(
    //       path,
    //       audioSet,
    //       meteringEnabled,
    //     );
    //     console.log('Recording started');
    //     console.log('uri: ', uri);
    //     audioRecorderPlayer.addRecordBackListener(e => {
    //       console.log(e.isRecording, e.currentMetering, e.currentPosition);
    //     });
    //     setRecording(audioRecorderPlayer);
    //     setIsRecording(true);
    //     setDuration(0);
    //   } catch (e) {
    //     console.log('Uh-oh! Failed to start recording:', e);
    //   }
    //   // setRecording(recording);
    //   // setIsRecording(true);
    //   // setDuration(0);
    // } catch (err) {
    //   console.error('Failed to start recording', err);
    // }

    // ----------------
    // const options = {
    //   sampleRate: 32000, // default is 44100 but 32000 is adequate for accurate voice recognition
    //   channels: 1, // 1 or 2, default 1
    //   bitsPerSample: 16, // 8 or 16, default 16
    //   audioSource: 6, // android only (see below)
    //   bufferSize: 4096, // default is 2048
    // };

    // LiveAudioStream.init(options);

    const options = {
      sampleRate: 16000, // default 44100
      channels: 1, // 1 or 2, default 1
      bitsPerSample: 16, // 8 or 16, default 16
      audioSource: 6, // android only (see below)
      wavFile: 'test.wav', // default 'audio.wav'
    };

    AudioRecord1.init(options);

    // const socket1 = new WebSocket(
    //   'wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=805b5bb5a16547909b5f1ee127e9fa4a',
    // );

    // const texts = {};
    // socket1.onmessage(message => {
    //   let msg = '';
    //   const res = JSON.parse(message.data);
    //   texts[res.audio_start] = res.text;
    //   const keys = Object.keys(texts);
    //   keys.sort((a, b) => a - b);
    //   for (const key of keys) {
    //     if (texts[key]) {
    //       msg += ` ${texts[key]}`;
    //     }
    //   }

    //   console.log('mes: ', msg);
    // });

    // LiveAudioStream.on('data', data => {
    //   // base64-encoded audio data chunks
    //   var chunk = Buffer.from(data, 'base64');
    //   console.log('dataaudio: ', chunk);
    //   // socket1.send(JSON.stringify({audio_data: data}));

    //   socket.emit('live-audio', data);
    // });

    // LiveAudioStream.start();

    AudioRecord1.start();

    AudioRecord1.on('data', data => {
      // base64-encoded audio data chunks
      console.log('data: ', data);
    });

    setRecording(AudioRecord1);
    setIsRecording(true);
    setDuration(0);
  };

  const pauseRecording = async () => {
    if (recording && isRecording) {
      try {
        await recording.pauseAsync();
        setIsPaused(true);
        setIsRecording(false);
      } catch (error) {
        console.error('Failed to pause recording', error);
      }
    }
  };

  const resumeRecording = async () => {
    if (recording && isPaused) {
      try {
        await recording.startAsync();
        setIsPaused(false);
        setIsRecording(true);
      } catch (error) {
        console.error('Failed to resume recording', error);
      }
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    setIsRecording(false);
    setDuration(0);

    // await recording.stopAndUnloadAsync();

    // // Get the URI of the recorded audio
    // const uri = recording.getURI();
    // console.log('Recording stopped at', uri);

    // const result = await recording.stopRecorder();
    // recording.removeRecordBackListener();
    // console.log(result);

    // Read the audio data as base64
    // const audioBytes = await FileSystem.readAsStringAsync(uri, {
    //   encoding: FileSystem.EncodingType.Base64,
    // });
    // console.log('audioBytes: ', audioBytes);
    // socket.emit('audio', audioBytes);
    // socket.emit('disconnect-live', true);
    // LiveAudioStream.stop();

    const audioFile = await AudioRecord1.stop();
    console.log('audioFile: ', audioFile, Dirs.CacheDir);

    const audioFilePath = await FileSystem.readFile(
      Dirs.CacheDir + '/test.wav',
    );

    console.log('audioFilePath: ', audioFilePath, Dirs);

    try {
      const fileContent = await FileSystem.readFile(audioFilePath, 'utf8');
      console.log('Audio file content:', fileContent);
      // Process the file content as needed
    } catch (error) {
      console.error('Error reading audio file:', error);
    }
    // socket.emit('audio', audioBytes);
  };

  const handleRoomIdChange = id => {
    setRoomId(id);
  };

  const joinRoom = () => {
    socket.emit('joinRoom', {roomId});
  };

  const confirmStop = () => {
    Alert.alert('Stop Recording', 'Are you sure you want to stop recording?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => stopRecording(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.transcriptionContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              minWidth: '100%',
            }}>
            <Text style={styles.transcriptionText}>{transcriptions?.text}</Text>
          </ScrollView>
        </View>
      </View>

      <View style={styles.btm}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.timer}>{formatTime(duration)}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-evenly',
          }}>
          <View></View>
          <View
            style={{
              alignItems: 'center',
              gap: 5,
            }}>
            <TouchableOpacity
              onPress={
                isRecording
                  ? confirmStop
                  : isPaused
                  ? resumeRecording
                  : startRecording
              }
              style={styles.smallButton}>
              <MaterialIcons
                name={isRecording ? 'pause' : 'play-arrow'}
                size={40}
                color="red"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                fontWeight: '600',
              }}>
              {isRecording ? 'Stop' : isPaused ? 'Resume' : 'Start Recording'}
            </Text>
          </View>
          {isRecording && (
            <View>
              <TouchableOpacity
                onPress={isPaused ? resumeRecording : pauseRecording}
                style={styles.bigButton}>
                <MaterialIcons name="stop" size={40} color="red" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'center',
                  fontWeight: '600',
                }}>
                {!isPaused ? 'Pause' : 'Resume'}
              </Text>
            </View>
          )}
        </View>
      </View>
      {transcriptions && (
        <View
          style={{
            minWidth: '100%',
            padding: 10,
          }}>
          <CustomButton
            title="Summarize"
            onPress={() => {
              navigation.navigate('SummaryScreen', {transcriptions});
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  smallButton: {
    backgroundColor: '#FCD6CB',
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigButton: {
    height: 60,
    width: 60,
    backgroundColor: '#FCD6CB',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  timer: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  recordingItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  top: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100%',
  },

  btm: {
    minHeight: 100,
    minWidth: '100%',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },
  transcriptionContainer: {
    backgroundColor: '#FCD6CB',
    flex: 1,
    padding: 10,
    borderRadius: 10,
    minWidth: '100%',
    marginTop: 20,
  },
  transcriptionText: {
    color: '#000',
    fontSize: 15,
  },
});

export default AudioRecord;
