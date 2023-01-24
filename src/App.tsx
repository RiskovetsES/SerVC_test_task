import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'
import PokemonsList from './components/PokemonList/PokemonList'
import PokemonPage from './components/PokemonPage/PokemonPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<PokemonsList/>}/>
                <Route path="pokemon/:id" element={<PokemonPage/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </div>
    )
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
        </div>
    );
}

export default App
