/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {store, persistor} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from './src/sections/components/loading';
import AppLayout from './src/app';
import AppNavigator from './src/app-navigator';
import AppNavigatorWithState from './src/app-navigator-with-state';

export default class App extends Component<Props> {

  	render() {
        return (
            <Provider store = { store } >
                <PersistGate loading = { <Loading /> } persistor = { persistor } >
                    {/* <AppLayout /> */}
                    <AppNavigator />
                    {/* <AppNavigatorWithState /> */}
                </PersistGate>
            </Provider>
        );
    }
}

// const App: () => React$Node = () => {
//   	return (
// 		<Text>header</Text>
// 	  	// <Home>
// 		// 	<Text>header</Text>
// 		// 	<Text>buscador</Text>
// 		// 	<Text>categorias</Text>
// 		// 	<Text>sugerencias</Text>
//     	// </Home>
//   	);
// };

// export default App;
