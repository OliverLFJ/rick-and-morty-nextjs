'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface DataContextType {

}

const DataLocationContext = createContext<DataContextType | any>(null)
export const useDataLocationContext = () => useContext(DataLocationContext)
export const DataLocationContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [dataLocations, setDataLocations] = useState<[]>([])
    const [charactersURL, setCharactersURL] = useState<[]>([])
    const [charactersFromLocations, setCharactersFromLocations] = useState<[]>([])
    const [episodeSelected, setEpisodeSelected] = useState<number>(1)

    const fetchLocationsChapters = async () => {
        let urlPageApiEpisodes = 'https://rickandmortyapi.com/api/location'
        let getAllLocations: any = []
        while (urlPageApiEpisodes) {
            const response = await fetch(urlPageApiEpisodes)
            const data = await response.json()
            getAllLocations = [...getAllLocations, ...data.results]
            urlPageApiEpisodes = data.info.next;
        }
        const nameLocations = getAllLocations.map((locations: any) => locations.name)
        setDataLocations(nameLocations)
    }

    useEffect(() => {
        fetchLocationsChapters()
    }, [])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location/' + episodeSelected)
            .then((response) => response.json())
            .then((data) => setCharactersURL(data.residents))

    }, [episodeSelected])

    const getCharacters = async () => {
        const characters: any = await Promise.all(
            charactersURL.map((characterURL) => fetch(characterURL).then((response) => response.json()))
        )
        setCharactersFromLocations(characters)
    }

    useEffect(() => {
        if (charactersURL.length > 0) {
            getCharacters();
        }
    }, [charactersURL])


    return (
        <DataLocationContext.Provider
            value={{
                dataLocations,
                setEpisodeSelected,
                charactersFromLocations
            }}
        >
            {children}
        </DataLocationContext.Provider>
    )
}