
import React, { Component } from 'react';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import Player from './player/containers/player';
import API from '../utils/api';
import { Text } from 'react-native';
import CategoryList from './videos/containers/category-list';
import SuggestionList from './videos/containers/suggestion-list';
import { connect } from 'react-redux';
import Movie from './screens/containers/movie';
import Search from './sections/container/search';


class AppLayout extends Component {

    // Al entrar cargar esto
	async componentDidMount(){
		const categoryList = await API.getMovies();

        this.props.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        });

		const suggestionList = await API.getSuggestion( 10 );

        this.props.dispatch({
            type: 'SET_SEGGESTION_LIST',
            payload: {
                suggestionList
            }
        });
	}

    render() {

        if( this.props.selectedMovie ) {
            return <Movie />
        }

        return (
            <Home>
                <Header />
                <Search />
                <CategoryList />
                <SuggestionList />
            </Home>
        );
    }
}

const mapStateToProps = ( state ) => ({
    selectedMovie: state.selectedMovie
});

export default connect( mapStateToProps )(AppLayout);
