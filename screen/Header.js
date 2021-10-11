import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#0085E6'
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen 
        name="screen1"
        component={screen1}
        options={{ title: 'screen1' }}
      />
    </Stack.Navigator>
  )
}


const App = ({navigation}) => {
  return (
    <View style={style.container}>

            <View style={style.header}>
            <Text style={style.Text}>เลือกประเภทที่ต้องการ</Text>
            </View>

            <View style={style.container2}>
            <Image source={require('./picture/home.png')}
             style={style.image}
            /> 
            </View>

            <View style={style.container3}>

                <Button 
                title = 'แจ้งเหตุ'
                onPress={() => navigation.navigate('screen1')}
                titleStyle={{
                  fontSize: 26
                }}
                buttonStyle={{
                  backgroundColor: '#FF4500'
                }}
                containerStyle={{
                  marginTop:25
                }}
              />


              <Button 
                title = 'ติดต่อเจ้าหน้าที่'
                onPress={() => this.props.navigation.navigate('screen2')}
                titleStyle={{
                  fontSize: 26
                }}
                buttonStyle={{
                  backgroundColor: '#339999'
                }}
                containerStyle={{
                  marginTop:25
                }}
              />


              <Button 
                title = 'วิธีการปฐมพยาบาลเบื้องต้น'
                onPress={() => this.props.navigation.navigate('screen3')}
                titleStyle={{
                  fontSize: 26
                }}
                buttonStyle={{
                  backgroundColor: '#000080'
                }}
                containerStyle={{
                  marginTop:25
                }}
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

export default App;