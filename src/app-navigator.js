import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from './sections/components/loading';


const Main = createStackNavigator(
    {
        Home: Loading
    }
);

const MainContainer = createAppContainer(Main);

export default MainContainer;