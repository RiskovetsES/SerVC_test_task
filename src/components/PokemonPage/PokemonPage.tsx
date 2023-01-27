import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import {getOne} from '../../api/pokemons.api';

import styles from './PokemonPage.module.css'

interface Pokemon {
    name: string;
    sprites: { front_default: string };
    weight: number;
    height: number;
    types: [{ type: { name: string } }];
    stats: [{
        base_stat: number;
        stat: { name: string }
    }];
}

interface PokemonParams {
    id: string;
}

const PokemonPage: React.FC = () => {
    const {id} = useParams<Record<string, string>>();
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                if (id) {
                    const res = await getOne(id);
                    setPokemon(res.data);
                } else {
                    setError("ID is not defined");
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            }
        }
        fetchPokemon();
    }, [id]);

    return (
        <>
            <button className={styles.homeButton} onClick={() => navigate(-1)}>Home</button>
            <div className={styles.container}>

                {pokemon ? (
                    <>
                        <h1 className={styles.title}>{pokemon.name}</h1>
                        <img className={styles.image} src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        <p className={styles.text}>Weight: {pokemon.weight}px</p>
                        <p className={styles.text}>Height: {pokemon.height}px</p>
                        <p className={styles.text}>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
                        <ul className={styles.statsList}>
                            {pokemon.stats.map((stat) => (
                                <li key={stat.stat.name}
                                    className={styles.statsItem}>{`${stat.stat.name}: ${stat.base_stat}px`}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    error ? <p>Error: {error}</p> : <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default PokemonPage;
