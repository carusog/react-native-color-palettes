import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { ColorPalette } from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorPaletteModal } from './screens/ColorPaletteModal';
import { StatusBar } from 'expo-status-bar';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{
            title: '🎨 Add a new color palette',
          }}
        />
      </RootStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
