import { View, Text, Image, Pressable, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenHeader from '../../components/ScreenHeader'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
import OneMeeting from '../../components/OneMeeting'
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'

const MyMeetings = () => {
    const { url, userToken } = useAuth();

    const [pastMeetings, setPastMeetings] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getPastMeetings = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        };

        try {
            setIsLoading(true)
            const response = await axios.get(`${url}/api/meeting/getPast`, config);
            setPastMeetings(response.data.data)
        } catch (error) {
            console.error('Error:', error.response.data.error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        if (userToken) {
            getPastMeetings()
        }
    }, [userToken])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScreenHeader title="My Meetings" type="screen" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: 'hidden' }}>
                {!isLoading ?
                    <View style={{
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        gap: 10,
                    }}>
                        {pastMeetings?.map((item, index) => (
                            <OneMeeting data={item} key={index} />
                        ))}
                    </View>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size='large' />
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default MyMeetings