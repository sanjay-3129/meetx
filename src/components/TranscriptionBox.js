import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TranscriptionBox = ({ transcription, fileUri }) => {
    return (
        <View style={styles.transcriptionBox}>
            <Text style={styles.transcriptionText}>{transcription}</Text>
            {fileUri && (
                <Text style={styles.fileUriText}>Recording saved at: {fileUri}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    transcriptionBox: {
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    transcriptionText: {
        color: "#000",
        textAlign: 'center',
        marginBottom: 10,
    },
    fileUriText: {
        color: "#666",
        fontSize: 12,
        textAlign: 'center',
    },
    // Other styles removed for brevity
});
