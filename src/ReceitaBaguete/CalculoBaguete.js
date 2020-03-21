import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity, TextInput, AsyncStorage, KeyboardAvoidingView,} from 'react-native';



export default class CalculoBaguete extends Component {
    constructor(props){
        super(props);
        this.IngredientesBaguete = this.IngredientesBaguete.bind(this);
        this.state = {Quantidade:null,PesoPorUnidade:null,resultado:null, resultadoText:""};
        this.calcular = this.calcular.bind(this);
    }

    IngredientesBaguete() {
       //  this.props.navigation.navigate('IngredientesBaguete');
       
    }

    // FUNÇÃO CALCULAR
    calcular(){
        let calcular = 0;
        calcular = (this.state.Quantidade * this.state.PesoPorUnidade) / 1000
        let s = this.state
        s.resultado = calcular

       
        if(this.state.Quantidade != null && this.state.PesoPorUnidade != null){
            if(s.resultado != 0){
                s.resultadoText =' Kg'
                this.props.navigation.navigate('IngredientesBaguete', {resultado: this.state.resultado});
            }
            else {
                alert('campos Aqui o live share esta fundando dados')
            }  
        }
        else {
            alert('campos sem dados') 
        }
        this.setState(s)
    }


    render() {
        return (
            <KeyboardAvoidingView  style={styles.containerBackGround}  behavior={Platform.select({
                ios: 'padding',
                android: null,
            })}>
            <ImageBackground  style={styles.containerBackGround}>

                <View style={styles.ContainerTitulo}> 
                    <Text style={styles.titulo}>Receita Baguete</Text>
                </View>

                <View style={styles.ContainerSubTitulo}> 
                    <Text style={styles.subTitulo}>Complete os campos abaixo:</Text>
                </View>

                <View style={styles.ContainerInputReceita}>
                            
                            <Text style={styles.ContainerTituloInputs}>Quantidade:</Text> 
                            <Text style={styles.ContainerTituloInputs}>Peso por Unidade:</Text>
                </View>

                    <View style={styles.ContainerInputReceita}>

                            <TextInput style={styles.InputReceita}
                            placeholder="Quantidade"
                            keyboardType="numeric"
                            placeholderTextColor = "#5b2b1b"
                            onChangeText={(Quantidade) => this.setState({Quantidade})} >
                            </TextInput>

                            <TextInput style={styles.InputReceita}
                            placeholder="Peso por Unid."
                            keyboardType="numeric"
                            placeholderTextColor = "#5b2b1b"
                            enablesReturnKeyAutomatically
                            onChangeText={(PesoPorUnidade) => this.setState({PesoPorUnidade})} >
                            </TextInput>
                    
                    </View>

                    <Text style={styles.resultado}>{this.state.resultado}{this.state.resultadoText} </Text>


            <View style={styles.ContainerBtnIngredientes}>

            <TouchableOpacity onPress={this.calcular} style={styles.btnCalcularMassa}>
                <Text style={styles.textobtn}>Calcular a Massa</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.IngredientesBaguete} style={styles.btnReceitas}>
            <Text style={styles.textobtn}>Ver Ingredientes</Text>
            </TouchableOpacity>

            </View>

            </ImageBackground>

            </KeyboardAvoidingView>
        )
    }
}

//this.props.navigation.state.params.resultado



const styles = StyleSheet.create({
    containerBackGround:{
        flex:1,
        backgroundColor:'#000'
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

    ContainerTituloInputs:{
        color:'#fffcd6',
        fontWeight:'bold',
        flex:2,
        display:'none',


    },

    ContainerInputReceita:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:10,
        
    },

    InputReceita:{
        backgroundColor:'#fff',
        borderRadius:4,
        width:150,
        padding:20,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems :'center',

    },

    TituloDosInputs:{
        color:'#fff',
    },

    ContainerBtnIngredientes:{
        justifyContent:'center',
        alignItems:'center',
        flex:2,
       
    },
    btnReceitas:{
        backgroundColor:'#fffcd6',
        padding:20,
        margin:1,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#5b2b1b',
        width:220,
        justifyContent:'center',
        alignItems:'center',
    },
    btnCalcularMassa :{
        backgroundColor:'#20b84b',
        padding:20,
        margin:1,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#20b84b',
        width:220,
        justifyContent:'center',
        alignItems:'center',
    },

resultado:{
    alignSelf:"center",
    color:"#fff",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },

  textobtn: {
    fontWeight:'bold',
    color: '#5b2b1b',
  },

})