import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Svg, Rect } from 'react-native-svg';

const UsageTimeline = ({ usageData = 0, totalHours = 24 }) => {
    // Total width for the timeline
    const totalWidth = 100;

    // Calculate the width of the block based on usage
    const usageWidth = (usageData / totalHours) * totalWidth;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{usageData}min used out of {totalHours}hrs</Text>
            <View style={styles.lineContainer}>
                <Svg height="8" width="100%">
                    <Rect x="0" y="0" width={`${totalWidth}%`} height="8" fill="rgba(225,225,225,.5)" />
                    <Rect x="0" y="0" width={`${usageWidth}%`} height="8" rx="4" fill="white" />
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 8,
        minWidth: '100%'
    },
    lineContainer: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    text: {
        color: "white",
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center'
    },
});

export default UsageTimeline