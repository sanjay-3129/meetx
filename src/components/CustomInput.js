import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Image } from 'react-native';
import { useState } from 'react';
import { neutral, primary } from '../styles';
// import { neutral, fontStyles, primary } from '../styles';

const CustomInput = ({
  title,
  placeholder,
  value,
  onChange,
  style,
  ...others
}) => {
  const handleValidation = (text) => {
    if (onChange) {
      onChange(text);
    }
  };
  return (
    <>
      <View style={[styles.inputContainer]}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={[
            styles.input,
            { ...style }
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => handleValidation(text)}
          {...others}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 17,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minWidth: '100%',
    gap: 4,
  },
  title: {
    color: '#0B0513',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '700',
  },
  input: {
    height: 40,
    minWidth: '100%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: 'black',
    fontSize: 13,
    height: 45
  },
});

export default CustomInput;
