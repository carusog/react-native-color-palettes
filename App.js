import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log('🪲', '🐞');
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <View style={[styles.cyan, styles.color]}>
          <Text style={styles.colorText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.blue, styles.color]}>
          <Text style={styles.colorText}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.magenta, styles.color]}>
          <Text style={styles.colorText}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.orange, styles.color]}>
          <Text style={styles.colorText}>Orange: #cb4b16</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    marginVertical: 16,
    alignSelf: 'flex-start',
    fontSize: 16,
  },
  color: {
    width: '100%',
    marginBottom: 8,
    padding: 10,
    borderRadius: 4,
  },
  colorText: {
    color: 'white',
    textAlign: 'center',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  safeArea: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});
