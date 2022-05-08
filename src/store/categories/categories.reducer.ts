import { AnyAction } from 'redux';
import {Category} from './../categories/categories.types';
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesError } from './categories.action';

export type CategoriesState = {
    readonly categories: Category[],
    readonly isLoading: boolean,
    readonly error: Error | null
}

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
  };

export const categoriesReducer = (state= CATEGORIES_INITIAL_STATE, action ={} as AnyAction) => {

    if(fetchCategoriesStart.match(action))   return {...state, isLoading: true}

    if(fetchCategoriesSuccess.match(action)) return {...state, isLoading: false, categories: action.payload}

    if(fetchCategoriesError.match(action)) return {...state, isLoading: false , error: action.payload}

    return state
    // switch(action.type){
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
    //         return {...state,isLoading:false, error: action.payload}
    
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
    //         return {...state, isLoading: true}

    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
    //         return {...state, isLoading:false, categories: action.payload}

    //     default:
    //         return state;
    // }
}
