import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestions';
import { connect } from 'react-redux';

class SuggestionList extends Component {
  	renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  
 	itemSeparator = () => <Separator />; // color='red' 

    viewMovie = ( item ) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }
        });
    }

	renderItem = ( {item} ) => { 
		return (
			<Suggestion {...item} onPress = { () => { this.viewMovie( item ) } } />
		)
	}  	

	keyExtractor = item => item.id.toString();

  render() {
    const list = [
      {
        key: '1',
        title: 'Avengers',
      },
      {
        key: '2',
        title: 'Pokemon',
      },
	];
	
	// ListEmptyComponent: se activa si el arrelo que le pase esta vacio
	// ItemSeparatorComponent: es una funcion qeu pone algo entre cada item
	// renderItem: es una funcion que devuelve cada item, es como un foreach

    return (
      <Layout title="Recomendado para ti">
        <FlatList
			keyExtractor={this.keyExtractor}
			// data={list}
			data={ this.props.list }
          	// ListEmptyComponent = { () => <Text>No hay elementos en la lista</Text> }
          	ListEmptyComponent={this.renderEmtpy}
          	ItemSeparatorComponent={this.itemSeparator}
			//renderItem={({item}) => <Text> {item.title} </Text>}
			renderItem={ this.renderItem }
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
    list: state.suggestionList
});

export default connect( mapStateToProps )(SuggestionList);
