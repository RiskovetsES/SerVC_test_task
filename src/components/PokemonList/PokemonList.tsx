import React, {useState, useEffect} from 'react';

import {getList, getOne} from '../../api/pokemons.api';
import PokemonCard from '../PokemonCard/PokemonCard';

import styles from './PokemonList.module.css'

interface Pokemon {
    name: string;
    url: string;
    sprites: string;
}

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const perPage: number = 20;

    useEffect(() => {
        const fetchPokemons = async () => {
            const res = await getList(perPage * (currentPage - 1), perPage);
            const pokemonsWithSprites = await Promise.all(res.data.results.map(async (pokemon) => {
                const sprite = await getOne(pokemon.name);
                return {
                    ...pokemon,
                    sprites: sprite.data.sprites.front_default
                }
            }))
            setPokemons(pokemonsWithSprites);
        }
        fetchPokemons();
    }, [currentPage]);

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.sprites}/>
                ))}
            </ul>
            <div>
                <button className={styles.paginationButton} onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}>Previous
                </button>
                <span className={styles.pageNumber}>{currentPage}</span>
                <button className={styles.paginationButton} onClick={() => setCurrentPage(currentPage + 1)}>Next
                </button>
            </div>
        </div>
    );
}

export default PokemonsList;