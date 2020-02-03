
import React, { Component, Fragment } from 'react';
import Header from '../../sections/components/header';
import API from '../../../utils/api';
import { Text } from 'react-native';
import CategoryList from '../../videos/containers/category-list';
import SuggestionList from '../../videos/containers/suggestion-list';
import { connect } from 'react-redux';
import Search from '../../sections/container/search';


class Home extends Component {

    // Editar la la vita a traves del metodo estatico de la navegacions
    static navigationOptions = {
        // header: 'Home',
        // headerBackImage: () => <Text> 😍 </Text>,
        // title: () => <Text> 😍 </Text>,
        // headerBackImage: () => <Text> 😍 </Text>,
        headerTitle: () => <Header />
        
    };

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
        return (
            <Fragment>
                {/* <Header /> */}
                <Search />
                <CategoryList />
                <SuggestionList />
            </Fragment>
        );
    }
}

export default connect( null )(Home);
