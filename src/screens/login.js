import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput  } from 'react-native'
import firebase from '../firebase/firebaseConect'

export default class login extends Component {
    static navigationOptions = {
		title:'Login',
		
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
            <View style={styles.container}>
                <View style={styles.inputArea}>
                    <TextInput 
                        style={styles.input}
                        placeholder="E-mail"  
                        placeholderTextColor = "#daa520"
                        onChangeText={(email) => {this.setState({email})}}
                    />
                    <TextInput 
                        secureTextEntry={true} 
                        onChangeText={(Senha) => this.setState({Senha})} 
                        style={styles.input}
                    />
                </View>
                <Button title="Fazer login" onPress={this.Logar} />

                <Button title="Contato" onPress={this.contato} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1,
        backgroundColor:'#daa520'
    },
    inputArea:{
        height:40,
        backgroundColor:'#ccc',
        padding:5,
        marginBottom:10
        
    }
})