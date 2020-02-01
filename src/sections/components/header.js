
import React from 'react';

import { 
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

function Header( props ) {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    
                    <Image 
                        source={ require('../../../assets/logo.png') } 
                        style={styles.logo} 
                    />

                    <View style={styles.rigth} >
                        { props.children }
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
} 

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain' // que la imagen se adapte en el espacio que le di, por dafault es cover
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10, // estos serian lo mismo que padding
        // backgroundColor: 'red',
        flexDirection: 'row' // react native usa lo que es flex y por default esta en vertical colunm
    },
    rigth: {
        // backgroundColor: 'green',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'

    }
});

export default Header;