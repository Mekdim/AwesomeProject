import React, {Fragment} from 'react';
import {Image, FlatList, StyleSheet,Text,View, TouchableHighlight, TextInput,ImageBackground, Button} from 'react-native';
import {Icon, Container,Header,Content,Left,Body} from 'native-base';
import {auth,f, database} from '../config/config.js';
class profile extends React.Component{
    state = { currentUser: null,name:null }
    componentDidMount() {
        const { currentUser } = f.auth().currentUser;
        //this.setState({ currentUser })
        let that = this;
        let  uid =  f.auth().currentUser.uid;
        //alert(uid);
        f.database().ref('users/'+uid).once('value').then(function(snapshot){
            const exists = (snapshot.val() !== null);
            if (exists) data = snapshot.val();
            that.setState( {name : data.name} );
            
        }).catch((err)=>{
            console.log(err);
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.buttonColor =='green') {
          // when the state is updated (turned Green), 
          // a timeout is triggered to switch it back off
          this.turnOffGreenTimeout = setTimeout(() => { 
            this.setState(() => ({buttonColor: 'red'}))
          }, 3000);
        }
      }
      componentWillUnmount() {
        // we set the timeout to this.turnOffGreenTimeout so that we can
        // clean it up when the component is unmounted.
        // otherwise you could get your app trying to modify the state on an
        // unmounted component, which will throw an error
        clearTimeout(this.turnOffGreenTimeout);
      }
    constructor(props){
        super(props);
       this.state = {
        buttonColor: 'red',
        }
       this.onButtonPress=this.onButtonPress.bind(this);
       this.defaultToNotLive=this.defaultToNotLive.bind(this);
    }
    onButtonPress(){
        this.setState({ buttonColor: 'green' });
        
        //setTimeout(this.defaultToNotLive(), 3000);
      }
    defaultToNotLive(){
    this.setState({ buttonColor: 'red' });
        
    }
    go_online = () =>{
        let that = this;
        console.log(f.auth().currentUser.email);
        let user_id = 'example_user_id';
        let updates = {};
        updates['/users/'+user_id+'/online'] = Date.now() ;
        f.database().ref().update(updates).then(function(snapshot){
            //const exists = (snapshot.val() !== null);
            //if (exists) data = snapshot.val();
            
        }).catch((err)=>{
            //console.log(err);
        })
        navigator.geolocation.getCurrentPosition((
            postion)=>{console.log(position)}, 
           (err)=>{console.log(err)},
           {enableHighAccuracy: false, timeout: 50000})
    }
    signUserOut = () =>{
        auth.signOut()
        .then(()=>{console.log("user logged out")})
        .catch((err)=>{"there was error logging out"});
      }

    render(){
        return (
            
          <View style={{flex:1}}> 
             <Header> 
                 <Left>
                    <Icon name='ios-menu' onPress={()=>
                        this.props.navigation.openDrawer()
                        }/>
                 </Left>
                <Body>
                   <Text>  Profile </Text>
                </Body>
             </Header>
              <View style={{flex:1}}>
                  <View style={{flexDirection:'row', paddingVertical:10
                    , justifyContent:'space-evenly', alignItems:'center'}}>
                     <Image source={{uri:'https://www.gstatic.com/webp/gallery/1.jpg'}} 
                     style={{marginLeft:10, width:100, height:100, borderRadius:50}}/>
                     <View style={{marginRight:10}}>
                         <Text> {"@"}{this.state.name} </Text>
                     </View>
                     <Button color={this.state.buttonColor} title=" Go Live" onPress={()=>{
                        this.go_online();
                        
                       this.onButtonPress()
                     }
                        }/>
                        
                        
                  </View>

                  <Button title=" Sign out" onPress={()=>
                        this.signUserOut()
                        }/>
                  
              </View>
          
          </View>
        
        );
      }
}
export default profile;