import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v1/cards'
});

export default api;
