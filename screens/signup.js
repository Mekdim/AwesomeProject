/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet,Button,Text,View, TouchableHighlight, TouchableOpacity, TextInput,ImageBackground, Dimensions} from 'react-native';
import {auth,f, database} from '../config/config.js';
import bgImage from '../images/background.jpg';
//import logo from './images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

const {width:WIDTH} = Dimensions.get('window');
export default class signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedin:false
    }
    curr = this;
    f.auth().onAuthStateChanged((user)=> {
    if (user){
       console.log("logged_in");
       curr.setState({
           loggedin:true
       });
    }
    else{
      console.log("logged out");
    }
    })
    super(props);
    //this.registerUser("mekdimashebo@gmail.co", "123456");
  }
  create_user(email, user_name, name){
        
    let account = {
        email:email,
        user_name:user_name,
        name: name,
        latitude:'',
        lonitude:'',
        online:'',

    };
    //let ref = f.database().ref('users');
    let  uid =  f.auth().currentUser.uid;
    console.log ("hey mek" + uid);
    f.database().ref().child('users').child(uid).set(account).then(function(snapshot){
        //alert(snapshot);
        
     }).catch(err=>{
        alert(err);
     });
}
  registerUser = (email,password) => {
      console.log(email,password);
      auth.createUserWithEmailAndPassword(email,password)
      .then( (user)=>{console.log(user);
       this.create_user( email, '@'+ this.state.name, this.state.name)} )
      .catch( (err)=>{console.log(err);
     alert(err)}) ;
  }
  logInUser = async (email,password) => {
      if (email!='' && password !=''){
          try {
              let user = await auth.signInWithEmailAndPassword(email,password);
              
              console.log(user);
              this.props.navigation.navigate('Home');
          }
          catch(err){
             console.log(err);
             alert("incorrect password or email");
          }
      }
      else {
        alert('missing email or password');
      }
  }

  signUserOut = () =>{
    auth.signOut()
    .then(()=>{console.log("user logged out")})
    .catch( (err)=>{"there was error logging out"} );
  }
  render(){
    return (
    <ImageBackground source = {bgImage} style={styles.backGroundContainer}>
      <View style = {styles.container}>
            
                
                <View style = {styles.container} >
                  <View >
                  <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
                  style={styles.inputIcon} />
                  <TextInput onChangeText={(text)=>this.setState({name:text})}
                  value={this.state.name}
                  placeholder={'Name'}
                  underlineColorAndroid={'transparent'}
                  style={styles.input}>
                  </TextInput>
                  </View>
                  
                  <View style={styles.inputContainer}>
                  <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
                  style={styles.inputIcon} />
                  <TextInput onChangeText={(text)=>this.setState({email:text})}
                  value={this.state.email}
                  placeholder={'Email'}
                  underlineColorAndroid={'transparent'}
                  style={styles.input}>
                  </TextInput>
                  </View>
                  <View style={styles.inputContainer}>
                  <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
                  style={styles.inputIcon} />
                  <TextInput onChangeText={(text)=>this.setState({password:text})}
                  value={this.state.password}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  underlineColorAndroid={'transparent'}
                  style={styles.input}>
                  </TextInput>
                  </View>
                  <TouchableOpacity onPress={()=>this.registerUser(this.state.email,this.state.password)} 
                    style={styles.btnLogin} >
                  <Text style={styles.text}> Sign Up </Text>
                 
                </TouchableOpacity>
            
                </View>
                
            </View>
            
          
          
      
    </ImageBackground>
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
      width:WIDTH - 55,
      height:45,
      borderRadius:25,
      fontSize:16,
      paddingLeft:45,
      backgroundColor:'rgba(0,0,0,0.35)',
      color:'rgba(255,255,255,0.7)',
      marginHorizontal:25,
    },
    inputIcon:{
      position:'absolute',
      top:8,
      left:37,
    },
    inputContainer:{
      marginTop:10,
    },
    btnLogin: {
      width:WIDTH - 55,
      height:45,
      borderRadius:25,
      backgroundColor:'#432577',
      justifyContent:'center',
      marginTop:20,
      alignItems:'center',
      flexDirection:'column'
    },
    btnSignup: {
        width:WIDTH - 55,
        height:45,
        borderRadius:25,
        backgroundColor:'#432577',
        justifyContent:'center',
        marginTop:80,
        alignItems:'center',
        flexDirection:'column'
      },
    text:{
      color:'rgba(255,255,255,0.7)',
      textAlign:'center',
      fontSize:16,
    }
},

)