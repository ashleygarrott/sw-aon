import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { NativeScreenContainer } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


class test extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <view>
                <Text>Hello World</Text>
            </view>
        )
    }
}

export default test;
