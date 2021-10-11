import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, } from "react-native";

import { Button, ThemeProvider } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";

const screen2 = () => {
  return (
    <View style={style.container}>

            <View style={style.header}>
            <Text style={style.Text}>ติดต่อเจ้าหน้าที่</Text>
            </View>

            <View style={style.container2}>
            <Image source={require('../picture/s2.jpg')}
             style={style.image}
            /> 
            </View>

    </View>

  )
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 25,
  },
  container2: {
    flex: 1, 
    paddingTop: 50,
    alignItems: 'center'
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#339999'
  },
  Text: {
    color: 'white', 
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    alignItems: 'center',
  },
})

export default screen2;