import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from './sections/components/loading';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';
import Close from './sections/components/close';

const Main = createStackNavigator(
    {
        Home: {
            path: 'home/',
            screen: Home,
            navigationOptions: {
                title: 'Esta es la Home'
            }
        },
        Movie: {
            path: 'movie/',
            screen: Movie
        },
        Category: {
            path: 'category',
            screen: Category
        },
        
    },
    {
        defaultNavigationOptions: {
            headerTitle: () => <Header />,
            headerLeft: () => null,
            // headerRight: () => <Close onPress = { () => navigation.goBack() } />
        }
    }
);

const MainContainer = createAppContainer(Main);

export default MainContainer;
// export default Main;