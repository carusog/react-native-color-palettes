import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { PalettePreview } from '../components/PalettePreview';

export const Home = ({ navigation, route }) => {
  const newColorPalette = route.params?.newColorPalette;
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

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes([newColorPalette, ...colorPalettes]);
    }
  }, [newColorPalette]);

  return (
    <View style={styles.home}>
      {/* <Text>
        New color palette: "
        {newColorPalette
          ? JSON.stringify(newColorPalette, null, 2)
          : String(newColorPalette)}
        "
      </Text> */}
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
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ColorPaletteModal')}
          >
            <Text style={styles.buttonText}>Add a color scheme</Text>
          </TouchableOpacity>
        }
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
  button: {
    backgroundColor: 'dodgerblue',
    marginBottom: 32,
    padding: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
