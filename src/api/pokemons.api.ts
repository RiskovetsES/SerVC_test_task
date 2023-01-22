import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

/**
   * Fetch the list of pokemons from API
   * @param offset how many records to skip
   * @param limit how many records to return
   * @returns list of pokemons
   * 
   * @url https://pokeapi.co/docs/v2#resource-listspagination-section
   */
export const getList = (offset = 20, limit = 20) =>
  api.get(`/pokemon?offset=${offset}&limit=${limit}`);

/**
 * Fetch a single pokemon from API
 * @param id id or name of the pokemon
 * @returns pokemon
 * 
 * @url https://pokeapi.co/docs/v2#pokemon
 */
export const getOne = (id: number | string) =>
  api.get(`/pokemon/${id}`);
