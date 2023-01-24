import React from 'react';
import {Link} from 'react-router-dom';

import styles from './PokemonCard.module.css'

interface PokemonCardProps {
    name: string;
    url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({name, url}) => {
    return (
        <li className={styles.item}>
            <Link className={styles.link} to={`/pokemon/${name}`}>
                <img className={styles.image} src={url} alt={name}/>
                <p className={styles.text}>{name}</p>
            </Link>
        </li>
    );
}

export default PokemonCard;