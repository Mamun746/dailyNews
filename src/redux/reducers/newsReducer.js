import {USER_ARTICLE_REQUEST,
    USER_ARTICLE_SUCCESS,
    USER_ARTICLE_FAILURE,
    GET_OTHER,
    GET_SELECTED_NEWS,
    CLEAR_SELECTED_NEWS
} from '../actions/actionTypes'

const initialState={
    loading:false,
    articles:[],
    others:[],
    error:'',
    selected:[]

}


export const newsReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_ARTICLE_REQUEST:
            return{
                ...state,
                loading:true
            }
            case USER_ARTICLE_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    articles:action.payload,
                    error:''
                }
                case GET_OTHER:
                return{
                    ...state,
                   
                    others:action.payload,
                    
                }
                case GET_SELECTED_NEWS:
                return{
                    ...state,
                    selected:action.payload,
                    
                }
                case CLEAR_SELECTED_NEWS:
                return{
                    ...state,
                    selected:action.payload,
                    
                }
                case USER_ARTICLE_FAILURE:
                    return{
                        ...state,
                        loading:false,
                        articles:[],
                        error:action.payload
                    }

                    default: return state
    }
}