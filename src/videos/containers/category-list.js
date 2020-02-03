import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Layout from '../components/category-list-layout'
import Category from '../components/category';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


// function mapStateToProps(state) {
//     debugger;
// }

class Categorylist extends Component {
    
    keyExtractor = item => item.id.toString();

    renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  
    itemSeparator = () => <Separator />; // color='red' 

    viewCategory = ( item ) => {
        this.props.dispatch (
            NavigationActions.navigate({
                routeName: 'Category',
                params: {
                    genre: item.genres[0]
                }
            })
        )
    }

    renderItem = ( {item} ) => { 
		return (
			<Category {...item} onPress = { () => { this.viewCategory(item) }  } />
		)
	}  	
     
    render() {
        return (
            <Layout title="Categorias">
           
                <FlatList
                    horizontal
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
        )
    }
}

// const mapStateToProps = (state) => {
//     debugger;

//     return{
//     };
// };

const mapStateToProps = (state) => ({
    list: state.videos.categoryList
});

//  connect( mapStateToProps )(Categorylist)
export default connect( mapStateToProps )(Categorylist); // Categorylist;