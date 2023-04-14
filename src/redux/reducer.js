
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allFavorites : []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case ADD_FAVORITE:
            return{ 
                ...state,
                myFavorites: [...state.allFavorites, payload],
                allFavorites: [...state.allFavorites, payload]//con este trabajamos con una copia de todo para no pisar el original
            }

        case DELETE_FAVORITE:

            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER :
            const allCharacteresFiltered = state.allFavorites.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites:
                payload === 'allCharacters'
                ? [...state.allFavorites]
                : allCharacteresFiltered
            }


            case ORDER:
                const allFavoritesCopy = [...state.allFavorites]
                return{
                    ...state,
                    myFavorites: 
                        payload === 'A'
                        ? allFavoritesCopy.sort((a,b) => a.id - b.id)
                        : allFavoritesCopy.sort((a,b) => b.id - a.id)
                }

        default:
            return{...state}
    }

  

}

export default reducer