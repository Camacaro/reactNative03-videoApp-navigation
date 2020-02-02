import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import reducer from "./reducers/index";
// deprecado
//import storage from 'redux-persist/lib/storage';
// import { AsyncStorage } from "react-native";
// ahora es asi
import AsyncStorage from '@react-native-community/async-storage';
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

// const store = createStore( reducer, {
//     suggestionList: [],
//     categoryList: []
// } );

// el blacklist es para decirle a persiste que no quiero que persistas o guardes
// este valor - key ( es la key de mi state en el reducer) , que no lo mantenga en el store
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['selectedMovie']
};

const persistedReducer = persistReducer(persistConfig, reducer);

const navigationMiddleware = createReactNavigationReduxMiddleware( state => state.navigation );
// , applyMiddleware( navigationMiddleware )
const store = createStore(persistedReducer, applyMiddleware( navigationMiddleware ));
// Se usa persistor porque lo queremos unir a react, ya que el redux lo podemos usar sin react  
const persistor = persistStore(store);


export {store, persistor};