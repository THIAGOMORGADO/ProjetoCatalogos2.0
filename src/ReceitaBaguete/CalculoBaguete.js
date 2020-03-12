import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class CalculoBaguete extends Component {
    constructor(props){
        super(props);
        this.Ing = this.Ing.bind(this);
    }
    Ing(){
        this.props.navigation.navigate('IngredientesBaguete');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Calculo baguete </Text>
                <Button title="ingrediente" onPress={this.Ing}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff0000'
    }
})