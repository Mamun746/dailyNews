import {USER_ARTICLE_REQUEST,USER_ARTICLE_SUCCESS,USER_ARTICLE_FAILURE} from '../actions/actionTypes'

const initialState={
    loading:false,
    articles:[],
    error:''

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