import React, { Component } from "react";
import {  createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import home from '../MenuLateral/home';
import Sobre from '../MenuLateral/Sobre';
import Contato from '../MenuLateral/Contato';
import Receitas from '../MenuLateral/Receitas';
import Parceiros from '../MenuLateral/Parceiros';


const AppNavigator = createDrawerNavigator({
	home:{
		screen:home
	},
	Sobre:{
		screen:Sobre
	},
	Receitas:{
		screen:Receitas
	},
	Parceiros:{
		screen:Parceiros
	},
	Contato:{
		screen:Contato
	},
	
	
 
},{
	drawerPosition:'left',
	
	drawerBackgroundColor:'#daa520',
	contentOptions:{
		
		activeTintColor:'#000',
		inativeTintColor:'#000',
		activeBackgroundColor:'#fff',
		itemsContainerStyle:{
			MarginTop:100
		},
		itemStyle:{
			MarginTop:10,

		},
		labelStyle:{
			fontSize:19
		},
		iconContainerStyle:{
			backgroundColor:'#000'
		}
	}
});

export default createAppContainer(AppNavigator);