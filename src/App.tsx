import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// REDUX
  // FERRAMENTAS DE HOOK
  /*
    useDispatch -> CHAMA A FUNÇÃO
    useSelector -> BUSCA A INFORMAÇÃO DA STORE
  */
import { useDispatch, useSelector } from 'react-redux'
  // TIPAGEM
    /*
      pra saber os tipos do aplication state
    */
import { ApplicationState } from './store/index';
import { pokemonListRequest , pokemonDetailsRequest } from './store/modules/pokemonAPI/actions';


function App() {
  const dispatch = useDispatch();
  const [ pokemonId , setPokemonId ] = useState('');

  const list = useSelector((state: ApplicationState) => state.pokemon.list);

  useEffect(()=> {
    dispatch(pokemonListRequest());
  },[dispatch])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input onChange={(e) => setPokemonId(e.target.value)} type="text"/>
        <button onClick={() => dispatch(pokemonDetailsRequest(pokemonId))} >PESQUISE PELO ID</button>

        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>ID</th>
              <th>DETALHE</th>
            </tr>
          </thead>
          <tbody>
            {
              list.error
                ?
                  <tr>
                    <td>{ list.error}</td>
                  </tr>
                :
                list && list.map((item:any) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.id}</td>
                      <td><button onClick={() => dispatch(pokemonDetailsRequest(item.id))}>DETALHE</button></td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>

      </header>
    </div>
  );
}

export default App;
