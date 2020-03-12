import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native'

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
            <ImageBackground style={styles.bg} source={require('../fundo/fundo.jpg')}>
                    <Text style={styles.titulo}>Calculo baguete </Text>
                        <View style={styles.input}>

                        </View>
                    <Button title="ingrediente" onPress={this.Ing}/>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    titulo:{
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        fontSize:26,
        fontWeight:'bold'
    }
})