import {USER_ARTICLE_REQUEST,USER_ARTICLE_SUCCESS,USER_ARTICLE_FAILURE} from './actionTypes'
import axios from 'axios'

export const getArticleRequest=()=>{
    return{
        type:USER_ARTICLE_REQUEST
    }
}

export const getArticleSuccess=(article)=>{
    return{
        type:USER_ARTICLE_SUCCESS,
        payload:article
    }
}


export const getArticleFailure=(error)=>{
    return{
        type:USER_ARTICLE_FAILURE,
        payload:error
    }
}


export const getArticles=()=>{
    return (dispatch)=>{
        dispatch(getArticleRequest())
        axios.get(`http://localhost:3005/articles?_order=desc&_end=3`)
        .then((res)=>{
            const articles=res.data
            dispatch(getArticleSuccess(articles))
        })
        .catch((error)=>{
            const errorMsg=error.message
            dispatch(getArticleFailure(errorMsg))
        })

    }
}


export default getArticles;