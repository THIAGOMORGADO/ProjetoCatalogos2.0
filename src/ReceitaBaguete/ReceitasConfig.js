import React, { Component } from "react";
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View, Text} from 'react-native';

import CalculoBaguete from './CalculoBaguete';
import IngredientesBaguete from './IngredientesBaguete';
import ModoDePreparo from './ModoDePreparoBaguete';
import CadastraUsuario from './src/screens/CadastraUsuario';

const AppNavigator = createStackNavigator({
    CalculoBaguete: {
        screen: CalculoBaguete,
      
	},
	IngredientesBaguete:{
		screen: IngredientesBaguete,
	},
	ModoDePreparo:{
		screen: ModoDePreparo,
	}
});
export default createAppContainer(AppNavigator);