import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";

const screen3 = () => {
  return (
    <View style={style.container}>

            <View style={style.header}>
            <Text style={style.Text}>ข้อมูลการปบมพยาบาลเบื้องต้น</Text>
            </View>

            <View style={style.container2}>
            <Image source={require('../picture/s3.jpg')}
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
    backgroundColor: '#000080'
  },
  Text: {
    color: 'white', 
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    width: 350 ,
    height: 300,
    alignItems: 'center',
  },
})

export default screen3;