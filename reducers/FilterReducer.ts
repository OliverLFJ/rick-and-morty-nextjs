import { SET_SPECIE, SET_STATUS, SET_GENDER, SET_NAME } from './ActionType'

interface FilterState {
    name: string,
    status: string,
    gender: string,
    specie: string,
}

interface Action {
    type: string,
    payload: string,
}

const FiltersReducer: any = (state: FilterState, action: Action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload }
        case SET_GENDER:
            return { ...state, gender: action.payload }
        case SET_STATUS:
            return { ...state, status: action.payload }
        case SET_SPECIE:
            return { ...state, specie: action.payload }
        default:
            return state
    }
}

export default FiltersReducer;