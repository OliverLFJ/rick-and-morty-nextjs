'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface DataContextType {
    characters: []
    episodes: []
}

const DataContext = createContext<DataContextType | any>(null);

export const useDataContext = () => useContext(DataContext)

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [characters, setCharacters] = useState<[]>([])
    const [episodes, setEpisodes] = useState<[]>([])
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character?page=42')
            .then((response) => response.json())
            .then((data) => setCharacters(data.results))
        fetch('https://rickandmortyapi.com/api/episode?page=3')
            .then((response) => response.json())
            .then((data) => setEpisodes(data.results))
    }, [])

    return (
        <DataContext.Provider
            value={{
                characters,
                episodes
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
