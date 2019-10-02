import React, {Fragment} from 'react';
import {Image, FlatList, StyleSheet,Text,View, TouchableHighlight, TextInput,ImageBackground} from 'react-native';
import {Icon, Header,Button, Container,header,Content,Left,Right,Body} from 'native-base';
class home_screen extends React.Component{
    static navigationOptions = {
        drawerIcon:(
            <Image source={{uri:'https://www.gstatic.com/webp/gallery/1.jpg'}}  style={{height:24, width:24}}/>
        )
    }
    render(){
        return (
            <Container >
                <Header styles={{paddingRight: 15,paddingLeft: 15}}> 
                    <Left >
                        <Icon name='ios-menu' onPress={()=>
                            this.props.navigation.openDrawer()
                        }/>
                    </Left>
                    <Body>
                       <Text>  'Squizin' </Text>
                    </Body>
                </Header>
                <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
            }}>
                    <Text> home screen! </Text>
                </Content>
            </Container>
        )
    }
}
export default home_screen;