import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator, Text } from 'react-native';
import API from '../../../utils/api';
import { connect } from 'react-redux';

class Search extends Component {
    
    state = {
        text: '',
        loading: false,
        message: false,
    }

    handleSubmit = async () => {
        // console.log('submit', this.state.text );
        
        this.setState({
            loading: true,
        });

        const movies = await API.searchMovie( this.state.text );

        this.setState({
            loading: false,
        });

        console.log(movies);

        if ( movies ) {

            this.props.dispatch({
                type: 'SET_SELECTED_MOVIE',
                payload: {
                    movie: movies[0]
                }
            });

            return;
        }

        this.setState({
            message: true,
        });




    }

    // al estar seteando, o escribiendo se ira ejecutando esta funcion
    handleChangeText = ( text ) => {
        this.setState({
            text
        });
    }

    render() {
        return (
            <View>

                <TextInput 
                    placeholder = "Busca tu película favotita"
                    underlineColorAndroid = "transparent"
                    autoCorrect = {false}
                    autoCapitalize = "none"
                    onSubmitEditing = { this.handleSubmit }
                    onChangeText = { this.handleChangeText }
                    style = { styles.input }
                />

                { this.state.loading && <ActivityIndicator color="green" /> }

                { this.state.message && <Text style = {styles.top} > No hay coincidencia con tu busqueda </Text> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input : {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    },
    title: {
        color: '#44546b',
        fontSize: 18,
        fontWeight: 'bold'
    },
    top: {
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        padding: 20,
        backgroundColor: 'white'
    },
})

export default connect( null ) (Search);