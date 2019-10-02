import React, {Fragment} from 'react';
import {FlatList, Image,StyleSheet,Text,View, TouchableHighlight, TextInput,ImageBackground} from 'react-native';
import {auth,f, database} from '../config/config.js';
import {Icon, Container,Header,Content,Left,Body} from 'native-base';

class received extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photo_feed : [],
            refresh:false,
            loading:true
        }
        
    }
    componentDidMount = ()=> {
        this.load_feed();
    }
    load_feed = () =>{
        this.setState({
            refresh:true,
            photo_feed : [],
        })
        let that = this;
        let  uid =  f.auth().currentUser.uid;
        //alert(uid);
        f.database().ref('users/'+uid+'/Received').orderByChild('latitude').once('value').then(function(snapshot){
            const exists = (snapshot.val() !== null);
            if (exists) data = snapshot.val();
            let photo_feed = that.state.photo_feed;
            for (var photo in data){
                var photoObj = data[photo];
                photo_feed.push({
                    id:photo,
                    url:photoObj.url,
                    posted: that.time_converter(photoObj.posted)
                });
                that.setState({
                    refresh:false,
                    loading:false
                });
            }
        }).catch((err)=>{
            console.log(err);
        })
    };
    load_new = ()=>{
       this.setState({
           refresh:true
       });
       this.setState({
        photo_feed:[5,6,7,8,9],
        refresh:false
    })
    }
    plural_check = (s)=>{
      if (s ==1){
          return " ago";
      }
      else {
          return "s ago";
      }
    }
    time_converter = (time_stamp)=>{
        let a =  new Date(time_stamp * 1000);
        let seconds = Math.floor((new Date() - a)/1000);
        let interval =  Math.floor(seconds/31536000);
        if (interval > 1){
            return interval + ' year' + this.plural_check(interval);
        }
        interval =  Math.floor(seconds/2592000);
        if (interval > 1){
            return interval + ' month'+ this.plural_check(interval);
        }
        interval =  Math.floor(seconds/86400);
        if (interval > 1){
            return interval + ' day'+ this.plural_check(interval);
        }
        interval =  Math.floor(seconds/3600);
        if (interval > 1){
            return interval + ' hour'+ this.plural_check(interval);
        }
        interval =  Math.floor(seconds/60);
        if (interval > 1){
            return interval + ' minute'+ this.plural_check(interval);
        }
        return Math.floor(seconds) + ' second'+ this.plural_check(interval);
    }
    static navigationOptions = {
        drawerIcon:(
            <Image source={{uri:'https://www.gstatic.com/webp/gallery/1.jpg'}}  style={{height:24, width:24}}/>
        )
    }
    render(){
        return (
        <View style = {{flex:1}}>
            <Header> 
                 <Left>
                    <Icon name='ios-menu' onPress={()=>
                        this.props.navigation.openDrawer()
                        }/>
                 </Left>
                <Body>
                   <Text>  Received Pictures </Text>
                </Body>
             </Header>
            <FlatList refreshing={this.state.refresh} data={this.state.photo_feed} 
            keyExtractor={(item,index)=>index.toString()} style={{flex:1}} renderItem={({item,index})=>(
                 
            <View key={index} style={{width:'100%', overflow:'hidden', marginBottom:5 ,justifyContent:'space-between' ,borderBottomWidth:1, borderColor:'grey'}}>
               <View style={{width:'100%', padding:5, flexDirection:'row', justifyContent:"space-between"}}>
                   <Text> {item.posted} </Text>
                   <Text> Received from @Mekdem</Text>
               </View>
               <View>
                   <Image source={{uri:item.url }}
                   style={{resizeMode:'cover', width:'100%', height:275}} /> 
                   
               </View>
               <View style={{height:50, width:'100%', borderColor:"rgb(233,233,233)", flexDirection:"row" }}>
                   <Image source={require('../images/icons-remove.png')} style={{height:40, width:40}} />
               </View>

            </View>
        )} /> 
            
            
        </View>
        
        );
      }
}
export default received;