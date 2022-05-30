/*import {createStore, combineReducers} from 'redux'

const reducers = combineReducers( {
    prop1: function(state, action){
        return{ test: 'teste' }
    },
    prop2: function(state, action){
        return {
            test: 'testando'
        }
    },

    
})
function store(){
    return createStore(reducers)
}

export default store*/

import {configureStore} from '@reduxjs/toolkit'
//import { useReducer } from 'react'
import userReducer from './UserSlice' 

export default configureStore({
    reducer: {
        user: userReducer,
    }
})