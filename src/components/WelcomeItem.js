import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { black, neutral } from '../styles';
import { SvgXml } from 'react-native-svg';

const WelcomeItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const width_i = width * 0.8;
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width: width_i, resizeMode: 'contain' }]} />
      {/* <SvgXml xml={item.image} width={width} height={height} />       */}
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={[styles.itemDesc]}>{item.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: .6,
    justifyContent: 'center',
    width: '100%'
  },
  itemTitle: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '800',
    marginBottom: 4
  },
  itemDesc: {
    color: '#25343C',
    fontFamily: 'Roboto',
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    fontWeight: '500'
  }
});

export default WelcomeItem;