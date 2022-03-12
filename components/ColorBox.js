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
    <View style={[styles.colorBox, boxColor]}>
      <Text style={[styles.colorText, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: 'auto',
    marginBottom: 8,
    padding: 10,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 10,
  },
  colorText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
