import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import home from "./screen/home.js"
import screen1 from "./screen/screen1.js";
import screen2 from "./screen/screen2.js";

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Orders"
          component={home}
          options={{ title: 'Orders' }}
        />
        <Stack.Screen name="screen1" component={screen1} />
        <Stack.Screen name="screen2" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 25,
  },
  container2: {
    flex: 1, 
    paddingTop: 60,
    alignItems: 'center'
  },
  container3: {
    flex: 1.5, 
    padding: 20,

  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue'
  },
  Text: {
    color: 'white', 
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 210,
    alignItems: 'center',
  },
})

