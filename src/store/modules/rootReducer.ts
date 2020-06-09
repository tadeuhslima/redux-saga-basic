import { combineReducers } from 'redux'
import pokemon from './pokemonAPI/reducer';


// ESSE COMBINE JUNTA TODOS, PQ O CORRETO É VC TER UM REDUCER POR TIPO / ETC... O QUE FICAR MELHOR
const rootReducer = combineReducers({
  pokemon
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
