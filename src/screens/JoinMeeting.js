import { View, Text, Image, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import ScreenHeader from '../components/ScreenHeader'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'

const JoinMeeting = ({navigation}) => {
    const [meetId, setMeetId] = useState();
    const handleJoinMeeting = () => {
        console.log("Joining meeting....")
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScreenHeader title="Join Meeting" type="screen" />
                <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: 'hidden' }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                    }}>
                        <Image
                            source={require('../assets/images/join-meeting.png')}
                            style={{ width: '100%', }}
                        />

                        <Text style={{
                            color: '#464646',
                            fontSize: 16,
                            textAlign: 'center',
                            paddingHorizontal: 10,
                            marginVertical: 10,
                        }}>
                            To join the meeting, enter the meeting code provided by the organiser
                        </Text>

                        <CustomInput
                            type="text"
                            placeholder="example: 2289674893A"
                            keyboardType="phone-pad"
                            value={meetId}
                            onChange={setMeetId}
                        />

                        <CustomButton
                            arrow={true}
                            title="Join Meeting"
                            // onPress={handleJoinMeeting}
                            onPress={()=>{navigation.navigate("AudioRecord")}}
                            disabled={!meetId}
                            style={{
                                backgroundColor: !meetId ? "#FFBE98" : "#F23611",
                                marginTop: 10,
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JoinMeeting