import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../../videos/components/suggestions-list-layout';
import Empty from '../../videos/components/empty';
import Separator from '../../videos/components/vertical-separator';
import Suggestion from '../../videos/components/suggestions';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Category extends Component {
  	renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  
 	itemSeparator = () => <Separator />; // color='red' 

    viewMovie = ( item ) => {
       
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }
        });

        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Movie'
            })
        );
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
      <Layout title={`${this.props.navigation.getParam('genre', 'Category')}`}>
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
    list: state.videos.categoryList
});

export default connect( mapStateToProps )(Category);
