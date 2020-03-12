import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, StatusBar  } from 'react-native'
import firebase from '../firebase/firebaseConect'

export default class login extends Component {
    static navigationOptions = {
        title:null,
        headerShow:false
    };
    constructor(props){
		super(props);
		this.state = {
			email:'',
			senha:''
		}

        this.Logar = this.Logar.bind(this);
        this.contato = this.contato.bind(this);
        firebase.auth().signOut();
      
    } 
    


    Logar() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.props.navigation.navigate('TelaMenu')
            }
            else {
                this.props.navigation.navigate('login')
            }
         });
         firebase.auth().signInWithEmailAndPassword(
			this.state.email, 
			this.state.senha
			).catch((error) => {
				if(error.code == 'auth/wrong-password'){
					alert("Senha Incorreta");
				} else {
					alert("Tente Novamente !!");
				}
			});
    }
    contato(){
        this.props.navigation.navigate('contato');
    }  
    render() {
        return (
            <ImageBackground style={styles.bg} source={require('../fundo/fundo.jpg')}>
                <StatusBar 
                    backgroundColor='#fff'
                    barStyle="dark-content"
                />
                <View style={styles.container}>
                    <View style={styles.inputArea}>
                        <TextInput 
                            style={styles.input}
                            placeholder="E-mail"  
                            onChangeText={(email) => {this.setState({email})}}
                        />
                        <TextInput 
                            secureTextEntry={true}
                            placeholder="Semha"
                            onChangeText={(Senha) => this.setState({Senha})} 
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.btnArea}>
                        <TouchableOpacity onPress={this.Logar} style={styles.btnCadas}>
                            <Text style={styles.textobtn}>Entra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.contato} style={styles.btnCadas}>
                            <Text style={styles.textobtn}>Contato</Text>
                        </TouchableOpacity>
                    </View>
                </View>    
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    bg:{
        flex:1,
        padding:10
        
      
    },
    container:{
        flex:1,
        flexDirection:'column',
        
        justifyContent:'center',
        alignItems:"center",
    },
    input:{
        
        height:40,
        width:300,
        backgroundColor:'#ccc',
        padding:5,
        marginBottom:10,
        borderRadius:5
        
    },
    btnArea:{
        paddingTop:10,
        paddingBottom:10,
        
        flexDirection:'row',
		justifyContent:'space-evenly',
		margin:10
    },
    btnCadas:{
        backgroundColor:"#ccc",
        margin:10,
        height:40,
        width:100,
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'space-around'  
    },
    textobtn:{
        color:'#000',
        textAlign:'center'
    }
})