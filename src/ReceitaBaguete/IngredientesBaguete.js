import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, FlatList } from 'react-native';



export default class IngredientesBaguete extends Component {

    constructor(props){
        super(props);
        this.state = {
           Resultado:this.props.navigation.state.params.resultado,
            farinha:''
        };
       let calcular = this.props.navigation.state.params.resultado;
       calcular = (calcular * calcular)/1926;
      
       let s = this.state
       s.farinha = calcular;
       this.setState(s)
    }
    

   



    render() {
        return (

        <ImageBackground style={styles.containerBackGround}>
                
                <View style={styles.ContainerTitulo}> 
                    <Text style={styles.titulo}>Ingredientes Baguete</Text>
                </View>

                <View style={styles.ContainerSubTitulo}> 
                    <Text style={styles.subTitulo}>Para {this.state.Resultado} Kg, você precisará de:</Text>
                </View>

                <View style={styles.ContainerSubTitulo}> 
                    <Text style={styles.subTitulo}> Farinha = {this.state.farinha} * 1 / 1926</Text>
                </View>


        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    containerBackGround:{
        flex:1,
    },

    ContainerTitulo:{
        backgroundColor:'#5b2b1b',
        justifyContent:'center',
        alignItems:'center',

    },
    titulo:{
        fontSize:26,
        fontWeight:'bold',
        paddingTop:50,
        paddingBottom:20,
        color:'#fffcd6',
    },

    ContainerSubTitulo:{
        backgroundColor:'#fffcd6',
        justifyContent:'center',
        alignItems:'center',


    },

    subTitulo:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:10,
        paddingBottom:10,
        color:'#5b2b1b',
        alignItems:'center',

    },

    item: {
        padding: 10,
        fontSize: 16,
        height: 44,
        color:'#5b2b1b',
        backgroundColor:'#ccc'
      },


      subTituloResultado:{

        color:'#f90',
        fontSize:100,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
      }


})