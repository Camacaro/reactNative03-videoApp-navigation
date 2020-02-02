
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import AppNavigator from './app-navigator';

// import  {
//     createReduxContainer,
//     createReduxBoundAddListener,
//     initializeListeners,
// } from 'react-navigation-redux-helpers';

// const addListener = createReduxContainer('root');


// class AppNavigatorWithState extends Component {
    
//     componentDidMount() {
//         initializeListeners('root', this.props.navigation);
//     }
    
//     render() {
        
//         const navigation = {
//             dispatch: this.props.dispatch,
//             state: this.props.navigation,
//             addListener
//         }

//         return (
//             <AppNavigator 
//                 navigation = { navigation }
//             />
//         );
//     }
// }

// const mapStateToProps = state => ({
//     state: state.navigation
// })

// // connect(mapStateToProps)(AppNavigatorWithState)
// export default AppNavigatorWithState










// import React, { Component } from'react';
// import { connect } from'react-redux';
// import AppNavigator from'./app-navigator';
// import {
//   createReduxContainer,
//     createReduxBoundAddListener,
//     initializeListeners,
// } from'react-navigation-redux-helpers';

// const reduxContainer = createReduxContainer(AppNavigator, 'root');

// // const addListener = createReduxBoundAddListener('root');
// const addListener = createReduxContainer('root');

// class AppNavigatorWithState extends reduxContainer{
    
//     componentDidMount() {
//         initializeListeners( 'root', this.props.navigation );
//     }
    
//     render(){
        
//         const navigation = {
//             dispatch: this.props.dispatch,
//             state: this.props.navigation,
//             addListener
//         }
        
//         return(
//             <AppNavigator 
//                 navigation = {navigation}
//             />  
//         );
//     }
// }

// function mapStateToProps(state) {
//   return {
//     navigation: state.navigation
//   }
// }

// export default connect(mapStateToProps)(AppNavigatorWithState)









import { 
    createReduxContainer
 } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';

const AppNavigatorWithState = createReduxContainer(AppNavigator);

const mapStateToProps=(state)=>{
  return{
    navigation : state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)