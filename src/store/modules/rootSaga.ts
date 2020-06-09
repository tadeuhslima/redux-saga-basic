import { all } from 'redux-saga/effects';

import pokemon from './pokemonAPI/saga';

export default function* rootSaga(): Generator {
  return yield all([pokemon]);
}
