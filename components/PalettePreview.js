import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const PalettePreview = ({ colorPalette, maxColors, handlePress }) => {
  const { colors, paletteName } = colorPalette;
  const colorsToDisplay = colors.slice(0, maxColors || 3);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.paletteName}>{paletteName}</Text>
      <FlatList
        style={styles.colorsWrapper}
        data={colorsToDisplay}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item: { hexCode } }) => (
          <View style={[styles.colorBox, { backgroundColor: hexCode }]}></View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paletteName: { fontWeight: '900', marginBottom: 8 },
  colorsWrapper: {
    marginBottom: 32,
    flexDirection: 'row',
  },
  colorBox: {
    width: 48,
    height: 48,
    flexDirection: 'column',
    marginRight: 8,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 10,
    borderRadius: 4,
  },
});
