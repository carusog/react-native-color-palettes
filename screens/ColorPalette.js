import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ColorBox } from '../components/ColorBox';

export const ColorPalette = ({
  route: {
    params: { palette },
  },
}) => {
  return (
    <FlatList
      style={styles.container}
      data={palette}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => {
        return (
          <ColorBox
            colorName={item.colorName}
            hexCode={item.hexCode}
            luminosity={item.luminosity}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: '800',
    marginVertical: 16,
    alignSelf: 'flex-start',
    fontSize: 16,
  },
});
