import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'white',
    flex: 1,
  },
});
