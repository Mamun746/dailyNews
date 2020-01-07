import {USER_ARTICLE_REQUEST,
    USER_ARTICLE_SUCCESS,
    USER_ARTICLE_FAILURE,
    GET_OTHER,
    LATEST_GALLERY,
    GET_SELECTED_NEWS,
    CLEAR_SELECTED_NEWS,
    GET_SELECTED_GALLERY,
    CLEAR_SELECTED_GALLERY
} from './actionTypes'
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
export const getOtherNews=(other)=>{
    return{
        type:GET_OTHER,
        payload:other
    }
}

export const latestGallery=(gallery)=>{
    return{
        type:LATEST_GALLERY,
        payload:gallery
    }
}

export const selectedNews=(data)=>{
    return{
        type:GET_SELECTED_NEWS,
        payload:data
    }
}
export const clearSelectedNews=()=>{
    return{
        type:CLEAR_SELECTED_NEWS,
        payload:[]
    }
}
export const selectedGallery=(data)=>{
    return{
        type:GET_SELECTED_GALLERY,
        payload:data
    }
}

export const clearGallery=()=>{
    return{
        type:CLEAR_SELECTED_GALLERY,
        payload:[]
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


export const fetchOtherNews=()=>{
    return (dispatch)=>{
        
        axios.get(`http://localhost:3005/articles?_order=desc&_start=3&_end=10`)
        .then((res)=>{
            const articles=res.data
            dispatch(getOtherNews(articles))
        })
        .catch((error)=>{
            const errorMsg=error.message
            dispatch(getArticleFailure(errorMsg))
        })

    }
}


export const fetchLatestGallery=()=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3005/galleries?_order=desc&_limit=2`)
        .then((res)=>{
            const galleries=res.data
            dispatch(latestGallery(galleries))
        })
        .catch((error)=>{
            const errorMsg=error.message
            dispatch(getArticleFailure(errorMsg))
        })
    }
}

export const fetchSelectedNews=(id)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3005/articles?id=${id}`)
        .then((res)=>{
            const data=res.data
            dispatch(selectedNews(data))
        })
        .catch((error)=>{
            const errorMsg=error.message
            dispatch(getArticleFailure(errorMsg))
        })
    }
}

export const fetchSelectedGallery=(id)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3005/galleries?id=${id}`)
        .then((res)=>{
            const data=res.data
            dispatch(selectedGallery(data))
        })
        .catch((error)=>{
            const errorMsg=error.message
            dispatch(getArticleFailure(errorMsg))
        })
    }
}



