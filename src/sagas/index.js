import { all } from 'redux-saga/effects';

import pokemonListSaga from './pokemonList.saga';

export default function* rootSaga() {
    yield all([
        ...pokemonListSaga
    ]);
}