import {LATEST_GALLERY,GET_SELECTED_GALLERY,CLEAR_SELECTED_GALLERY} from '../actions/actionTypes'

const initialState={
    galleries:[],
    selected:[]
}


export const galleryReducer=(state=initialState,action)=>{
    switch(action.type){
        case LATEST_GALLERY:
            return{
                ...state,
                galleries:action.payload
            }
            case GET_SELECTED_GALLERY:
            return{
                ...state,
                selected:action.payload
            }

            case CLEAR_SELECTED_GALLERY:
                return{
                    ...state,
                    selected:action.payload
                }

            default:return state
    }
}