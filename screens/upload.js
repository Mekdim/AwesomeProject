import React, {Fragment} from 'react';
import {FlatList, StyleSheet,Text,View, TouchableHighlight, TextInput,ImageBackground, Button} from 'react-native';
import {Icon, Container,Header,Content,Left,Body} from 'native-base';
import {auth,f, database} from '../config/config.js';


class upload extends React.Component{
    load_picture = () =>{
        let that = this;
        //let updates = {};
        //updates['/photos/example_photo_id/posted'] = 1111111;
        //f.database().ref().update(updates).then(function(snapshot){
            //const exists = (snapshot.val() !== null);
            //if (exists) data = snapshot.val();
            
        //}).catch((err)=>{
            //console.log(err);
        //})
        photo = {
            author:'mekdim2',
            posted:1567683872,
            caption:"hey",
            url:'https://www.gstatic.com/webp/gallery/1.jpg',
            user_id:'example_user_id',
            latitude:12,
            longitude:12
        }
        let ref = f.database().ref('photos').push();
        ref.set(photo).then(function(snapshot){
           //alert(snapshot);
           
        }).catch(err=>{
           alert(err);
        });
        let five_min_ago = (Math.floor(Date.now() / 1000) -60)*1000;
        console.log(five_min_ago);
        let query =  f.database().ref('/users').orderByChild("online").startAt(1234567);
        query.on('value', function(dataSnapshot) {
            let items = {};
            
            dataSnapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              //console.log(childKey);
              var childData = childSnapshot.val();
              //console.log(childData); 

              items['/users/'+ childKey +'/Received/' + ref.key] = photo;
                console.log("hey");
                console.log(childData.name);
            });
            f.database().ref().update(items).then(function(snap){
                 //alert(snap);
              }).catch(err=>{
                //alert(err);
             })

            
          });
        
    

        //let items = {};
        //items['/users/example_user_id/Received/' + ref.key] = photo;
        //f.database().ref().update(items).then(function(snap){
            //alert(snap);
        //}).catch(err=>{
            //alert(err);
        //})
    };
    render(){
        return (
          <View Style={{flex:1}}>
              <Header> 
                 <Left>
                    <Icon name='ios-menu' onPress={()=>
                        
                        this.props.navigation.openDrawer()
                        }/>
                 </Left>
                <Body>
                   <Text>  Upload Picture</Text>
                </Body>
             </Header>
             <Button title=" Upload picture" onPress={()=>
                        this.load_picture()
                        }/>
              <Text> Hey upload!</Text>
          </View>
       
        );
      }
}
export default upload;