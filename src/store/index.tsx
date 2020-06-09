import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { PokemonState } from './modules/pokemonAPI/types';

export interface ApplicationState {
  pokemon: PokemonState
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware , logger));

sagaMiddleware.run(rootSaga);

export { store };
