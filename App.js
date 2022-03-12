import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { ColorBox } from './components/ColorBox';
import { NavigationContainer } from '@react-navigation/native';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          style={styles.container}
          data={COLORS}
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
          ListHeaderComponent={<Text style={styles.title}>Solarized</Text>}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    marginVertical: 16,
    alignSelf: 'flex-start',
    fontSize: 16,
  },
  safeArea: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
