import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import pokemonReducer from '../src/reducers/pokemonList.component.reducer';
import rootSaga from '../src/sagas/index';


const rootReducer = combineReducers({
    pokemonList: pokemonReducer
});

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(
        rootReducer, 
        applyMiddleware(sagaMiddleware) 
    );
    sagaMiddleware.run(rootSaga);
    return store;
};


export default configureStore;