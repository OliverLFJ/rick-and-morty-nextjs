'use client'
import { createContext, useContext, useState, useEffect, useReducer, Reducer, ReactNode } from 'react'
import FiltersReducer from '@/reducers/FilterReducer'

interface State {
    name: string,
    status: string,
    gender: string,
    specie: string,
}

interface Action {
    type: string,
    payload: string,
}

interface DataContextType {
    character: [],
    pageSelected: number,
    pages: number,
    dontFind: boolean,
    pagesInComponent: number[],
    totalButtons: number[],
    prevStatus: boolean,
    nextStatus: boolean,
    buttonFind: boolean,
}

const DataCharacterContext = createContext<DataContextType | any>(null)
export const useDataCharacterContext = () => useContext(DataCharacterContext)
export const DataCharacterContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [character, setCharacter] = useState<[]>([])
    const [pages, setPages] = useState<number>(0)
    const [pageSelected, setPageSelected] = useState<number>(1)
    const [dontFind, setDonFind] = useState<boolean>(false)
    const [pagesInComponent, setPagesInComponent] = useState<number[]>([])
    const [totalButtons, setTotalButtons] = useState<number[]>([])
    const [prevStatus, setPrevStatus] = useState<boolean>(false)
    const [nextStatus, setNextStatus] = useState<boolean>(false)
    const [buttonFind, setButtonFind] = useState<boolean>(false)

    const initialState: State = {
        name: '',
        status: '',
        gender: '',
        specie: ''
    }

    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(FiltersReducer, initialState);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageSelected}&name=${state.name}&status=${state.status}&gender=${state.gender}&species=${state.specie}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCharacter(data.results)
                setPages(data.info.pages)
                setDonFind(false)
            })
            .catch((error) => {
                setCharacter([])
                setPageSelected(1)
                setPagesInComponent([])
                setPages(0)
                setTotalButtons([])
                setButtonFind(false)
                setNextStatus(false)
                setPrevStatus(false)
                setDonFind(true)
            })
    }, [pageSelected, state.name, state.status, state.specie, state.gender, state])

    useEffect(() => {
        setPagesInComponent([]);
        for (let index: number = 1; index < pages + 1; index++) {
            setPagesInComponent((prev: number[]) => [...prev, index]);
        }
    }, [pages]);

    useEffect(() => {
        const index = pagesInComponent.indexOf(pageSelected)
        if (nextStatus === true) {
            setNextStatus(false)
            setTotalButtons([...pagesInComponent.slice(index, index + 4)])
        } else if (prevStatus === true) {
            setPrevStatus(false)
            setTotalButtons([...pagesInComponent.slice(index - 1, index + 3)])
        } else if (buttonFind === true) {
            setTotalButtons([...pagesInComponent.slice(index, index + 4)])
        } else {
            setTotalButtons([...pagesInComponent.slice(index, index + 4)])
        }
    }, [prevStatus, nextStatus, pagesInComponent, pages, pageSelected, buttonFind])

    return (
        <DataCharacterContext.Provider
            value={{
                character,
                totalButtons,
                pageSelected,
                setPageSelected,
                setPrevStatus,
                setNextStatus,
                setButtonFind,
                nextStatus,
                prevStatus,
                buttonFind,
                setPagesInComponent,
                dispatch,
                state,
                dontFind
            }}
        >
            {children}
        </DataCharacterContext.Provider>
    )
}