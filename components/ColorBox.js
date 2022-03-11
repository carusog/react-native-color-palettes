import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ColorBox = ({ colorName, hexCode, luminosity }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.color, boxColor]}>
      <Text style={[styles.colorText, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    width: 'auto',
    marginBottom: 8,
    padding: 10,
    borderRadius: 4,
  },
  colorText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
