/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Dimensions, StyleSheet,Text,View, TouchableHighlight, TextInput,ImageBackground,Image} from 'react-native';
import {auth,f, database} from './config/config.js';
import bgImage from './images/background.jpg';
import feed from './screens/feed.js';
import profile from './screens/profile.js';
import upload from './screens/upload.js';
import setting from './screens/setting.js';
import home_screen from './screens/home_screen.js';
import help from './screens/get_help.js';
import notification from './screens/notification.js';
import {Header, Container,Content,Left,Body} from 'native-base';
//import logo from './images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';

//import {TabNavigator} from 'react-navigation';

const Mainpage =  createBottomTabNavigator(
  {
    Feed:{screen:feed, navigationOptions: {
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
            </View>),  
       },
   },
    Upload:{screen:upload , navigationOptions: {
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-add'}/>  
            </View>),  
       },
    },
    Profile:{screen:profile , navigationOptions: {
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
            </View>),  
       },
    }
  }
);
export default createStackNavigator({ Mainpage });
