import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { PalettePreview } from '../components/PalettePreview';

export const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.home}>
      <FlatList
        data={colorPalettes}
        renderItem={({ item }) => {
          return (
            <PalettePreview
              handlePress={() => {
                navigation.navigate('ColorPalette', {
                  paletteName: item.paletteName,
                  palette: item.colors,
                });
              }}
              colorPalette={item}
              maxColors={7}
            />
          );
        }}
        keyExtractor={(item) => item.paletteName}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16,
  },
});
