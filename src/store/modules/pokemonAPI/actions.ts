import { Types } from './types';


export function pokemonListRequest() {
  return {
    type: Types.POKEMON_LIST_REQUEST,
  };
}

export function pokemonListSuccess(data: any) {
  console.log('data SUCESS', data)
  return {
    type: Types.POKEMON_LIST_SUCCESS,
    payload: data,
  };
}

export function pokemonListFailure(data: any) {
  console.log('data FAILURE', data)
  return {
    type: Types.POKEMON_LIST_FAILURE,
    payload: data,
  };
}

export function pokemonDetailsRequest(data: any) {
  console.log('data FAILURE', data)
  return {
    type: Types.POKEMON_DETAILS_REQUEST,
    payload: data,
  };
}

export function pokemonDetailsFailure(data: any) {
  console.log('data FAILURE', data)
  return {
    type: Types.POKEMON_DETAILS_FAILURE,
    payload: data,
  };
}

export function pokemonDetailsSuccess(data: any) {
  console.log('data FAILURE', data)
  return {
    type: Types.POKEMON_DETAILS_SUCCESS,
    payload: data,
  };
}