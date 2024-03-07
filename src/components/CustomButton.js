import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = ({
  title,
  onPress,
  dot = false,
  arrow = false,
  style,
  ...others
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, {...style}]}
        activeOpacity={0.7}
        onPress={onPress}
        {...others}>
        {dot && <View style={styles.dot}></View>}
        <Text style={styles.text}>{title}</Text>

        {arrow && (
          <View style={styles.arrow}>
            <Ionicons name="arrow-forward-circle" size={30} color="white" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
  },
  btn: {
    minWidth: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#F23611',
    shadowColor: 'black',
    elevation: 25,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 0.5,
    gap: 10,
    position: 'relative',
    paddingHorizontal: 20,
  },
  dot: {
    borderRadius: 100,
    backgroundColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    height: 13,
    width: 13,
  },
  arrow: {
    position: 'absolute',
    right: 15,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});

export default CustomButton;
