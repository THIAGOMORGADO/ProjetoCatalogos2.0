import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.Receitas = this.Receitas.bind(this);
        
    }
    Receitas(){
       this.props.navigation.navigate('Receitas')
    }
   
    render() {
        return (
            <View>
                <Button title="acessar receitas" onPress={this.Receitas}/>
               
                <Text>Foto</Text>
            </View>
        )
    }
}
 