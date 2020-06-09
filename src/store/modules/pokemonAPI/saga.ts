import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Types  } from './types';
import { pokemonListSuccess, pokemonListFailure , pokemonDetailsFailure ,  pokemonDetailsSuccess} from './actions';
import api from '../../../services/api';

function* pokemonListRequest({ payload }: any) {
  try {
    const response = yield call(api.get , '');
    if (response) yield put(pokemonListSuccess(response.data.cards));
  } catch (err) {
    yield put(pokemonListFailure({error: 'Serviço Indisponível!'}));
  }
}

function* pokemonDetailsRequest({ payload }: any) {
  try {
    const response = yield call(api.get , `/${payload}`);
    if (response) yield put(pokemonDetailsSuccess(response.data));
  } catch (err) {
    yield put(pokemonDetailsFailure(err.message));
  }
}


export default all([
  takeLatest(Types.POKEMON_LIST_REQUEST, pokemonListRequest),
  takeLatest(Types.POKEMON_DETAILS_REQUEST, pokemonDetailsRequest),
]);
