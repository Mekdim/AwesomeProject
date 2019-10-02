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
import received from './screens/received.js';
import {Header, Container,Content,Left,Body} from 'native-base';
import mainPage from './mainPage.js'
//import logo from './images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';
import {Loading} from './screens/loading.js';
import login from './screens/login.js';
import signup from './screens/signup.js';
//import {TabNavigator} from 'react-navigation';
/*
const MainStack =  createBottomTabNavigator(
  {
    Feed:{screen:feed},
    Upload:{screen:upload},
    Profile:{screen:profile}
  }
);
*/
const width = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth:width*0.83
}

const customDrawerContentComponent = (props)=>(
   <Container>
     <Header style={{height:200}}>
       <Body>
         <Image source={{uri:'https://www.gstatic.com/webp/gallery/1.jpg'}} 
         style={{width:150, height:150, borderRadius:75}}/>
       </Body>
     </Header>
     <Content>
       <DrawerItems {...props}/>
     </Content>
   </Container>
)
const MainMenu = createDrawerNavigator({
  Loading:{screen: Loading,  navigationOptions: {
    drawerLabel: ()=> null
  }   },
  login:{screen:login ,  navigationOptions: {
    drawerLabel: ()=> null
  }  },
  signup:{screen:signup ,  navigationOptions: {
    drawerLabel: ()=> null
  }  },
  logout:{screen:signup ,  navigationOptions: {
    drawerLabel: ()=> null
  }  },
  Home:{screen:mainPage, navigationOptions: {
    drawerLabel: 'Home',
    drawerIcon: (
      <Image source={{uri:'https://www.gstatic.com/webp/gallery/1.jpg'}}  style={{height:24, width:24}}/>
  ),
  }},
    Setting:{screen:setting}, 
    Help:{screen:help},
    Notification:{screen:notification},
    Received:{screen:received},
    
},
{
  'initialRouteName':'Loading',
  contentComponent:customDrawerContentComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle',
  drawerPosition:'left'
})


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedin:false
    }
    curr = this;
    
    super(props);
    //this.registerUser("mekdimashebo@gmail.co", "123456");
  }
  
  render(){
    return (
      
        
          <MainMenu/>
        
        
     
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    backGroundContainer:{
      flex:1,
      width:null,
      height:null,
      alignItems:'center',
      justifyContent:'center',
    },
    input:{
      width:200,
      height:55,
      borderRadius:25,
      fontSize:16,
      paddingLeft:45,
      backgroundColor:'rgba(0,0,0,0.35)',
      color:'rgba(255,255,255,0.7)',
      marginHorizontal:25,
    },
    inputIcon:{
      position:'absolute',
      top:0,
      left:37,
    },
    inputContainer:{
      marginTop:10,
    }
},

)