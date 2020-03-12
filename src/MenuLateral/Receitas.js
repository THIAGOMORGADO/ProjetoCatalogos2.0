import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Receitas extends Component {
    constructor(props){
        super(props);
        this.Calculo = this.Calculo.bind(this);
    }
    Calculo(){
        this.props.navigation.navigate('CalculoBaguete');
    }
    render() {
        return (
            <View>
                <Text>Receitas de Baguetes</Text>
                <Button title="CalculoB" onPress={this.Calculo}/>
                <Button title="CalculoF" onPress={this.Calculo}/>
                <Button title="CalculoA" onPress={this.Calculo}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
