import { createContext, useContext, ReactNode, useState, useEffect } from 'react'

interface DataContextType {
    dataEpisodes: [],
    counterEpisodes: [],
    episodeSelected: number,
    setEpisodeSelected: React.Dispatch<React.SetStateAction<number[]>>
}

const DataEpisodesContext = createContext<DataContextType | any>(null)
export const useDataEpisodesContext = () => useContext(DataEpisodesContext)
export const DataEpisodesContextProvider = ({ children }: { children: ReactNode }) => {

    const [dataEpisodes, setDataEpisodes] = useState<[]>([])
    const [charactersURL, setCharactersURL] = useState<[]>([])
    const [charactersFromChapters, setCharactersFromChapters] = useState<[]>([])
    const [episodeSelected, setEpisodeSelected] = useState<number>(1)

    const fetchEpisodesChapters = async () => {
        let urlPageApiEpisodes = 'https://rickandmortyapi.com/api/episode'
        let getAllEpisodes: any = []
        while (urlPageApiEpisodes) {
            const response = await fetch(urlPageApiEpisodes)
            const data = await response.json()
            getAllEpisodes = [...getAllEpisodes, ...data.results]
            urlPageApiEpisodes = data.info.next;
        }
        const nameEpisodes = getAllEpisodes.map((episodes: any) => episodes.name)
        setDataEpisodes(nameEpisodes)
    }

    useEffect(() => {
        fetchEpisodesChapters()
    }, [])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/' + episodeSelected)
            .then((response) => response.json())
            .then((data) => setCharactersURL(data.characters))

    }, [episodeSelected])

    const getCharacters = async () => {
        const characters: any = await Promise.all(
            charactersURL.map((characterURL) => fetch(characterURL).then((response) => response.json()))
        )
        setCharactersFromChapters(characters)
    }

    useEffect(() => {
        if (charactersURL.length > 0) {
            getCharacters();
        }
    }, [charactersURL])

    return (
        <DataEpisodesContext.Provider
            value={{
                dataEpisodes,
                setEpisodeSelected,
                charactersFromChapters
            }}>
            {children}
        </DataEpisodesContext.Provider>
    )
}