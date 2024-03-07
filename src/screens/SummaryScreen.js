import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ScreenHeader from '../components/ScreenHeader';
import { useAuth } from '../context/AuthContext';

const SummaryScreen = ({ route }) => {
    const { transcriptions } = route.params;
    const {url} = useAuth();
    const [loading, setLoading] = useState(false);
    const [summary, setSummary] = useState(null);


    const fetchSummary = async () => {
        try {
            setLoading(true)
            setSummary(null)
            const response = await axios.post(`${url}/gpt-api?prompt=${transcriptions}`, {});
            if (response) {
                const data = response.data;
                let { content } = data?.response?.choices[0]?.message || {};
                setSummary(content);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        if (transcriptions) {
            fetchSummary();
        }
    }, [transcriptions]);

    return (
        <View style={styles.container}>
            <ScreenHeader title="Summary" type="screen" />
            <View style={styles.btm}>
                {loading ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
                    :
                    <View style={styles.transcriptionContainer}>
                        <Text style={styles.transcriptionText}>{summary}</Text>
                    </View>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        minWidth: '100%',
    },
    btm: {
        flex: 1,
        minWidth: '100%',
        flexDirection: 'column',
        padding: 10
    },
    transcriptionContainer: {
        backgroundColor: '#FCD6CB',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        inWidth: '100%'
    },
    transcriptionText: {
        color: "black",
        fontSize: 15,
    },
});


export default SummaryScreen;
