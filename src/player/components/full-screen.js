import React from 'react';
import { Text, StyleSheet,  Platform,
    TouchableHighlight, TouchableOpacity } from 'react-native';

// Importamos Ionicons de react native vector
import Icon from 'react-native-vector-icons/Ionicons'

function FullScreen ( props ) {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
            style={styles.container}
        >
            
            {
                // Dependiendo de la plataforma es el icono que renderizamos
                Platform.select({
                    ios: <Icon name="ios-expand" size={20} color="#E82943" />,
                    android: <Icon name="md-expand" size={20} color="#E82943" />
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
        marginVertical: 5,
      }
});

export default FullScreen;