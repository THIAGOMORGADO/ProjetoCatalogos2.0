import React, { Component } from 'react'

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import login from './src/screens/login';
import contato from './src/screens/contato';
import TelaMenu from './src/screens/TelaMenu'
import CalculoBaguete from './src/ReceitaBaguete/CalculoBaguete';
import IngredientesBaguete from './src/ReceitaBaguete/IngredientesBaguete';



const StackNavigator = createStackNavigator({
  login:{
  screen:login
  },
  contato:{
    screen:contato
  },
  TelaMenu:{
    screen:TelaMenu
  },
  CalculoBaguete: {
        screen: CalculoBaguete,   
  },
  IngredientesBaguete:{
    screen:IngredientesBaguete
  }

  
})
export default createAppContainer(StackNavigator);


