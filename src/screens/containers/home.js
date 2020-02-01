
import React, { Component } from 'react';

class Home extends Component {

    render() {
        // como este sera mi componente padre retornara todos los hijos, las vistas
        return  this.props.children; 
    }
}

export default Home;