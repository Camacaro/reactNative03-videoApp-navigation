import React from 'react';
import { Text, StyleSheet, 
    TouchableHighlight, TouchableOpacity } from 'react-native';

// Importamos Ionicons de react native vector
import Icon from 'react-native-vector-icons/Ionicons'

// TouchableHighlight
// este componente funciona para cuando tengas el dedo
// encima del boton haga un cambio, como un background color
// hitSlop: es para que se pueda activar el boton por fuera de el, dependiendo de las dimensiones que se le pase

// TouchableOpacity
// funciona para que cuando despeguemos el botom haga algun destello

function PlayPause ( props ) {
    return(
        
        <TouchableHighlight 
            onPress={props.onPress} 
            style={styles.container}
            underlayColor = "black"
            hitSlop = {{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5
            }}
        > 
            {
                props.paused ?  
                    // Dependiendo de la plataforma es el icono que renderizamos
                    Platform.select({
                        ios: <Icon name="ios-arrow-dropright" size={20} color="#E82943" />,
                        android: <Icon name="md-arrow-dropright" size={20} color="#E82943" />
                    })
                    // <Text style={styles.button}> PLAY </Text> 
                :
                    // <Text style={styles.button}> PAUSE </Text>
                    // Dependiendo de la plataforma es el icono que renderizamos
                    Platform.select({
                        ios: <Icon name="ios-pause" size={20} color="#E82943" />,
                        android: <Icon name="md-pause" size={20} color="#E82943" />
                    })
            } 
            
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red', // 'white',
        backgroundColor: 'transparent' // 'gray'
    },
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    }
});

export default PlayPause;