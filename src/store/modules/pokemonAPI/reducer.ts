import produce from 'immer';
import { Types , PokemonState  } from './types';
import { ReducerAction  } from '../types';

export const INITIAL_STATE: PokemonState = {
  list: [],
  details: []
};

export default function pokemon(state = INITIAL_STATE, action: ReducerAction): PokemonState {
  return produce(state, draft => {
    switch (action.type) {

      case Types.POKEMON_LIST_REQUEST: {
        break;
      }
      case Types.POKEMON_LIST_SUCCESS: {
        draft.list = action.payload;
        break;
      }
      case Types.POKEMON_LIST_FAILURE: {
        draft.list = action.payload;
        break;
      }
      case Types.POKEMON_DETAILS_REQUEST: {
        break;
      }
      case Types.POKEMON_DETAILS_SUCCESS: {
        draft.details = action.payload;
        break;
      }
      case Types.POKEMON_DETAILS_FAILURE: {
        draft.details = action.payload;
        break;
      }

      default:
    }
  });
}
