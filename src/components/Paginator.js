import React from 'react';
import { View, Animated, useWindowDimensions, StyleSheet } from 'react-native';
import { primary } from '../styles';

const Paginator = ({data, scrollX }) => {
    const {width} = useWindowDimensions();
    return (
        <View style={{flexDirection:'row', height:64}}>
        {data.map((_,i)=>{
            const inputRange = [(i-1)*width, i*width, (i+1)*width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 25, 10],
                extrapolate:'clamp',
            });
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate:'clamp',
            })
            return <Animated.View style={[styles.dot, {width:dotWidth, opacity}]} key={i.toString()}/>
        })}
        </View>
    );
};

const styles = StyleSheet.create({
  dot:{
    height:10,
    borderRadius:5,
    backgroundColor: 'red',
    marginHorizontal:8,
  }
});

export default Paginator;