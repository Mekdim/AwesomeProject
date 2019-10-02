import React, {Fragment} from 'react';
import {Image, FlatList, StyleSheet,Text,View, TouchableHighlight, TextInput,ImageBackground} from 'react-native';
import {Icon, Container,Header,Content,Left,Body} from 'native-base';
class help extends React.Component{
    static navigationOptions = {
        drawerIcon:(
            <Image source={{uri:'https://www.gstatic.com/webp/gallery/1.jpg'}}  style={{height:24, width:24}}/>
        )
    }
    render(){
        return (
            <Container >
                <Header> 
                    <Left>
                        <Icon name='ios-menu' onPress={()=>
                            this.props.navigation.openDrawer()
                        }/>
                    </Left>
                    <Body>
                       <Text>  Get Help </Text>
                    </Body>
                </Header>
                <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
            }}>
                    <Text> Get Help! </Text>
                </Content>
            </Container>
        )
    }
}
export default help;